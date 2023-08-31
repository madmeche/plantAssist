import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { Login } from './pages/Login';
// import  Register  from './pages/Register';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 700) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        {/* <div id="sun-logo"> */}
      <img src='https://www.svgheart.com/wp-content/uploads/2023/03/sunflower_418-430-min.png' height='10px' />
      {/* </div> */}
        <div className='navbar-container'>
        {/* <img src='https://www.svgheart.com/wp-content/uploads/2023/03/sunflower_418-430-min.png' width='3px' height='5px' /> */}
          <div className='navbar-menu-container'>
          {/* <img src='https://www.svgheart.com/wp-content/uploads/2023/03/sunflower_418-430-min.png' /> */}
          <div className='navbar-menu-icon'>
          {/* <img src='https://www.svgheart.com/wp-content/uploads/2023/03/sunflower_418-430-min.png' /> */}
            {/* <img src='https://www.svgheart.com/wp-content/uploads/2023/03/sunflower_418-430-min.png' /> */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Foliage Finder
            {/* <i className='fa-brands fa-pagelines' /> */}
          </Link>
          </div>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/zone' className='nav-links' onClick={closeMobileMenu}>
                US Zones
              </Link>
            </li>
        
            <li className='nav-item'>
              <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/plants'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li className='nav-item'>
              
              <Link
              path='/login'
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/register'
                className='nav-links'
                onClick={closeMobileMenu}
                // element = {<SignUp />}
              >
                Sign Up
              </Link>
            </li>

          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>LOGIN</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;