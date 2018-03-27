console.log('Egg server is starting');

console.log('__dirname = ' + __dirname);
console.log('process.env.WORKERS = ' + process.env.WORKERS);
console.log('process.env.PORT = ' + process.env.PORT);

console.log('=============================================');

process.env.VUE_ENV = 'server';

require('egg').startCluster({
  baseDir: __dirname,
  workers: process.env.WORKERS,
  port: process.env.PORT
});