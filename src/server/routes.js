import KoaRouter from 'koa-router'
import send from 'koa-send'
import renderApp from './helper/renderApp'

const router = new KoaRouter()

router
  .get('/favicon.ico', (ctx) => {
    ctx.body = 'favicon'
  })

  // Reserved for api
  .get('/api/*', (ctx) => {
    ctx.body = 'hello anyuni'
  })

  // assets
  .get('/assets/*', (ctx, next) => {
    if (!ctx.params[0]) return next()
    return send(ctx, `./public/${ctx.params[0]}`)
  })

  // Our app
  .get('/*', async (ctx, next) => {
    ctx.body = await renderApp(ctx)
    next()
  })

export default router.routes()
