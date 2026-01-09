import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from '../api/routes/users'

dotenv.config();

// src/api.js
const BASE_URL = "https://prj-coffedelivery.onrender.com/api";

export default BASE_URL;


const app = express();

app.use(cors());
app.use(express.json());
app.get('/api', (req, res) => {
  res.send('Bem-vindo à API');
});


app.use('/api', routes);



app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
