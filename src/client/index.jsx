import React from 'react'
import { render } from 'react-dom'
import Root from '../app/components/Root'
import Routes from '../app/components/Routes'
import configureStore from '../app/redux/configureStore'

const renderClient = () => {
  const serverState = window.__store__ // eslint-disable-line
  const store = configureStore(JSON.parse(serverState))
  render(
    <Root routes={Routes} store={store} />,
    document.getElementById('root')
  )
}

renderClient()
