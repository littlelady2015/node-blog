/**
 * @description sequelize实例
 */
const { Sequelize } = require('sequelize');
const { MySql_CONF } = require('../conf/db');
const { isProd} = require('../utils/env');
const {database, user, password, host} = MySql_CONF;
// create the connection to database
let conf = {
  host,
  dialect: 'mysql'
}
if (isProd) {
  conf.pool = {
    min: 0,
    max: 5,
    idle: 10000 //10s没使用，释放连接
  }
}

const seq = new Sequelize(database, user, password, conf);

module.exports = seq;
