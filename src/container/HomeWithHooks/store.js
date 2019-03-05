import { useReducer } from 'react'
import { CHANGE_HOME_LIST } from '../Home/store/contants'

function reducer (state, action) {
  switch (action.type) {
    case CHANGE_HOME_LIST : {
      return {
        ...state,
        newsList: action.payload
      }
    }
    case 'test' : {
      return {
        ...state,
        newsList: [...state.newsList, action.payload]
      }
    }
    default:
      return state
  }
}

const initState = {
  newsList: []
}

const homeStateCreater = (tryABrackChange) => {
  if (tryABrackChange) {
    initState.newsList.push(tryABrackChange)
  }
  return useReducer(reducer, initState)
}

export default homeStateCreater
