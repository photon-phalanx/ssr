import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import {reducer as homeReducer} from '../container/Home/store'
import {reducer as translationReducer} from '../container/Translation/store'
import {reducer as headerReducer} from '../components/Header/store'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer,
})

const getStore = () => {
  return createStore(reducer,
    applyMiddleware(thunk)
  )
}

const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer,
    defaultState,
    compose(applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )
}

export {
  getStore,
  getClientStore
}
