import React, { Component, Fragment } from 'react';
import './App.scss';
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
      <Fragment>
        <h2 className="App">Add Todo Item</h2>
        <div className="App">
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="App">
          <button type="submit" onClick={this.handleSubmit}>
            Add
          </button>
        </div>
        <div className="App">
          <h3 className="App">Lists</h3>
          <ul className="App">
            {this.state.list.map(item => {
              return (
                <li key={item.id} className="App">
                  <Todo {...item} removeTodo={this.handleRemove} />
                </li>
              )
            })}
          </ul>
        </div>
      </Fragment >
    );
  }
}

export default App;
