import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

let todoCounter = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    };
  };

  handleInputChange = e => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const item = {
      id: todoCounter++,
      value: this.state.item.slice()
    };

    this.setState({
      list: this.state.list.concat(item),
      item: ""
    })
  };

  handleRemove = id => {
    this.setState({
      list: this.state.list.filter(c => c.id !== id)
    })
  };

  render() {
    return (
      <div className="App">

        <h2>Add Todo Item</h2>

        <div>
          <input
            className="inputItem"
            type="text"
            value={this.state.item}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <br />
          <button className="addButton" type="submit" onClick={this.handleSubmit}>
            Add
          </button>
        </div>

        <div>
          <h3>Lists</h3>
          <div>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <Todo {...item} removeTodo={this.handleRemove} />
                </li>
              )
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
