import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const composeEnhancers = process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware()
    )
  )
}
