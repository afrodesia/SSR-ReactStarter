import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'


// api.afrodesiamedia.com/wp-json/wp/v2/

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers(){
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  // head(){
  //   return(
  //     <Helmet>
  //       <title>  {`Users avaliable ${this.props.users.length}- SSR Starter ` }</title>
  //       <meta property="og:title" content="Users" />
  //     </Helmet>
  //   )
  // }
  render(){
    return(
      <div className="">
      <Helmet>
        <title>  {`${this.props.users.length} Users avaliable - SSR Starter ` }</title>
        <meta property="og:title" content="Users" />
      </Helmet>
        <h1>User List Here</h1>
        <h2>User List Here</h2>
        <h3>User List Here</h3>
        <ul className="users">{this.renderUsers()}</ul>
      </div>

    )
  }
}

function  mapStateToProps(state) {
  return{ users: state.users }
}


function loadData(store){
  return store.dispatch(fetchUsers())
}


export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}

