import express from 'express'
import React from 'react'
import proxy from 'express-http-proxy'
import { renderToString } from 'react-dom/server'
import { render } from './util'
import { getStore } from '../store'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'

console.log(process.env.isServer)
const app = express()

app.use(express.static('public'))

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

app.get('/ssr/news', (req, res) => {
  console.log('get news')
  res.json(new Array(5).fill(1).map((v, idx) => ({
    id: idx,
    news: idx
  })))
})

app.get('*', async (req, res) => {

  const store = getStore()

  const matchedRoutes = matchRoutes(routes, req.path)

  const promises = []
  matchedRoutes.forEach(({route}) => {
    if (route.loadData) {
      promises.push(route.loadData(store))
    }
  })

  await Promise.all(promises)

  res.send(render(req, store))
})

const server = app.listen(3000, function () {
  console.log('start')
})
