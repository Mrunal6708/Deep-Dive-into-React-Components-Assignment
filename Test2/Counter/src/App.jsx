import React,{ Component } from 'react'
import './App.css'

class counter extends Component {
  constructor(props){
    super(props);
    //initial state
    this.state={
      count : 0,
    };
  }
  //method to increment count
  increment = () => {
    this.setState({count:this.state.count + 1});
  };
  //metnod to decrment count
  decrement = () => {
    this.setState({count:this.state.count -1});
  };

  render(){
    return(
      <div className='countercom'>
        <h2>Counter Component</h2>
        <p>Count:{this.state.count}</p>
        <button className='btn1' onClick={this.increment}>Increment</button>
        <button className='btn2' onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
export default counter