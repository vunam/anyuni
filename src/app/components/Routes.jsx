import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Home from './containers/Home/Home'
import Other from './containers/Other/Other'
import NotFound from './containers/NotFound/NotFound'

const Routes = (
  <Route path="/">
    <IndexRoute component={Home} />
    <Route path="other" component={Other} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default Routes
