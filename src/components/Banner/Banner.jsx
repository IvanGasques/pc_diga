import React from 'react'
import setaEsq from '..//assets/banner/Vector 32.png'
import setaDir from '..//assets/banner/Vector 32 (1).png'

import './Banner.css'
const Banner = () => {
    return (

        <div className='StyledBanner' >
            <button className='setaEsq'><img src={setaEsq} alt='direita' /> </button>
            <button className='setaDir'><img src={setaDir} alt='esquerda' /> </button>
        </div>
    )
}

export default Banner
