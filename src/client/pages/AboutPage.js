import React from 'react'
import Content from '../components/Content'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <div className="">
    <Helmet>
        <title> About - SSR Starter </title>
        <meta property="og:title" content="Users" />
      </Helmet>
        <h1>About Us</h1>
        <Content />
    </div>
  )
}

export default { component: About }