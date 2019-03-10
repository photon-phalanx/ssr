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

  const context = {}

  const promises = []
  let status = 200

  matchedRoutes.forEach(({route}) => {
    if (route.fail) status = 404
    if (route.loadData) {
      const promise = new Promise((resolve, reject) => {
        route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })

  await Promise.all(promises)
  const html = render(req, store, context)

  // 控制服务端301， staticRouter会在Redirect的时候往context里塞入一个action
  if (context.action === 'REPLACE') {
    // status = 301
    // 血的教训，301会被前端缓存，要爆炸的，302啊啊啊啊啊啊啊
    return res.redirect(302, context.url)
  }

  res.send(status, html)
})

const server = app.listen(3000, function () {
  console.log('start')
})
