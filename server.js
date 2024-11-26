import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Importa o framework Express para criar a aplicação web.

const app = express();
// Cria uma instância do Express, que será o núcleo da aplicação.
app.use(express.static("uploads"))
routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
});
// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto para receber requisições.




