import React from 'react'
import fb from '../img/fb.svg'
import gmail from '../img/gmail.svg'
import twitter from '../img/twitter.svg'

const Footer = () => {
  return (
    <dir className='footer'>
    <div className='container item' >
    
    <img src={fb} alt="" />
    <img src={gmail}  alt="" />
    
    <img src= {twitter} alt="" />
    <div className='pt-3'>©2020 PodPayment - 2020</div>
    </div>
    </dir>
  )
}

export default Footer