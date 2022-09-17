import React, {useState} from 'react'
import {Twirl as Hamburger} from 'hamburger-react'
import logo from '../cardonic.svg'
import { RiArrowDownSLine } from 'react-icons/ri';
import { sublinkone, sublinktwo, sublinkthree } from './datatwo';

const NavBarTwo = ({closeSubMenu}) => {
    const [active, setActive] = useState(false)

    const [subLinkOne, setSubLinkOne] = useState(false);
    const [subLinkTwo, setSubLinkTwo] = useState(false);
    const [subLinkThree, setSubLinkThree] = useState(false);


    const toggleLinkOne = ()=>{
      setSubLinkOne(!subLinkOne)
      setSubLinkThree(false)
      setSubLinkTwo(false) 
    }
        const toggleLinkTwo = () => {
          setSubLinkTwo(!subLinkTwo);
          setSubLinkThree(false);
          setSubLinkOne(false);
      }  

        const toggleLinkThree = () => {
          setSubLinkThree(!subLinkThree);
          setSubLinkOne(false) 
          setSubLinkTwo(false)
      };
      
  return (
    <>
      <div onMouseOver={closeSubMenu} className='cardonic-container'>
        <div className='bigscreen-cardonic'>
          <img src={logo} alt='' />
          <ul className='links'>
            <li>
              <a href='#' className='nav'>
                Upskill
              </a>
            </li>
            <li
              onMouseLeave={() => setSubLinkOne(false)}
              className='sublink-container'
            >
              <a onClick={toggleLinkOne} href='#' className='nav'>
                Customer <RiArrowDownSLine className='icon' />
              </a>
              <div className={subLinkOne ? 'sublink' : 'no-sublink'}>
                {sublinkone.map((linkone) => {
                  const { id, one, two, three, imgone, imgtwo, imgthree } =
                    linkone;
                  return (
                    <div className='dropdown-container' key={id}>
                      <div className='dropdown'>
                        <img className='drop-img' src={imgone} alt='Cardonic' />
                        <p className='drop-text'>{one}</p>
                      </div>
                      <div className='dropdown'>
                        <img className='drop-img' src={imgtwo} alt='Cardonic' />
                        <p className='drop-text'>{two}</p>
                      </div>
                      <div className='dropdown'>
                        <img
                          className='drop-img'
                          src={imgthree}
                          alt='Cardonic'
                        />
                        <p className='drop-text'>{three}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
            <li
              onMouseLeave={() => setSubLinkTwo(false)}
              className='sublink-container'
            >
              <a onClick={toggleLinkTwo} href='#' className='nav'>
                Business <RiArrowDownSLine className='icon' />
              </a>
              <div className={subLinkTwo ? 'sublink' : 'no-sublink'}>
                {sublinktwo.map((linktwo) => {
                  const { id, one, two, three, imgone, imgtwo, imgthree } =
                    linktwo;
                  return (
                    <div className='dropdown-container' key={id}>
                      <div className='dropdown'>
                        <img className='drop-img' src={imgone} alt='Cardonic' />
                        <p className='drop-text'>{one}</p>
                      </div>
                      <div className='dropdown'>
                        <img className='drop-img' src={imgtwo} alt='Cardonic' />
                        <p className='drop-text'>{two}</p>
                      </div>
                      <div className='dropdown'>
                        <img
                          className='drop-img'
                          src={imgthree}
                          alt='Cardonic'
                        />
                        <p className='drop-text'>{three}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
            <li
              onMouseLeave={() => setSubLinkThree(false)}
              className='sublink-container'
            >
              <a onClick={toggleLinkThree} href='#' className='nav started'>
                Get Started <RiArrowDownSLine className='icon' />
              </a>
              <div className={subLinkThree ? 'sublink' : 'no-sublink'}>
                {sublinkthree.map((linkthree) => {
                  const { id, one, two, three, imgone, imgtwo, imgthree } =
                    linkthree;
                  return (
                    <div className='dropdown-container' key={id}>
                      <div className='dropdown'>
                        <img className='drop-img' src={imgone} alt='Cardonic' />
                        <p className='drop-text'>{one}</p>
                      </div>
                      <div className='dropdown'>
                        <img className='drop-img' src={imgtwo} alt='Cardonic' />
                        <p className='drop-text'>{two}</p>
                      </div>
                      <div className='dropdown'>
                        <img
                          className='drop-img'
                          src={imgthree}
                          alt='Cardonic'
                        />
                        <p className='drop-text'>{three}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
            <li className='position'>
              <a href='#' className='cardonic-link'>
                Upskill
              </a>
            </li>
            <li className='position sublink-container'>
              <a onClick={toggleLinkOne} href='#' className='cardonic-link'>
                Customer <RiArrowDownSLine className='color' />
              </a>
              <div className={subLinkOne ? 'sublinks' : 'no-sublink'}>
                {sublinkone.map((linkone) => {
                  const { id, one, two, three } = linkone;
                  return (
                    <div key={id}>
                      <div>
                        <p>{one}</p>
                      </div>
                      <div>
                        <p>{two}</p>
                      </div>
                      <div>
                        <p>{three}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
            <li className='position sublink-container'>
              <a onClick={toggleLinkTwo} href='#' className='cardonic-link'>
                Business <RiArrowDownSLine className='color' />
              </a>
              <div className={subLinkTwo ? 'sublinks' : 'no-sublink'}>
                {sublinktwo.map((linktwo) => {
                  const { id, one, two, three } = linktwo;
                  return (
                    <div key={id}>
                      <div>
                        <p>{one}</p>
                      </div>
                      <div>
                        <p>{two}</p>
                      </div>
                      <div>
                        <p>{three}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
            <li className='position sublink-container'>
              <a onClick={toggleLinkThree} href='#' className='cardonic-link'>
                Get Started <RiArrowDownSLine className='color' />
              </a>
              <div className={subLinkThree ? 'sublinks' : 'no-sublink'}>
                {sublinkthree.map((linkthree) => {
                  const { id, one, two, three } = linkthree;
                  return (
                    <div key={id}>
                      <div>
                        <p>{one}</p>
                      </div>
                      <div>
                        <p>{two}</p>
                      </div>
                      <div>
                        <p>{three}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBarTwo