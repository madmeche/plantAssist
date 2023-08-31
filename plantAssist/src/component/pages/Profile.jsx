import React from 'react'
import '../styles/Profile.css'
import './Favorites'
import { Link } from 'react-router-dom'
import Favorites from './Favorites'



function Profile(props) {
// // const pages = [favorites, logout]

    const { user } = props;
    
    const userId = sessionStorage.getItem("id");
    
    
    fetch(`http://localhost:8080/api/users/${userId}`)
    .then((response) => response.json())
    .then((json) => {
      console.log("response:", json);
    });

    return(
        <div className='body-profile'>

        <div className='header'>Welcome to your Profile</div>
        <div className='ffr-body'>
        <div className='folders-favorites-recents'>
        <div className='folders'>
       <Link to='/folders'>Folders</Link>
       </div>
       <div className='favorites'>
        <Link to='/favorites'>Favorites</Link>
        </div>
        <div className='recents'>
        <Link to='/recents'>Recents</Link>
        </div>
        </div>
        </div>
        
        </div>
        
    )
}
export default Profile;