import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { render } from './util'
import { getStore } from '../store'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'

const app = express()

app.use(express.static('public'))

app.get('/api/news', (req, res) => {
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
