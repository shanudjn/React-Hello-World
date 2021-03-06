import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      items : [],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e){
    this.setState({
     currentItem:{
       text : e.target.value,
       key : Date.now()
     }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.currentItem;
    console.log(newItem);
  }
  render() {
    return (
      <div className="form">
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;
