import React from 'react'
import { FeatureList } from './featureList'
import arrow from '../assets/feature/arrowcoolicon.png'

import './feature.css'

const Feature = () => {
  return (
    <div>
      <div className='title'>Em destaque<div className='see'>Ver Mais<img src={arrow} alt='arrow' /></div></div>
      <div className='cardsFeature'>
        {FeatureList.map((feature, idx) => (
          <div className='card' key={idx}>
            <div className='Featureimage'><img src={feature.image} alt='' /></div>
            <div className='Featurename'>{feature.name}</div>
            <div className='Featuredescription'>{feature.description}</div>
            <div className='minidescription'>{feature.miniDescription}</div>
            <div className='stock' >{feature.stock?<> <img src={feature.stock} alt='icons' /> <span className='textstock'>Em Stock</span></> : null }</div>
            <div className='delivery' >{feature.delivery}</div>
            <div className='price' >{feature.price}</div>
            <div className='whishlistCompare'>
              <><img src={feature.wish} alt='wish' /> <span className='textwish'>Wishlist</span></>
              <><img src={feature.compare} alt='compare' /><span className='textCompare'>Comparar</span></>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feature;