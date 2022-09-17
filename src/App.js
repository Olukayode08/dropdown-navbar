import React, {useState} from 'react'
import NavBar from "./Components/NavBar";
import Submenu from "./Components/Submenu";
import NavBarTwo from './Components/NavBarTwo'
import sublinks from './data';


function App() {
    const [subMenu, setSubMenu] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page: '', links: []});

    const closeSubMenu =()=>{
      setSubMenu(false)
    }
    const openSubMenu = (text, coordinates)=>{
      const page = sublinks.find((link)=> link.page === text)
      setPage(page)
      setLocation(coordinates)
      setSubMenu(true);
    }
    const displaySubMenu = (e)=>{
      const page = e.target.textContent;
      const tempBtn = e.target.getBoundingClientRect();
      const center = (tempBtn.left + tempBtn.right) / 2;
      const buttom = tempBtn.bottom - 3
      openSubMenu(page,{center, buttom})
    }
    
  return (
    <>
      <NavBar displaySubMenu={displaySubMenu} closeSubMenu={closeSubMenu} />
      {/* <Hero closeSubMenu={closeSubMenu} /> */}
      <NavBarTwo closeSubMenu={closeSubMenu} />
      <Submenu page={page} location={location} subMenu={subMenu} />
    </>
  );
}

export default App;
