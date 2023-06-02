// 1 - Iniciando o projeto
// console.log("Express com TypeScript");

// 2 - Inicializando o express
import express, { NextFunction, Request, Response } from "express";

const app = express();
const PORT = 3000;

// 3 - Rota com POST (Habilita a aplicação trabalhar com JSON)
app.use(express.json());

// 11 - Middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

// 2 - Rota com GET
app.get("/", (req, res) => {
  return res.send("TypeScript com Express!");
});

// 3 - Rota com POST
app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("Produto adicionado!");
});

// 4 - Rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  // req.method = VERBO HTTP
  if (req.method === "POST") {
    return res.send("Inseriu algum registro!");
  } else if (req.method === "GET") {
    return res.send("Leu algum registro!");
  } else {
    return res.send("Não podemos realizar esta operação!");
  }
});

// 5 - Interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  // return req.send("Utilizando as interfaces");
  return res.send("Utilizando as interfaces");
});

// 6 - Enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 29.99,
    color: "Purple",
    size: ["P", "M", "G"],
  });
});

// 7 - Router Parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    const product = {
      id: 1,
      name: "Boné",
      price: 14.99,
    };

    return res.json(product);
  } else {
    return res.send("Produto não encontrado!");
  }
});

// 8 - Rotas complexas
app.get(
  "/api/product/:productId/review/:reviewId",
  (req: Request, res: Response) => {
    console.log(req.params);

    const productId = req.params.productId;
    const reviewId = req.params.reviewId;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
  }
);

// 9 - Router Handler
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com id: ${req.params.id}`);

  if (req.params.id === "7") {
    return res.send('Usuário "Emerson" encontrado!');
  } else if (req.params.id === "1") {
    return res.send('Usuária "Raiane" encontrada!');
  }
  return res.send("Usuário não encontrado!");
}

app.get("/api/user/:id", getUser);

// 10 - Middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Acesso permitido");
    next();
  } else {
    console.log("Acesso negado!");
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem vindo a área administrativa!" });
});

// 12 - Request e Response com Generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`Id: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

// 13 - Tratando Erros
app.get("/api/error", (req: Request, res: Response) => {
  try {
    // Forçando erro
    throw new Error("Algo deu errado!");
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
});

/*-----------------------------------------------------------------------------------*/

app.listen(PORT, () => {
  console.log(`Aplicação funcionando na porta ${PORT} com sucesso!`);
});
