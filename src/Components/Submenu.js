import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const Submenu = ({subMenu, location, page:{page, links}}) => {
  const refContainer = useRef(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(()=>{
    setColumns('col-2');
    const submenu = refContainer.current
    const {center, buttom} = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${buttom}px`;
    if (links.lenght === 3) {
      setColumns('col-3')
    }else if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location, links])

  return (
    <>
      <div className={subMenu ? 'submenu show': 'submenu'} ref={refContainer}>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index)=>{
            const {label, icon, url} = link
            return (
              <div key={index}>
                <a href={url}>{icon} {label}</a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Submenu