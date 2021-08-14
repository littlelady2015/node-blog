/**
 * @description 存储配置
 */
const { isProd } = require('../utils/env');

let Redis_CONF = {}

let MySql_CONF = {
  host: 'localhost',
  user: 'root',
  database: 'koa2-weibo-db',
  password: '12345678',
  dialect: 'mysql'
}


module.exports = {
  MySql_CONF,
  Redis_CONF

}

