<?php
declare(strict_types=1);

function getConfig(): array
{
    return require __DIR__ . '/config.php';
}

function getServerConnection(): PDO
{
    $config = getConfig();
    $dsn = sprintf(
        'mysql:host=%s;port=%d;charset=utf8mb4',
        $config['db_host'],
        $config['db_port']
    );

    return new PDO($dsn, $config['db_user'], $config['db_password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
}

function getPdoConnection(): PDO
{
    $config = getConfig();

    $dsn = sprintf(
        'mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4',
        $config['db_host'],
        $config['db_port'],
        $config['db_name']
    );

    return new PDO($dsn, $config['db_user'], $config['db_password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
}

function initializeDatabaseSchema(): void
{
    $config = getConfig();
    $serverPdo = getServerConnection();
    $dbName = $config['db_name'];

    $serverPdo->exec(sprintf(
        'CREATE DATABASE IF NOT EXISTS `%s` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci',
        str_replace('`', '``', $dbName)
    ));

    $pdo = getPdoConnection();
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS portfolio_sections (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            section_key VARCHAR(80) NOT NULL UNIQUE,
            data_json LONGTEXT NOT NULL,
            is_active TINYINT(1) NOT NULL DEFAULT 1,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )'
    );
}
