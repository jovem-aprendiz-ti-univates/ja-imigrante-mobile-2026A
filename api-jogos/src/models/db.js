const Database = require('better-sqlite3');
const path = require('path');

const dbPath = process.env.DB_PATH || path.join(__dirname, '../../jogos.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS jogos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    urlImagem TEXT NOT NULL DEFAULT '',
    loja VARCHAR(100) NOT NULL DEFAULT ''
  );
`);

module.exports = db;
