import express from 'express'
import React from 'react'
import proxy from 'express-http-proxy'
import { renderToString } from 'react-dom/server'
import { render } from './util'
import useApiServer from './apiServer'
import { getStore } from '../store'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'

console.log(process.env.isServer)
const app = express()

app.use(express.static('public'))

useApiServer(app)

app.use('*', (req, res, next) => {
  console.warn('logger', req.originalUrl)
  next()
})

app.use('/api', proxy('http://127.0.0.1:3000', {
  proxyReqPathResolver (req) {
    console.log('proxyReq', req.url)
    return '/ssr' + req.url
  }
}))

app.get('*', async (req, res) => {

  const store = getStore()

  const matchedRoutes = matchRoutes(routes, req.path)

  const promises = []
  matchedRoutes.forEach(({route}) => {
    if (route.loadData) {
      promises.push(route.loadData(store))
    }
  })
  console.log(promises)
  await Promise.all(promises)

  res.send(render(req, store))
})

const server = app.listen(3000, function () {
  console.log('start')
})
