import React from 'react'

import './receive.css'

const ReceiveNews = () => {
  return (
    
    <div className='receive'>
      <div className='containerReceive'>
       <label className='label0' htmlFor="email" ><p className='label'>RECEBA AS PROMOÇÕES, NOVIDADES E DIAS PCDIGUIANOS.</p>
       <p className='label2'>Direatmente no seu Email</p></label>
      <input className='receiveInput' type="email" id="email" name="email" placeholder="Insira aqui o seu email "></input>

      </div>
    </div>
  )
}

export default ReceiveNews
