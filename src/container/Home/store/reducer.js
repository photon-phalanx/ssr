import {CHANGE_HOME_LIST} from './contants'
const defaultState = {
  name: 'de',
  newsList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case [CHANGE_HOME_LIST] : {
      console.log('haskjfhakjsfhak')
      return state
    }
    default:
      return state
  }
}
