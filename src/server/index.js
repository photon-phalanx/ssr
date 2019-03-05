import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import {render} from './util'
const app = express()

app.use(express.static('public'))

app.get('/api/news', (req, res) => {
  res.json({
    success: true
  })
})

app.get('*', (req, res) => {
  res.send(render(req))
})

const server = app.listen(3000, function () {
  console.log('start')
})
