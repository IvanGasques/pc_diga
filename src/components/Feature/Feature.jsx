import React,{useRef} from 'react'
import arrow from '../assets/feature/arrowcoolicon.png'
import ModelCard from './ModelCard'
import { Link } from 'react-router-dom'
import count from '../assets/feature/Ativo 3 (2) 2.png'
import './feature.css'

const Feature = (props) => {
  
  return (
    <div>
      <div className='title'>Em destaque<div className='see'>Ver Mais<img src={arrow} alt='arrow' /></div></div>
      <Link to="/campanhas" id='link'>
      
       <div className='cardsFeature' ><div className='card' id='carde'><img src={count} width='105%' alt='count'></img></div>
        {props.features.map((feature, idx) => (
        <ModelCard 
          key={idx}
          image={feature.image}
          name={feature.name}
          description={feature.description}
          miniDescription={feature.miniDescription}
          stock={feature.stock}
          delivery={feature.delivery}
          price={feature.price}
          wish={feature.wish}
          compare={feature.compare}
        />
      ))}
      </div></Link>
    </div>
  )
}
export default Feature;