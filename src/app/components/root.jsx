import React from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

const Root = (renderProps) => {
  console.log('renderProps.store', renderProps.store)
  return (
    <Provider store={renderProps.store}>
      <Router history={browserHistory} {...renderProps} />
    </Provider>
  )
}

export default Root
