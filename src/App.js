import React, {Component} from 'react';

import './App.css';
import './cards/cards.css';
import Card from "./Components/Card/Card";
import CardDeck from "./CardDeck";
import PokerHand from "./PokerHand";

class App extends Component {

  state = {
    cards: [],
    result: '',
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

  getResult = ()=> {
    let cards = this.state.cards;
    let hand = new PokerHand(cards);
    let result = hand.getOutcome();
    this.setState({result: result});
  };
  render () {
    let i = 0;
    const cards = this.state.cards.map((card) => {
      i++;
      return (<Card rank={card.rank}
                    suit={card.suit}
                    key={i}/>);
    });

    return(
      <div className='App'>
        <div className='playingCards faceImages'>
          <ul className="table">
            {cards}
          </ul>
        </div>
        <div>{this.state.result}</div>
        <button onClick={this.changeCards}>New Hand!</button>
        <button onClick={this.getResult}>result!</button>
      </div>
    )
  }
}


export default App;
