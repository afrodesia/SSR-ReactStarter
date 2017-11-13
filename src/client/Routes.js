import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import NotFound from './pages/NotFoundPage'
import UsersList from './pages/UsersList'
import Admins from './pages/AdminsPage'

import App from './App'

export default [
  {
    ...App,
    routes: [
       {
        path: '/',
        ...Home,
        exact: true
      },
      {
        path: '/about',
        ...About,
        exact: false
      },
      {
        path: '/contact',
        ...Contact,
        exact: false
      },
      {
        path: '/users',
        ...UsersList,
        exact: false
      },
      {
        path: '/admins',
        ...Admins,
        exact: false
      },
      {
        ...NotFound
      }
    ]
  }

]


