import Koa from 'koa'
const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello anyuni'
})

app.listen(3000)
