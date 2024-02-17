import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import ContactForm from '../ContactForm/ContactForm';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" }
    }
  }; 
  return (
    <div className="App">
      <section className="h-wraper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logoremove.png" alt="logo" width={100} />

          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}
          >
            <div className="flexCenter h-menu"
              style={getMenuStyles(menuOpened)}
            >
              <a href="">Companies</a>
              <a href="">Explore Events</a>
              <a href="">Contact Us</a>
              <a href="">Get Started</a>
              <button className='button' onClick={() => {
                navigate("/contact")
              }}>
                Contact Us
              </button>
            </div>
          </OutsideClickHandler>
          <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </div>
        </div>

      </section>
    </div>
  )
}

export default Header