# Comunicando com APIs no React Native

## O que mudou em relação às aulas anteriores?

Nas aulas anteriores, usamos o **SQLite**, que salva os dados **dentro do próprio celular**. Nesta aula, vamos usar uma **API**, que é um servidor rodando em outro lugar. O aplicativo se comunica com esse servidor pela rede.

```
Antes (SQLite):
  [Aplicativo] <──> [Banco de dados no celular]

Agora (API):
  [Aplicativo] <──> [Internet/Rede] <──> [Servidor (API)] <──> [Banco de dados no servidor]
```

---

## O que é uma API REST?

Uma **API REST** é um servidor que responde a requisições HTTP. Cada ação tem um verbo e um endereço:

| Verbo    | Endereço      | O que faz               |
|----------|---------------|-------------------------|
| GET      | /jogos        | Lista todos os jogos     |
| POST     | /jogos        | Cria um novo jogo        |
| PUT      | /jogos/1      | Atualiza o jogo de id 1  |
| DELETE   | /jogos/1      | Remove o jogo de id 1    |

O formato de dados trocado entre app e API é o **JSON**:

```json
{
  "id": 1,
  "nome": "The Last of Us",
  "urlImagem": "https://exemplo.com/imagem.jpg",
  "loja": "PlayStation Store"
}
```

---

## Como usar o `fetch`

O `fetch` é a função nativa do JavaScript (e do React Native) para fazer requisições HTTP.

### GET — buscar dados

```js
const response = await fetch('http://localhost:3000/jogos');
const jogos = await response.json();
```

### POST — enviar dados

```js
const response = await fetch('http://localhost:3000/jogos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: 'Minecraft', urlImagem: '...', loja: 'PC' }),
});
const jogoSalvo = await response.json();
```

### PUT — atualizar

```js
await fetch('http://localhost:3000/jogos/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: 'Minecraft', urlImagem: '...', loja: 'PC' }),
});
```

### DELETE — remover

```js
await fetch('http://localhost:3000/jogos/1', { method: 'DELETE' });
```

---

## Por que usamos `async` e `await`?

Com o **SQLite** das aulas anteriores, as funções eram **síncronas** — elas retornavam o resultado na hora:

```js
// SQLite (síncrono) — funciona sem async/await
function listarAlunos() {
  return db.getAllSync('SELECT * FROM alunos');
}

const alunos = listarAlunos(); // já tem o resultado
```

Com uma **API**, a requisição viaja pela rede, o que leva tempo. A função retorna uma **Promise** (uma promessa de resultado futuro). O `async/await` faz o código esperar esse resultado:

```js
// API (assíncrono) — precisa de async/await
async function listarJogos() {
  const response = await fetch('http://localhost:3000/jogos'); // espera a resposta
  return response.json(); // converte o JSON
}

const jogos = await listarJogos(); // espera a função terminar
```

Por isso, toda função que usa `fetch` precisa ser `async`, e todo lugar que a chama precisa do `await`.

---

## Tratamento de erros com `try/catch`

Como a API pode estar fora do ar ou a internet pode cair, sempre envolvemos as chamadas em `try/catch`:

```js
try {
  const jogos = await listarJogos();
  setJogos(jogos);
} catch (erro) {
  Alert.alert('Erro', 'Não foi possível conectar à API.');
}
```

---

## Estrutura do projeto

```
90306-api/
  src/
    app/
      _layout.js         — layout geral (igual às aulas anteriores)
      index.js           — tela principal com CRUD
      carrossel.js       — carrossel de jogos com imagens
    services/
      jogos.js           — funções de comunicação com a API (substituiu data/db.js)
```

A pasta `services/` substitui a `data/` das aulas anteriores. Em vez de falar com o SQLite, ela fala com a API via `fetch`.

---

## Estrutura da API (api-jogos/)

A API segue o padrão **MVC**, igual ao projeto PHP visto em sala:

```
api-jogos/
  src/
    controllers/
      JogoController.js  — recebe a requisição HTTP e manda a resposta
    models/
      db.js              — conexão com o banco de dados (SQLite)
      Jogo.js            — operações no banco (listar, criar, atualizar, excluir)
  index.js               — ponto de entrada: configura o Express e as rotas
```

### Como rodar a API

```bash
cd api-jogos
npm install
npm run dev
```

A API ficará disponível em `http://localhost:3000`.

### Como rodar o app mobile

```bash
cd 90306-api
npm install
npm start
```
