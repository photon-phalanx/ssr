import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import routes from '../Routes'
import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

export const render = (req, store, context) => {
  const str = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {renderRoutes(routes)}
          {/*{routes.map(route => (*/}
            {/*<Route {...route} />*/}
          {/*))}*/}
        </div>
      </StaticRouter>
    </Provider>
  ))

  const cssStr = context.css || ''

  return `
  <html>
    <body>
    <div id="root">${str}</div>
    <style>${cssStr}</style>
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
