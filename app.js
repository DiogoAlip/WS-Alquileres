const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("nuevoAlquiler", ({ inputAddress, inputMessage }) => {
    console.log(`${inputAddress} | ${inputMessage}`);
  });
  socket.emit("iniciar", "iniciar");
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "Negocio")));
app.use(express.static(path.join(__dirname, "DAL")));
app.use(express.static(path.join(__dirname, "presentacion")));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/presentacion/index.html`);
});

app.get("/alquiler", (req, res) => {
  res.sendFile(`${__dirname}/presentacion/alquiler.html`);
});

server.listen(3380, () => {
  console.log("servidor corriendo en el puerto http://localhost:3380");
});
