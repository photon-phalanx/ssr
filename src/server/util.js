import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import routes from '../Routes'
import React from 'react'
import { Provider } from 'react-redux'

export const render = (req, store) => {

  const str = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  ))
  return `
  <html>
    <body>
    <div id="root">${str}</div>
    <script>
    window.context= {
      state: ${JSON.stringify(store.getState())}
    }
</script>
    <script src="/index.js"></script>
</body>
</html>
  `
}
