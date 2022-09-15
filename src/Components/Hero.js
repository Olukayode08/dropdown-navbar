import React from 'react'
import phone from '../phone.svg'

const Hero = ({closeSubMenu}) => {
  return (
    <div className='hero' onMouseOver={closeSubMenu}>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>Payments infrastructure for the internet</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vel at cumque nesciunt nemo consectetur quisquam, minus quis inventore unde?</p>
          <button className='btn left'>Start now</button>
        </div>
        <div className='phone-image'>
          <img src={phone} alt="Phone" />
        </div>
      </div>
    </div>
  )
}

export default Hero