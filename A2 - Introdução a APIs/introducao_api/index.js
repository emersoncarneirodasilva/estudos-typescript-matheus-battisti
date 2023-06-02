const express = require("express");
const app = express();
const PORT = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Rotas - Endpoints
app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello, world!" });
});

app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name) {
    res.status(422).json({ msg: "O campo nome é obrigatório" });
    return;
  }

  console.log(name);
  console.log(price);

  res.status(201).json({ msg: `O produto ${name} foi criado com sucesso!` });
});

app.listen(PORT);
