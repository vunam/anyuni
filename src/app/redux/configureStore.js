import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    applyMiddleware()
  )
}
