import React from 'react'
import { Route } from 'react-router-dom'
import Home from './container/Home'
import Translation from './container/Translation'
import App from './App'
import NotFound from './container/NotFound'

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: "/home",
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
      },
      {
        component: NotFound,
        fail: true
      }
    ]
  }
]
