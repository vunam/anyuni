import React from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

const Root = (renderProps) => {
  const { store } = renderProps
  const history = process.browser && store ? syncHistoryWithStore(browserHistory, store) : browserHistory
  return (
    <Provider store={store}>
      <Router history={browserHistory} {...renderProps} />
    </Provider>
  )
}

export default Root
