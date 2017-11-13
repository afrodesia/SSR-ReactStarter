import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'
import { Helmet } from 'react-helmet'

class Admins extends Component{
  componentDidMount() {
    this.props.fetchAdmins()
  }
  renderAdmins(){
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  render(){
    return(
      <div>
      <Helmet>
        <title> Admin- SSR Starter </title>
        <meta property="og:title" content="Users" />
      </Helmet>
          <h3>Admin List</h3>
          <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

function mapStateToProps({ admins }) {
  return { admins }
}


export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(Admins)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}