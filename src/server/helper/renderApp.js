import { renderToString } from 'react-dom/server'
import { match } from 'react-router'
import getHtmlTemplate from './htmlTemplate'
import Root from '../../app/components/Root'
import Routes from '../../app/components/Routes'
import configureStore from '../../app/redux/configureStore'

let body

const renderWithProps = (err, redirect, renderProps) => {
  const store = configureStore({})
  const addedProps = { ...renderProps, store }
  const html = renderToString(Root(addedProps))
  body = getHtmlTemplate(html, JSON.stringify(store.getState()))
}

const renderApp = async (ctx) => {
  const location = { pathname: ctx.url }
  match({ routes: Routes, location }, renderWithProps)
  return body
}

export default renderApp
