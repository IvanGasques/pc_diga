import React from 'react'
import todos from '../assets/banner/1046a737566c6b5d5d354a6abfc6f6d4 1.png'
import mac from '../assets/banner/store-card-13-mac-nav-202203.png'
import ipad from '../assets/banner/store-card-13-ipad-nav-202210.png'
import iphone from '../assets/banner/store-card-13-iphone-nav-202209_GEO_US.png'
import appleWatch from '../assets/banner/store-card-13-watch-nav-202209.png'
import airPods from '../assets/banner/store-card-13-airpods-nav-202209.png'
import appleTV from '../assets/banner/store-card-13-appletv-nav-202210.png'
import acessories from '../assets/banner/store-card-13-accessories-nav-202209.png'

import './categorias.css'
const Categorias = () => {
  return (
    <div className='categorias'>
     <div > <img className='teste' src={todos} alt='todas categorias'></img><div className='nome'>Todos</div></div>
     <div ><img  className='teste'src={mac} alt='Mac'></img><div className='nome'>Mac</div></div>
     <div > <img className='teste' src={ipad} alt='Ipad'></img><div className='nome'>Ipad</div></div>
     <div > <img className='teste' src={iphone} alt='Iphone'></img><div className='nome'>Iphone</div></div>
     <div ><img  className='teste'src={appleWatch} alt='AppleWatch'></img><div className='nome'>Apple Watch</div></div>
     <div ><img  className='teste'src={airPods} alt='AirPods'></img><div className='nome'>AirPod</div></div>
     <div ><img  className='teste'src={appleTV} alt='AppleTV'></img><div className='nome'>Apple TV 4k</div></div>
     <div > <img className='teste' src={acessories} alt='Acessories'></img><div className='nome'>Acessorios</div></div>
    </div>
  )
}

export default Categorias
