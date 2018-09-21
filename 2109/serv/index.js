const express = require('express');
const PORT = 4321;

const app = express(); //God object, implements event emitter

app
  .use((req, res, next) => console.log(req.url) || next())
  // console.log возвращает undefined, так что можно его выполнить
  // и потом через || прокинуть выполнение к вызову next()
  // нужно обязательно вызывать res.send() или next(), а то всё повесится
  // после вызова next() или res.send() бессмысленно что-то писать в этом мидлвэре
  .get('/', req => req.res.send('Hello there'))
  .get('/web', req => req.res.send('Ohh awesome'))
  //объект в первом аргументе маршрутизатора уже содержится в первом аргументе,
  // так что можно получать доступ к response через request
  .get('/num', req => req.res.send(404)) //число воспринимается как статус-код
  .get('/fup', res => {
    throw new Error('imma dyin')
  })
  .use(req => req
    .res
    .set({'Content-Type': 'text/html; charset=utf-8'})
    .status(404)
    .end('<h1>Nope.</h1>')
  )
  .use((e, req, res, next) => res //этот мидлвэр сработает при переходе по проблемному маршруту
    .set({'Content-Type': 'text/html; charset=utf-8'})
    .status(500)
    .end('imma fuckin dead.')
  )
  .listen(process.env.PORT || PORT, () => console.log('It works')); //берем из среды, а если нет - наш порт
