import React from 'react'
import Header from './components/header'
import { renderRoutes } from 'react-router-config'

const App = ({route}) => {
  console.log(route)
  return <div>
    <Header/>
    {renderRoutes(route.routes)}
  </div>
}

export default App
