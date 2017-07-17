import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Drink extends Component {
  render(){
    return(
        <div>
          <li key={this.props.key}> drink: <span className="drinkColor">{this.props.drink}</span> amount:{this.props.amount}</li>
        </div>
      );
  }
}

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
            <Drink key={drink._id} drink={drink.drink} amount={drink.amount} />
            )}
        </ul>
        <button className="more" onClick={this.getDrinks}>Refresh</button>
      </div>
    );
  }
}

export default App;
