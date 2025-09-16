import { Component, useState } from 'react'
import './App.css'

class toggleButton extends Component{
  constructor(props){
    super(props);
    //this initial state of button off
    this.state={
      isOn : false,
    };
  }
  toggle = () => {
    this.setState({isOn: !this.state.isOn});
  };
  render(){
    return(
      <div>
        <button className='btn' onClick={this.toggle}>{this.state.isOn?"NO":"OFF"}</button>
      </div>
    );
  }
}
export default toggleButton;