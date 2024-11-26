import express from "express";
import multer from "multer";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin:"http://localhost:8000",
  optionsSuccessStatus: 200
}

// Configura o armazenamento das imagens enviadas pelo formulário
const storage = multer.diskStorage({
  // Define o diretório de destino para as imagens
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // Define o nome do arquivo, mantendo o nome original
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

// Cria uma instância do multer com a configuração de armazenamento
const upload = multer({ dest: "./uploads" , storage})

// Função que define as rotas da aplicação
const routes = (app) => {
  app.use(express.json());
  // Habilita o middleware para analisar o corpo das requisições JSON
  app.use(cors(corsOptions))
  app.get("/posts", listarPosts);
  // Rota para buscar todos os posts
  app.post("/posts", postarNovoPost);
  // Rota para criar um novo post
  app.post("/upload", upload.single("imagem"), uploadImagem) 
  // Rota para fazer upload de uma imagem

  app.put("/upload/:id", atualizarNovoPost)
};

export default routes;