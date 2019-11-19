import React from 'react';

const Card = props => {
  const suits = {
    'D': ['diams','\u2666'],
    'H': ['hearts', '\u2665'],
    'C': ['clubs', '\u2663'],
    'S': ['spades', '\u2660']
  };

  let className = `card rank-${props.rank.toLowerCase()} ${suits[props.suit][0]}`;
  return (
    <li>
      <div className={className}>
        <span className='rank'>{props.rank}</span>
        <span className='suit'>{suits[props.suit][1]}</span>
      </div>
    </li>

  );
};

export default Card;