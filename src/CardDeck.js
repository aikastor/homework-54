const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'K', 'Q', 'J'];
const suits = ['D', 'S', 'C', 'H'];

class CardDeck {
  cards = [];
  constructor() {
    let deck = [];
    for (let s in suits) {
      for(let r in ranks) {
        const card = {rank: ranks[r], suit: suits[s]};
        deck.push(card);
      }
    }
    //Randomizing cards to give less chances to actually win
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    this.cards = deck;
  }

  getCard() {
    const deck = this.cards;
    return deck[Math.floor(Math.random() * deck.length)];
  }

  getCards(howMany) {
    const cardsArray =[];

    for(let i = 0; i < howMany; i++) {
      cardsArray.push(this.getCard());
    }
    return cardsArray;
  }
}

export default CardDeck;

