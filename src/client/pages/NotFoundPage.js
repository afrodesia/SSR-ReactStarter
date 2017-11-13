import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = ({staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <div className="">
    <Helmet>
        <title> 404! - Not Found - SSR Starter </title>
        <meta property="og:title" content="Users" />
      </Helmet>
        <h1>404 - Not Found</h1>
    </div>
  )
}

export default { component: NotFound }