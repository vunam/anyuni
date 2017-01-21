import { renderToString } from 'react-dom/server'
import getHtmlTemplate from './htmlTemplate'
import Root from '../../app/components/Root'

const renderApp = () => {
  const html = renderToString(Root())
  const something = getHtmlTemplate(html)
  return something
}

export default renderApp
