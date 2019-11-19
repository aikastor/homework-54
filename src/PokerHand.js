class PokerHand {
  cards = [];
  constructor(cards) {
    this.cards = cards
  }

  getOutcome () {
    let hand = this.cards;
    let valsArray = [];
    let suitsArray = [];
    let result = '';
    const resObj = {};
    const suitsObj = {};
    let pairsNum = 0;
    let flash = false;
    console.log(hand);

    for(let card of hand) {
      valsArray.push(card.rank);
      suitsArray.push(card.suit);
    }

    for (let i = 0; i < valsArray.length; i++) {
      resObj[valsArray[i]] = (resObj[valsArray[i]] || 0) + 1;
    }
    for (let i = 0; i < suitsArray.length; i++) {
      suitsObj[suitsArray[i]] = (suitsObj[suitsArray[i]] || 0) + 1;
    }

    Object.keys(resObj).map(key => ({ [key]: resObj[key] }));
    Object.keys(suitsObj).map(key => ({ [key]: suitsObj[key] }));

    let nums = Object.values(resObj);
    let suits = Object.values(suitsObj);
    console.log(nums);

    for(let i of nums) {
      if(i === 2) {
        pairsNum++;
      } else if(i === 3) {
        pairsNum = 3;
      }
    }

    for(let i of suits) {
      flash = i === 5;
    }
    if(flash) {
      result += 'Flush!';
    }
    switch (pairsNum) {
      case 1:
        result+= 'One pair!';
        break;
      case 2:
        result+= 'Two pairs!';
        break;
      case 3:
        result+= 'Three pairs!';
        break;
      default:
        result+= 'No pairs!'
    }
    return result;
  }

}
export default PokerHand;