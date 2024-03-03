import React from 'react'
import './Navbar.css'
import logo_light from '/Users/polo/navbar/src/assets/logo-black.png'
import logo_dark from '/Users/polo/navbar/src/assets/logo-white.png'
import search_icon_light from '/Users/polo/navbar/src/assets/search-w.png'
import search_icon_dark from '/Users/polo/navbar/src/assets/search-b.png'
import toggle_light from '/Users/polo/navbar/src/assets/night.png'
import toggle_dark from '/Users/polo/navbar/src/assets/day.png'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
    <div className='navbar'>
      <img src={theme == 'light' ? logo_light : logo_dark} alt=""  className='logo'/>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder='Search'/>
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
      </div>

      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light :toggle_dark} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Navbar
