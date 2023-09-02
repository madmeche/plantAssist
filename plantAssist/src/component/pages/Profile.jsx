import React, { useState } from "react";
import "../styles/Profile.css";
import "./Favorites";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";

function Profile(props) {
  // // const pages = [favorites, logout]

  const { user } = props;
  // const [account, setAccount] = useState("");

  const userId = sessionStorage.getItem("id");

  fetch(`http://localhost:8080/api/users/${userId}`)
    .then((response) => response.json())
    .then((json) => {
      console.log("response:", json);
    });
  

  // const deleteProfile = async (userId) => {
  //   const profile = account.find((user) => user.userId === userId);
  //   const userConfirmed = window.confirm(
  //     `Are you sure you want to lose all your saved data?`
  //   );

  //   if (!userConfirmed) {
  //     return; 
  //   }
    

  //   try {
  //     const response = await fetch(
  //       `http://localhost:8000/api/users/${userId}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );

  //     if (response.status !== 200) {
  //       const error = await response.json();
  //       console.error("Error: ", error.message);
  //       return;
  //     }
  //   } catch (error) {
  //     console.log("Error deleting profile: ", error);

  //     setAccount(account);
  //     alert(`${profile} has been deleted!`);


  return (
    <div className="body-profile">
      <div className="header">Welcome to your Profile</div>
      <div className="ffr-body">
        <div className="folders-favorites-recents">
          <div className="folders">
            <Link to="/folders">Folders</Link>
          </div>
          <div className="favorites">
            <Link to="/favorites">Favorites</Link>
          </div>
          <div className="recents">
            <Link to="/recents">Recents</Link>
          </div>
        </div>
        {/* <button
          className="delete-button"
          onClick={(e) => {
            deleteProfile(profile.userId);
          }}
        >
          Delete
        </button> */}
      </div>
    </div>
  );
}
export default Profile;
