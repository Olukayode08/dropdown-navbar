import React, {useState} from 'react'
import {Twirl as Hamburger} from 'hamburger-react'
import logo from '../cardonic.svg'

const NavBarTwo = () => {
    const [active, setActive] = useState(false)
  return (
    <>
      <div className='cardonic-container'>
        <div className='bigscreen-cardonic'>
          <img src={logo} alt='' />
          <ul className='links'>
            <li>
              <a href='#' className='nav'>
                Upskill
              </a>
            </li>
            <li>
              <a href='#' className='nav'>
                Customer
              </a>
            </li>
            <li>
              <a href='#' className='nav'>
                Business
              </a>
            </li>
            <li>
              <a href='#' className='nav started'>
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div className={active ? 'mobile-cardonic' : 'close-cardonic'}>
          <Hamburger
            toggled={active}
            toggle={setActive}
            easing='ease-in'
            size={20}
            direction='left'
          />
        </div>
        <div className={active ? 'cardonic-nav' : 'close-mobile-cardonic'}>
          <ul className='cardonic-links'>
            <li>
              <a className='cardonic-link' href='#'>
                Upskill
              </a>
            </li>
            <li>
              <a className='cardonic-link' href='#'>
                Customer
              </a>
            </li>
            <li>
              <a className='cardonic-link' href='#'>
                Business
              </a>
            </li>
            <li>
              <a className='cardonic-link' href='#'>
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBarTwo