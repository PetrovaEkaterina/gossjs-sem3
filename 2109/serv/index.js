const express = require('express');
const PORT = 4321;

const app = express(); //God object, implements event emitter

app
  .get('/', req => req.res.send('Hello there'))
  .get('/web', req => req.res.send('Hello there'))
  //объект в первом аргументе маршрутизатора уже содержится в первом аргументе,
  // так что можно получать доступ к response через request
  .listen(process.env.PORT || PORT, () => console.log('It works')); //берем из среды, а если нет - наш порт
