import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      drinks : []
    }
  }

  componentDidMount(){
    this.getDrinks();
  }

  getDrinks = () => {
    fetch('/drinklog')
      .then(res => res.json())
      .then(drinks => this.setState({drinks: drinks}));
  }

  render() {
    const drinks = this.state.drinks;
    return (
      <div>
        {drinks.length}
      </div>
    );
  }
}

export default App;
