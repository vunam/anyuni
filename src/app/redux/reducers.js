import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import searchhero from '../components/common/SearchHero/dux'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  searchhero
})

export default reducers
