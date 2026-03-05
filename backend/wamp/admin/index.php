<?php
declare(strict_types=1);

require dirname(__DIR__) . '/db.php';

$status = '';
$error = '';
$editKey = isset($_GET['edit']) ? trim((string) $_GET['edit']) : '';

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $action = (string) ($_POST['action'] ?? '');

        if ($action === 'init') {
            initializeDatabaseSchema();
            $status = 'Base et table initialisees avec succes.';
        } elseif ($action === 'upsert') {
            initializeDatabaseSchema();
            $sectionKey = trim((string) ($_POST['section_key'] ?? ''));
            $jsonValue = trim((string) ($_POST['data_json'] ?? ''));
            $isActive = isset($_POST['is_active']) ? 1 : 0;

            if ($sectionKey === '') {
                throw new RuntimeException('Le nom de section est obligatoire.');
            }

            json_decode($jsonValue, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new RuntimeException('JSON invalide: ' . json_last_error_msg());
            }

            $pdo = getPdoConnection();
            $stmt = $pdo->prepare(
                'INSERT INTO portfolio_sections(section_key, data_json, is_active)
                 VALUES(:section_key, :data_json, :is_active)
                 ON DUPLICATE KEY UPDATE
                    data_json = VALUES(data_json),
                    is_active = VALUES(is_active)'
            );
            $stmt->execute([
                ':section_key' => $sectionKey,
                ':data_json' => $jsonValue,
                ':is_active' => $isActive,
            ]);

            $status = 'Section enregistree: ' . $sectionKey;
            $editKey = $sectionKey;
        } elseif ($action === 'delete') {
            initializeDatabaseSchema();
            $sectionKey = trim((string) ($_POST['section_key'] ?? ''));
            if ($sectionKey === '') {
                throw new RuntimeException('Section invalide pour suppression.');
            }

            $pdo = getPdoConnection();
            $stmt = $pdo->prepare('DELETE FROM portfolio_sections WHERE section_key = :section_key');
            $stmt->execute([':section_key' => $sectionKey]);
            $status = 'Section supprimee: ' . $sectionKey;
            if ($editKey === $sectionKey) {
                $editKey = '';
            }
        }
    }

    initializeDatabaseSchema();
    $pdo = getPdoConnection();
    $rows = $pdo->query('SELECT section_key, data_json, is_active, updated_at FROM portfolio_sections ORDER BY section_key ASC')->fetchAll();
} catch (Throwable $exception) {
    $rows = [];
    $error = $exception->getMessage();
}

$current = [
    'section_key' => '',
    'data_json' => "{\n  \"title\": \"\",\n  \"description\": \"\"\n}",
    'is_active' => 1,
];

foreach ($rows as $row) {
    if ($editKey !== '' && $row['section_key'] === $editKey) {
        $current = [
            'section_key' => (string) $row['section_key'],
            'data_json' => (string) $row['data_json'],
            'is_active' => (int) $row['is_active'],
        ];
        break;
    }
}
?>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CRUD Portfolio - WAMP Backend</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f3f6fb; color: #153056; }
    .wrap { max-width: 1100px; margin: 24px auto; padding: 0 16px; }
    .card { background: #fff; border: 1px solid #d8e2f0; border-radius: 12px; padding: 16px; margin-bottom: 16px; }
    h1, h2 { margin: 0 0 12px; }
    .status { background: #e8f7e7; border: 1px solid #9cd09a; color: #1e5f1d; padding: 10px; border-radius: 8px; margin-bottom: 12px; }
    .error { background: #fde8e8; border: 1px solid #e0a0a0; color: #7a1f1f; padding: 10px; border-radius: 8px; margin-bottom: 12px; }
    label { display: block; margin: 10px 0 6px; font-weight: 700; }
    input[type="text"], textarea { width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid #b8c9e0; border-radius: 8px; font-family: Consolas, monospace; }
    textarea { min-height: 220px; }
    .actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
    button, .btn-link { border: 0; background: #1d5ea0; color: #fff; padding: 10px 14px; border-radius: 8px; cursor: pointer; text-decoration: none; display: inline-block; }
    .btn-danger { background: #c0392b; }
    .btn-secondary { background: #4f6788; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; border-bottom: 1px solid #e1e8f2; padding: 8px; vertical-align: top; }
    code { background: #eef3fb; padding: 2px 6px; border-radius: 6px; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>CRUD Portfolio (sans phpMyAdmin)</h1>
    <p>Endpoint API front: <code>/portfolio-api/api/site-content.php</code></p>

    <?php if ($status !== ''): ?>
      <div class="status"><?php echo htmlspecialchars($status, ENT_QUOTES, 'UTF-8'); ?></div>
    <?php endif; ?>

    <?php if ($error !== ''): ?>
      <div class="error"><?php echo htmlspecialchars($error, ENT_QUOTES, 'UTF-8'); ?></div>
    <?php endif; ?>

    <div class="card">
      <form method="post">
        <input type="hidden" name="action" value="init">
        <button type="submit" class="btn-secondary">Initialiser/Reparer la base</button>
      </form>
    </div>

    <div class="card">
      <h2><?php echo $editKey !== '' ? 'Modifier une section' : 'Ajouter une section'; ?></h2>
      <form method="post">
        <input type="hidden" name="action" value="upsert">
        <label for="section_key">Nom section (ex: about, socialLinks, projectCta)</label>
        <input id="section_key" name="section_key" type="text" value="<?php echo htmlspecialchars($current['section_key'], ENT_QUOTES, 'UTF-8'); ?>" required>

        <label for="data_json">JSON de la section</label>
        <textarea id="data_json" name="data_json" required><?php echo htmlspecialchars($current['data_json'], ENT_QUOTES, 'UTF-8'); ?></textarea>

        <label>
          <input type="checkbox" name="is_active" <?php echo ((int) $current['is_active']) === 1 ? 'checked' : ''; ?>>
          Actif
        </label>

        <div class="actions">
          <button type="submit">Enregistrer</button>
          <a class="btn-link btn-secondary" href="/portfolio-api/admin/">Nouveau</a>
        </div>
      </form>
    </div>

    <div class="card">
      <h2>Sections existantes</h2>
      <table>
        <thead>
          <tr>
            <th>Section</th>
            <th>Active</th>
            <th>Mis a jour</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <?php foreach ($rows as $row): ?>
          <tr>
            <td><code><?php echo htmlspecialchars((string) $row['section_key'], ENT_QUOTES, 'UTF-8'); ?></code></td>
            <td><?php echo ((int) $row['is_active']) === 1 ? 'Oui' : 'Non'; ?></td>
            <td><?php echo htmlspecialchars((string) $row['updated_at'], ENT_QUOTES, 'UTF-8'); ?></td>
            <td>
              <a class="btn-link btn-secondary" href="/portfolio-api/admin/?edit=<?php echo rawurlencode((string) $row['section_key']); ?>">Editer</a>
              <form method="post" style="display:inline;">
                <input type="hidden" name="action" value="delete">
                <input type="hidden" name="section_key" value="<?php echo htmlspecialchars((string) $row['section_key'], ENT_QUOTES, 'UTF-8'); ?>">
                <button class="btn-danger" type="submit" onclick="return confirm('Supprimer cette section ?');">Supprimer</button>
              </form>
            </td>
          </tr>
        <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </div>
</body>
</html>
