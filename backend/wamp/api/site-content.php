<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$config = require dirname(__DIR__) . '/config.php';

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Vary: Origin');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

require dirname(__DIR__) . '/db.php';

try {
    $pdo = getPdoConnection();
    $stmt = $pdo->query(
        'SELECT section_key, data_json
         FROM portfolio_sections
         WHERE is_active = 1'
    );

    $payload = [];
    foreach ($stmt->fetchAll() as $row) {
        $sectionKey = (string) $row['section_key'];
        $decoded = json_decode((string) $row['data_json'], true);
        if (json_last_error() === JSON_ERROR_NONE) {
            $payload[$sectionKey] = $decoded;
        }
    }

    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'message' => 'Erreur serveur backend.',
        'details' => $exception->getMessage(),
    ]);
}
