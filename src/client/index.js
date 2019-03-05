import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import getStore from '../store'
import Routes from '../Routes'

const App = () => {
  return (
    <Provider store={getStore(true)}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App/>, document.getElementById('root'))
