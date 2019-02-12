import React, { Component } from 'react';
import './Task.css';
import Countdown from 'react-countdown-now';

class Task extends Component {
  
  render() {
    return (
      <div className="Task">
            <section>
            <p className="date">{this.props.date}</p>
                <button className="closebutton" onClick={this.props.handleDelete}>X</button>
                <p>{this.props.index+1}</p>
                <strong><h1>{this.props.title}</h1></strong>
                <p>{this.props.task}</p>
                Time Remaining : <Countdown date={this.props.date} />
                
            </section>
      </div>
    );
  }
}

export default Task;
