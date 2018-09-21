const express = require('express');
const PORT = 4321;

const app = express(); //God object, implements event emitter

app
  .all('/', req => req.res.send('Hello there')) //вызываем любым глаголом хттп
  .get('/web', req => req.res.send('Ohh awesome'))
  //объект в первом аргументе маршрутизатора уже содержится в первом аргументе,
  // так что можно получать доступ к response через request
  .get('/num', req => req.res.send(404)) //число воспринимается как статус-код
  .listen(process.env.PORT || PORT, () => console.log('It works')); //берем из среды, а если нет - наш порт
