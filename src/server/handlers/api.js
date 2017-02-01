import searchHandler from './search'

const apiHandler = (ctx, next) => {
  const path = ctx.params[0]
  if (path.startsWith('search')) searchHandler(ctx, next)
}

export default apiHandler
