const {
  performance,
  PerformanceObserver } = require('perf_hooks');
const Timer = require('timerpromise');


const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  obs.disconnect;
});
obs.observe({ entryTypes: ['measure'] });

(async () => {
  performance.mark('t0');
  await new Timer(3).start;
  performance.mark('t1');
  performance.measure('t0 to t1', 't0', 't1');
  await new Timer(2).start;
  performance.mark('t2');
  performance.measure('t1 to t2', 't1', 't2');
  performance.measure('t0 to t2', 't0', 't2');
})();




