import React from 'react'
import { CardList } from './cardList'

import './card.css'

const getCardColorImages = (card) => {
  const colorImages = [];

  if (card.colors) {
    Object.keys(card.colors).forEach((key) => {
      const color = card.colors[key];
      colorImages.push(
        <div key={key} className='color'>
          <img src={color} alt={key} />
        </div>
      );
    });
  }

  return colorImages;
};

const Cards = () => {
  return (
    <div className='container'>
      {CardList.map((card, idx) => {
        const colorImages = getCardColorImages(card);

        return (
          <section className='cards' key={idx}>
            {card.logo ? (
              <div className='logo'>
                <img src={card.logo} alt='logo' />
              </div>
            ) : null}
            <div className='name'>{card.name} {colorImages.length > 0 ? (
              <div className='colors'>{colorImages}</div>
            ) : <div className='name1'></div>}</div>
           
            <div className='image'>
              <img src={card.image} alt={card.name} />
            </div>
          </section>
        );
      })}
    </div>
  );
};



export default Cards
