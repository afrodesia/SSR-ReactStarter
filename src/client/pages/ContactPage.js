import React from 'react'
// import FormWrapper  from '../components/Form/FormWrapper'
import ContactForm from '../components/ContactForm'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <div className="HomeArea">
      <Helmet>
        <title> Contact - SSR Starter </title>
        <meta property="og:title" content="Users" />
      </Helmet>
        <h1>Contact Us</h1>
       {/*  <FormWrapper /> */} 
        <ContactForm />
    </div>
  )
}

export default { component:  Contact }
