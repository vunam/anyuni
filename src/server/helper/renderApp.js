import { renderToString } from 'react-dom/server'
import { match } from 'react-router'
import getHtmlTemplate from './htmlTemplate'
import Root from '../../app/components/Root'
import Routes from '../../app/components/Routes'

let body

const renderWithProps = (err, redirect, renderProps) => {
  const html = renderToString(Root(renderProps))
  body = getHtmlTemplate(html)
}

const renderApp = async (ctx) => {
  const location = { pathname: ctx.url }
  match({ routes: Routes, location }, renderWithProps)
  return body
}

export default renderApp
