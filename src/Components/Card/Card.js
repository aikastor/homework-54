import React from 'react';

const Card = props => {
  const suits = {
    'D': 'diams',
    'H': 'hearts',
    'C': 'clubs',
    'S': 'spades'
  };

  let className = `card-rank-${props.rank.toLowerCase()} ${suits[props.suit]}`;

  return (
    <div className="card rank-q diams">
      <span className='rank'>{props.rank}</span>
      <span className="suit">{props.suit}</span>
    </div>
  );
};

export default Card;