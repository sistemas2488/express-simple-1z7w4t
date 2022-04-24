var express = require('express'); //llamamos a Express
var app = express();

var port = process.env.PORT || 4200; // establecemos nuestro puerto

app.get('/', function (req, res) {
  res.json({ mensaje: 'dsdsdsdsd!' });
});

app.get('/hola', function (req, res) {
  res.json({ mensaje: '¡Hola dsdsdsdsddsdsd !' });
});

app.post('/', function (req, res) {
  res.json({ mensaje: 'Método post' });
});

app.delete('/', function (req, res) {
  res.json({ mensaje: 'Método delete' });
});

// iniciamos nuestro servidor
app.listen(port);
console.log('API escuchando en el puerto ' + port);
