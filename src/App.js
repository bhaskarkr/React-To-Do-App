import React, { Component } from 'react';
import Task from './Task/Task';
import './App.css';

class App extends Component {
  state = {
    tasks:[]
  }
  handleSubmit= (event) =>{
    event.preventDefault();
      const title = event.target.title.value;
      const task  = event.target.task.value;
      const date  = event.target.date.value;
      console.log(title,task);
      document.getElementById("myform").reset();
      var k = this.state.tasks;
      k.push({"title":title,"task":task,"date":date});
      console.log(k);
      this.setState({tasks:k});
      
  }
  handleDelete=(index)=>{
    var k = this.state.tasks;
    k.splice(index,1);
    console.log(k);
    this.setState({tasks:k});
  }
  render() {
    return (
      <div className="App">  
        <div className="bg-img">  </div>  
         <form id="myform" onSubmit={this.handleSubmit}>
         <fieldset>
           <legend>Add Task</legend>
            <label>
              Title :
              <input type="text" name="title" required/>
            </label><br/>
            <label>
              Description : 
              <input type="text" name="task" required/>
            </label><br/>
            <label>
              Deadline : 
              <input type="datetime-local" name="date" required/>
            </label><br/>
            <button type="submit">Add</button>
            </fieldset>
          </form>
          <div>
              {this.state.tasks.map((tt,index)=>(<Task index={index} handleDelete={this.handleDelete} date={tt.date} title={tt.title} task={tt.task} />))}
          </div>
          
          
      </div>
    );
  }
}

export default App;
