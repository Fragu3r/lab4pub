const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Permitir servir arquivos estáticos (como CSS, imagens no futuro)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Minha Primeira App Node.js</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: #fff;
          margin: 0;
          padding: 0;
        }
        header {
          padding: 40px 20px;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.2);
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2rem;
        }
        main {
          padding: 20px;
          text-align: center;
        }
        footer {
          background-color: rgba(0, 0, 0, 0.2);
          text-align: center;
          padding: 15px;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
        a {
          color: #ffd700;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Bem-vindo à Minha Primeira App Web com Node.js</h1>
        <p>Feita com Express e publicada no Azure App Service</p>
      </header>
      <main>
        <p>Esta é a página inicial da aplicação rodando com sucesso.</p>
        <p>Explore, modifique, publique novamente!</p>
        <p>Feito por <strong>Thomas Branco 35218</strong> — 2025</p>
      </main>
      <footer>
        &copy; 2025 - Projeto de Laboratório | <a href="https://learn.microsoft.com/pt-br/training/" target="_blank">Microsoft Learn</a>
      </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
