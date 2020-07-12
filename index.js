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

//creando ruta about con un h1 dentro
app.get("/about", (req, res) => {
  res.send("<h1>about me</h1>");
});

app.get("/contact", (req, res) => {
  res.send("Formulario de contacto");
});

app.get("/test", (req, res) => {
  res.send("<h1>test</h1>");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(5000, () => {
  console.log("Servidor en el puerto 5000");
});
