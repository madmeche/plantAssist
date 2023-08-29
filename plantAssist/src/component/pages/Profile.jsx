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
        <>
        <h1>Welcome to your Profile</h1>
        <div className='header'>
       <Link to='/folders'>Folders</Link>
        <Link to='/favorites'>Favorites</Link>
        {/* <Link to='/recents'>Recents</Link> */}
        </div>
        </>
    )
}
export default Profile;