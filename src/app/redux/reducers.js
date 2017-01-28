import { combineReducers } from 'redux'
import searchhero from '../components/common/SearchHero/dux'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  form: formReducer,
  searchhero
})

export default reducers
