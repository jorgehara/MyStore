const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Estos son los orígenes permitidos
const whitelist = [
  // 'http://localhost:3000',
  // 'http://127.0.0.1:8080',
  // 'http://127.0.0.1:5500/',
  // 'http://localhost:5500',
];

// Opciones de CORS
const corsOptions = {
  origin: (origin, callback) => {
    // Revisa si la petición viene de un servidor que está en la whitelist
    const existe = whitelist.includes(origin) || !origin;
    if (existe) {
      callback(null, true);
    }
    else {
      callback(new Error(`El dominio '${origin}' no está permitido por CORS`));
    }
  },
  origin: '*'
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => res.send('Hello World!'));

app.get('/api/nuevaRuta', (req, res) => res.send('Hello nuevaRuta!'));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.get('/Ordener-de-Compras', (req, res) => res.json({
//   name : 'Producto 1',
//   price : 1000
// }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
