export const types = {
  LOAD: 'APP/LOAD'
}

export const initialState = {
  test: 'aaa'
}

export default (state = initialState, action) => {
  switch (action.type) {
  case types.LOAD:
    return { ...state, test: action.test }
  default:
    return state
  }
}

export const actions = {
  doTest: (test) => ({ type: types.LOAD, test })
}
