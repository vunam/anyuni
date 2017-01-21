import { renderToString } from 'react-dom/server'
import getHtmlTemplate from './htmlTemplate'
import root from '../../app/components/root'

const renderApp = () => {
  const html = renderToString(root())
  const something = getHtmlTemplate(html)
  return something
}

export default renderApp
