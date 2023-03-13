import React from 'react'
import apple from '../assets/news/Group 17558 (1).png'
import tv from '../assets/news/Group 17567.png'
import headset from '..//assets/news/Group 17568.png'

import './news.css'

const News = () => {
  return (
    <div className='news'>
     <div className='card1'><img src={apple} alt='Apple'/></div>
     <div className='card1'><img src={tv} alt='Apple'/></div>
     <div className='card1'><img src={headset} alt='Apple'/></div>
    </div>
  )
}

export default News
