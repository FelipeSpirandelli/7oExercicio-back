import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors("http://localhost:4200"));

let dataStore = [];

app.post('/data', (req, res) => {
  dataStore.push(req.body);
  res.status(201).json({message: 'Dados recebidos'});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
