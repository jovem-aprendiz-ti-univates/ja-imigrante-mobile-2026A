const express = require('express');
const cors = require('cors');
const JogoController = require('./src/controllers/JogoController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/jogos', JogoController.index);
app.post('/jogos', JogoController.store);
app.put('/jogos/:id', JogoController.update);
app.delete('/jogos/:id', JogoController.destroy);

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});
