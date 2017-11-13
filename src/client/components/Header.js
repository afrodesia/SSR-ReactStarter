import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'


export default () => {
  return (
    <header>
        <div className="logo">
          <Link to="/">
              Logo Here
          </Link>
        </div>
        <Navigation />
      </header>
  )
}