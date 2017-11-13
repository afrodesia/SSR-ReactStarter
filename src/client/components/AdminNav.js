import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const AdminNav = ( { auth }) => {
  console.log('My auth status is', auth)

  const authButton = auth ? (
    <span>
      <li><a href = "/admins">admins</a></li>
      <li><a href = "/api/logout">logout</a></li>
    </span>
  ) : (   
      <li><a href = "/api/auth/google">login</a></li>
  )

  return (  <div className="admin-nav"> { authButton } </div> )

    
}

function mapStateToProps({ auth }) {
  return { auth }
}


export default connect(mapStateToProps)(AdminNav)