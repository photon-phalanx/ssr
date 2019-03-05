import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
import React from 'react'
import getStore from '../store'
import { Provider } from 'react-redux'

export const render = (req) => {
  const str = renderToString((
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  ))
  return `
  <html>
    <body>
    <div id="root">${str}</div>
    <script src="/index.js"></script>
</body>
</html>
  `
}
