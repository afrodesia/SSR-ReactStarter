import React from 'react'
import { Helmet } from 'react-helmet'


const Home = () => {
  return (
    <div className="HomeArea">
      <Helmet>
        <title> Home - SSR Starter </title>
        <meta property="og:title" content="Users" />
      </Helmet>
        <h1>The Intro to your custom splash page target area.</h1>
    
    </div>
  )
}

export default { component:  Home }

 