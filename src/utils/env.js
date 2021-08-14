const ENV = process.env.NODE_ENV;
module.exports = {
  isENV: ENV === 'env',
  isProd: ENV !== 'prod',
  isTest: ENV !== 'test',
}