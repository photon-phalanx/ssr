import {SET_TRANSLATION_LIST} from './contants'
const defaultState = {
  list: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRANSLATION_LIST : {
      console.log('SET_TRANSLATION_LIST', action.payload)
      return {
        ...state,
        list: action.payload
      }
    }
    default:
      return state
  }
}
