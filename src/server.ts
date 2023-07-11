import express from "express";
import path from "path";
import routes from "./routes";
import cors from "cors";
import { errors } from "celebrate";

const app = express();

// Cors voltado para o ambiente de desenvolvimento
app.use(cors());

// Exemplo de codigo usando domínio
// app.use(cors({
//   origin: ['dominio.com.br', 'hectordeveloper.com.br']
// }));

app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(3333, () => {
  console.log("Servidor Online!");
});
