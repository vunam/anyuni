import Koa from 'koa'
import routes from './routes'

const app = new Koa()

app
  .use(routes)
  .listen(3000, () => {
    console.log('🤖  \x1b[1m\x1b[36manyuni server\x1b[0m started on port \x1b[1m\x1b[33m3000\x1b[0m  🤖') // eslint-disable-line
  })
