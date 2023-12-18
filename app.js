const express = require('express');
const app = express();
const port = 3000;

const productosRouter = require('./routes/productos.js')

app.use("/productos", productosRouter);

app.get('/', (req, res) => {
  res.send('Hola, ya estamos listos.');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}.`)
});
