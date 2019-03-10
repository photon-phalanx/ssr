import {SET_TRANSLATION_LIST} from './contants'
const defaultState = {
  list: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRANSLATION_LIST : {
      console.log('change login', action.payload)
      return {
        ...state,
        list: action.payload
      }
    }
    default:
      return state
  }
}
