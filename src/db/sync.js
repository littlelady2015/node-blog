const seq = require('./seq');
require('./model');
//测试链接
seq.authenticate().then(() => {
  console.log('sync ok');
}).catch((err) => {
  console.log('err');
});

//执行同步
seq.sync({force: true}).then(() => {
  process.exit();
})