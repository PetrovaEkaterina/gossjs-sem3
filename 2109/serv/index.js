const e = require('events');

const myEm = new e();
myEm.on('myEvent', () => {
  console.log('Hellooo there');
}); //в одном модуле эмитим

myEm.emit('myEvent'); // а в каком-нибудь другом модуле реагируем
// при некоторых определенных условиях, асинхронно
