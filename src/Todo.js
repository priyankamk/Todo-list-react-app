import React, { Component } from 'react';
import './App.css';

class Todo extends Component {

  deleteTodo = id => {
    this.props.removeTodo(id)
  }

  render() {
    return (
      <div className="App">
        {this.props.value}

        <button className="deleteButton" onClick={() => this.deleteTodo(this.props.id)}> X</button>
      </div>
    )
  }
};

export default Todo;

