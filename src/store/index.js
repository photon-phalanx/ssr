import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import {reducer as homeReducer} from '../container/Home/store'

const reducer = combineReducers({
  home: homeReducer,
})

const getStore = (inBrowser = false) => {
  console.log(inBrowser && window.__REDUX_DEVTOOLS_EXTENSION__)
  return createStore(reducer,
    compose(applyMiddleware(thunk),
      (inBrowser && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )
}

export default getStore
