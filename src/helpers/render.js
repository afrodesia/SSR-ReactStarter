import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import {renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import Routes from '../client/Routes'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'


export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {renderRoutes(Routes)}
        </div>
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  return `
  <!doctype html>
  <html lang="en-US">
  <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
   <meta name="HandheldFriendly" content="true">
   <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
   <meta name="description" content="" />
   <meta name="keywords" content="" />
   ${helmet.meta.toString()}
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />

   <link rel="stylesheet" href="assets/css/core.css" />
   ${helmet.title.toString()}
  </head>
  <body>
  
  <div id="root">${content}</div>
  <script>
    window.INITIAL_STATE = ${serialize(store.getState())}
  </script>
  <script src="assets/js/bundle.js"></script>
  </body>
  </html>
  `
}