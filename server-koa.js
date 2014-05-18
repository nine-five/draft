var serve = require('koa-static');
var koa = require('koa');
var app = koa();
var port = 8080;
app.use(serve('.', {index: "index.htm"}));
app.listen(port);
console.log('httpServer at http://localhost:' + port);