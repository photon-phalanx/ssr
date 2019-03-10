import React from 'react'
import { Route } from 'react-router-dom'
import Home from './container/Home'
import Home2 from './container/HomeWithHooks'
import Login from './container/Login'
import App from './App'

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.loadData
      },
      {
        path: "/login",
        key: 'login',
        component: Login
      }
    ]
  }
]
