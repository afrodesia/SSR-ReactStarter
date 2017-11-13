import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AdminNav from './AdminNav'


class  Navigation extends Component {
  constructor(props){
    super(props)
    this.state = {
      isExpanded : false
    }
  }
  handleToggle(e){
    e.preventDefault()
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }
  render(){

    const  { isExpanded } = this.state

    return(
      <nav className="nav">
        <i className="fa fa-bars" 
            aria-hidden="true"
            onClick={(e) => this.handleToggle(e)}
            >
            
        </i>
        <ul className={`collapsed ${isExpanded ?  'is-expanded' : '' }`} >
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/users">users</Link></li>
          <AdminNav />
        </ul>
      

      </nav>
    )
  }
}


// function mapStateToProps({ auth }) {
//   return { auth }
// }

export default Navigation