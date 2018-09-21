const http = require('http');
const url = require("url");
const moment = require('moment');

const server = http.createServer();

server.listen(3030);

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  let params = url.parse(req.url).pathname;
  const parsedParams = params.split('/').filter(n => n);

  console.log(parsedParams);

  if (parsedParams[0] === 'add' && parsedParams[1] && parsedParams[2]) {
    let a = Number(parsedParams[1]);
    let b = Number(parsedParams[2]);
    res.end(JSON.stringify({ "Сумма": a + b }));
  }
});
