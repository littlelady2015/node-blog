/** 
 * @description 界面相关的放在view
 * */
const router = require('koa-router')();

router.get('/error', async (ctx, next) => {
  await ctx.render('error')
});
router.get('*', async (ctx, next) => {
  await ctx.render('404');
})
module.exports = router;