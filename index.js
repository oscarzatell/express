/* const http = require("http");
//Servidor normal de node js
const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world");
});

server.listen(3000, () => {
  console.log("Servidor en el puerto 3000");
});
 */
const express = require("express");
const app = express();

//Middleware
function logger(req, res, next) {
  console.log(
    `Ruta recibida: ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
}

app.use(express.json());
app.use(logger);

/*
app.all("/user", (req, res, next) => {
  console.log("por aqui pasó");
  next();
});
*/
//creando ruta about con un h1 dentro
app.get("/user/", (req, res) => {
  res.json({
    username: "Cameron",
    lastname: "Howe",
  });
});

app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("Peticion POST recibida");
});

app.put("/user/:id", (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.id} updated`);
});

app.delete("/user/:userId", (req, res) => {
  res.send(`User ${req.params.userId} deleted`);
});

app.listen(5000, () => {
  console.log("Servidor en el puerto 5000");
});
