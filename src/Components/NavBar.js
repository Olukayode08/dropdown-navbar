import React, {useState} from 'react'
import {Squash as Hamburger} from 'hamburger-react'
import logo from '../stripe.svg'
import sublinks from '../data'

const NavBar = ({displaySubMenu, closeSubMenu}) => {

    const [open, setOpen] = useState(false);
    const removeSubMenu = (e) =>{
      if(!e.target.classList.contains('link-btn')){
          closeSubMenu()
      }
    }
  return (
    <>
      <div onMouseOver={removeSubMenu}>
        <div>
          <div className='bigscreen-container'>
            <img src={logo} alt='Stripes' />
            <ul className='links nolink'>
              <li>
                <button className='link-btn' onMouseOver={displaySubMenu}>
                  Products
                </button>
              </li>
              <li>
                <button className='link-btn' onMouseOver={displaySubMenu}>
                  Developers
                </button>
              </li>
              <li>
                <button className='link-btn' onMouseOver={displaySubMenu}>
                  Company
                </button>
              </li>
            </ul>
            <button className='btn nolink'>Sign-in</button>
          </div>
          <div className={open ? 'mobile-screen' : 'close-nav'}>
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={20}
              easing='ease-in'
              direction='left'
            />
          </div>
          <div className={open ? 'mobile-links' : 'close-mobile'}>
            <div className='sidebar'>
              {sublinks.map((sublink, index) => {
                const { page, links } = sublink;
                return (
                  <div key={index}>
                    <h2 className='sidebar-heading'>{page}</h2>
                    <div className='sidebar-links'>
                      {links.map((link, index) => {
                        const { icon, url, label } = link;
                        return (
                          <div key={index}>
                            <a className='links' href={url}>
                              {icon}
                              {label}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar