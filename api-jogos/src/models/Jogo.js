const db = require('./db');

function listar() {
  return db.prepare('SELECT * FROM jogos ORDER BY id DESC').all();
}

function criar(nome, urlImagem, loja) {
  const stmt = db.prepare('INSERT INTO jogos (nome, urlImagem, loja) VALUES (?, ?, ?)');
  const result = stmt.run(nome, urlImagem, loja);
  return { id: result.lastInsertRowid, nome, urlImagem, loja };
}

function atualizar(id, nome, urlImagem, loja) {
  db.prepare('UPDATE jogos SET nome = ?, urlImagem = ?, loja = ? WHERE id = ?')
    .run(nome, urlImagem, loja, id);
  return { id, nome, urlImagem, loja };
}

function excluir(id) {
  db.prepare('DELETE FROM jogos WHERE id = ?').run(id);
}

module.exports = { listar, criar, atualizar, excluir };
