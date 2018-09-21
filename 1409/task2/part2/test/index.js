const { get } = require('axios');
const should = require('should');

const cases = [
  { a: 1, b: 2, c: 3},
  { a: 4, b: 5, c: 6},
  { a: 4, b: 5, c: 9},
  { a: -1, b: 1, c: 0}
];

const headers = { 'Content-Type': 'application/json'};

cases.forEach(({a, b, c}) => {
  const URL = `http://localhost:3030/add/${a}/${b}`;

  describe('asyncAdd', () => {
    it(`should return sum of ${a} and ${b}`, (async () => {
      const {data : {"Сумма": s}} = await get(URL, {headers});
      s.should.equal(c);
    }));
  });
});
