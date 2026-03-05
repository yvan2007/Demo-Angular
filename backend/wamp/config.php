<?php
declare(strict_types=1);

// Configuration WAMP/MySQL
// Adapte ces valeurs selon ton environnement local.
return [
    'db_host' => '127.0.0.1',
    'db_port' => 3306,
    'db_name' => 'portfolio_db',
    'db_user' => 'root',
    'db_password' => '',
    'allowed_origins' => [
        'http://localhost:4200',
        'http://127.0.0.1:4200',
    ],
];
