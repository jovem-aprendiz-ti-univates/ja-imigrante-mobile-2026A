const Jogo = require('../models/Jogo');

function index(req, res) {
  const jogos = Jogo.listar();
  res.json(jogos);
}

function store(req, res) {
  const { nome, urlImagem = '', loja = '' } = req.body;

  if (!nome || !nome.trim()) {
    return res.status(400).json({ erro: 'O campo nome é obrigatório.' });
  }

  const jogo = Jogo.criar(nome.trim(), urlImagem.trim(), loja.trim());
  res.status(201).json(jogo);
}

function update(req, res) {
  const { id } = req.params;
  const { nome, urlImagem = '', loja = '' } = req.body;

  if (!nome || !nome.trim()) {
    return res.status(400).json({ erro: 'O campo nome é obrigatório.' });
  }

  const jogo = Jogo.atualizar(Number(id), nome.trim(), urlImagem.trim(), loja.trim());
  res.json(jogo);
}

function destroy(req, res) {
  Jogo.excluir(Number(req.params.id));
  res.status(204).send();
}

module.exports = { index, store, update, destroy };
