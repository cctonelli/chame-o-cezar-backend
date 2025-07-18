const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend do Chame o Cézar rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});