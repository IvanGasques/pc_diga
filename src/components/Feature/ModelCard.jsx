import React from 'react';

function ModelCard (props) {
  return (
    <div className='card'>
      <div className='Featureimage'><img src={props.image} alt='' /></div>
      <div className='Featurename'>{props.name}</div>
      <div className='Featuredescription'>{props.description}</div>
      <div className='minidescription'>{props.miniDescription}</div>
      <div className='stock' >{props.stock?<> <img src={props.stock} alt='icons' /> <span className='textstock'>Em Stock</span></> : null }</div>
      <div className='delivery' >{props.delivery}</div>
      <div className='price' >{props.price}</div>
      <div className='whishlistCompare'>
        <><img src={props.wish} alt='wish' /> <span className='textwish'>Wishlist</span></>
        <><img src={props.compare} alt='compare' /><span className='textCompare'>Comparar</span></>
      </div>
    </div>
  );
}
export default ModelCard;