import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items.js';
import DeleteLastItem from './DeleteLastItem.js';
import CreateItem from './CreateItem.js';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        
    	<CreateItem value={this.state.value} handleChange={this.handleChange} inputIsEmpty={this.inputIsEmpty} addItem={this.addItem}/>
        <DeleteLastItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound} />
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
