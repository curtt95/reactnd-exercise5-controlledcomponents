import React, { Component } from 'react';

class CreateItem extends Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  handleAddItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.value);
    this.setState((currState) => ({
     	value: '' 
    }));
  };
  
 	render() {
     	return (
         	<form onSubmit={this.handleAddItem}>
              <input
                type="text"
                placeholder="Enter New Item"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button disabled={this.inputIsEmpty()}>Add</button>
            </form> 
         ); 
    }
}

export default CreateItem