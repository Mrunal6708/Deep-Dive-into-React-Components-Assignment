import React, { Component } from 'react'
import './App.css'

class UserProfile extends Component{
  render(){
  const {userName,email} = this.props;

  return (
    <div style={{border:"1px solid #ccc ", padding:"16px", width:"300px", color: "#333"}}>
      <h2>UserProfile</h2>
      <p><strong>User Name:</strong>{userName}</p>
      <p><strong>Email</strong>{email}</p>
    </div>
  )
 }
}

export default UserProfile;
