import { Component, useState } from 'react'
import './App.css'

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state={
      userName: " ",
      Password: " ",
    };
  }

  handalchang = (event) =>{
  this.setState({ [event.target.name]:event.target.value})
  }

  handalsubmit=(event)=>{
    event.preventDefault(); 
    console.log("Username:",this.state.userName);
    console.log("Password:",this.state.Password);
    this.setState({username:" ", password:" "});
  };

  render(){
    return(
      <div>
        <h2>Login Form</h2>
        <form action="" onSubmit={this.handalsubmit}>
          <div>
            <label htmlFor="">Username:</label>
            <input type="text"
                   name='username'
                   value={this.state.userName}
                   onChange={this.handalchang}
          
                  />
          </div>

          <div>
            <label htmlFor="">password:</label>
            <input type="password"
            name='password'
            value={this.state.Password}
            onChange={this.handalchang}
  
            />
          </div>

          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;