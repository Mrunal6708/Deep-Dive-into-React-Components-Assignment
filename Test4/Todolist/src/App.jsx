import './App.css'
import { Component } from 'react'

class TodoList extends Component{
  constructor(props){
    super(props);
    //this is initial state is empty list & empty input 
    this.state={
      tasks: [],
      newTask: " ",
    };
  }
  //handal input changes
  handlechange =(event) => {
    this.setState({newTask:event.target.value});
  }

  //add a new task
  addTask=()=>{
    if (this.state.newTask.trim()!==" "){
      this.setState((prevStats)=>({
        tasks:[...prevStats.tasks,prevStats.newTask],
        newTask:" ",
        //clear input
      }));
    }
  };

  // addTask(task) {
  //   this.setState(prev => ({ tasks: [...prev.tasks, task] }));
  // }

  render(){
    return(
      <div>
        <h2>To do list</h2>
        {/*  input + button*/}
        <input type="text"
               value={this.state.newTask}
               onChange={this.handlechange}
               placeholder="Enter a Task"
        />
        <button onClick={this.addTask}>Add Task</button>

        {/* Task List */}
        <ul>{this.state.tasks.map((task,index)=>(<li key={index}>{task}</li>))}</ul>
      </div>
    );
  }
}
export default TodoList;