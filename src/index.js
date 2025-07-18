const express = require('express');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend do Chame o Cézar rodando!');
});

app.get('/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});