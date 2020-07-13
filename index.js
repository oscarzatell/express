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

app.use(express.json());

//creando ruta about con un h1 dentro
app.get("/user", (req, res) => {
  res.json({
    username: "Cameron",
    lastname: "Howe",
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Peticion POST recibida");
});

app.put("/put", (req, res) => {
  res.send("Peticion de Actualizacion recibida");
});

app.delete("/delete", (req, res) => {
  res.send("<h1>Peticion de Borrado recibida</h1>");
});

app.listen(5000, () => {
  console.log("Servidor en el puerto 5000");
});
