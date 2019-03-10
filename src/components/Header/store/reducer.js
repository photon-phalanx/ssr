import {SET_HEADER_INFO} from './contants'
const defaultState = {
  login: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_HEADER_INFO : {
      console.log('change login', action.payload)
      return {
        ...state,
        login: action.payload
      }
    }
    default:
      return state
  }
}
