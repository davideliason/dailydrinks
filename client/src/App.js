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
        <h3>drinks</h3>
        <ul>
          {drinks.map( (drink) => 
              <li key={drink._id}> {drink.drink} : {drink.amount}</li>
            )}
        </ul>
        <button className="more" onClick={this.getDrinks}>Refresh</button>
      </div>
    );
  }
}

export default App;
