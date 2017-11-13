// ES 2015 JS
import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import render from './helpers/render'
import createStore from './helpers/createStore'
import proxy from 'express-http-proxy'

const app  = express()

// set up proxy for api call 
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  // Helps with google oauth library  
  proxyReqOptDecorator(opts){
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  }
}))

app.use(express.static('public'))
app.get('*', (req , res) => {
  const store = createStore(req)

  // Some logic to initialize and load data into the store

  const promises = matchRoutes(Routes, req.path)
  .map(( { route }) =>  {
    return route.loadData ?  route.loadData(store) : null
  })
  .map(promise => {
    if(promise){
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve)
      })
    }
  })
  console.log(promises)

  Promise.all(promises)
    .then(() => {

      const context = {}
      const content = render(req, store, context)
      
      if(context.url){
        return res.redirect(301, context.url )
      }
      if(context.notFound){
        res.status(404)
      } 
      res.send(content)
    })

  })

app.listen(3000, () => {
  console.log('listening on port 3000')
})