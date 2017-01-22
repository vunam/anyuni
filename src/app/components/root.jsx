import React from 'react'
import { Router, browserHistory } from 'react-router'

const Root = (renderProps) => (
  <Router history={browserHistory} {...renderProps} />
)

export default Root
