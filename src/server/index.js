import Koa from 'koa'

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello anyuni'
  next()
})

app.listen(3000, () => {
  console.log('server started on 3000') // eslint-disable-line
})
