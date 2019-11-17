import React, {Component} from 'react';

import './App.css';
import './cards/cards.css';
import Card from "./Components/Card/Card";
import CardDeck from "./CardDeck";

class App extends Component {

  state = {
    cards: []
  };

  constructor(props) {
    super(props);

    const deck = new CardDeck();

    this.state.cards = deck.getCards(5);
  }

  changeCards = () => {
    const deck = new CardDeck();

    const cards = deck.getCards(5);
    this.setState({cards});
  };
  render () {


    return(
      <div className='App'></div>
    )
  }
}


export default App;
