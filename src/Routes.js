import React from 'react'
import { Route } from 'react-router-dom'
import Home from './container/Home'
import Home2 from './container/HomeWithHooks'
import Translation from './container/Translation'
import App from './App'

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.loadData
      },
      {
        path: "/translation",
        key: 'translation',
        exact: true,
        loadData: Translation.loadData,
        component: Translation
      }
    ]
  }
]
