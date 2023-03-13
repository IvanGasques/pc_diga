import React from 'react'
import arrow from '../assets/feature/arrowcoolicon.png'
import ModelCard from '../Feature/ModelCard'

import '../Feature/feature.css'



import './promocoes.css'

const Promoçoes = (props) => {
  return (
    <div className='promocaoCard'>
      <div className='textPromo'>Promoções<div className='see'>Ver Mais<img src={arrow} alt='arrow' /></div></div>
      <div className='cardsFeature'>
        {props.features.map((promocoes, idx) => (
        <ModelCard 
          key={idx}
          image={promocoes.image}
          name={promocoes.name}
          description={promocoes.description}
          miniDescription={promocoes.miniDescription}
          stock={promocoes.stock}
          delivery={promocoes.delivery}
          price={promocoes.price}
          wish={promocoes.wish}
          compare={promocoes.compare}
        />
      ))}
      </div>
    </div>
  )
}

export default Promoçoes
