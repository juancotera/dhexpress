const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use('/public', express.static(path.join(__dirname, 'public')));


const mainRouter = require('./routes/main.js');

app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}.`)
});
