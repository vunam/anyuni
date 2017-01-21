import KoaRouter from 'koa-router'
import renderApp from './helper/renderApp'

const router = new KoaRouter()

// Our app
router.get('/*', (ctx, next) => {
  ctx.body = renderApp()
  next()
})

// Reserved for api
router.get('/api/*', (ctx, next) => {
  ctx.body = 'hello anyuni'
  next()
})

export default router.routes()
