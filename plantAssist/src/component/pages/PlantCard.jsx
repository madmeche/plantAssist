import React from "react";
import '../styles/PlantCard.css'


function PlantCard(props) {
  const { plant } = props;

  const handleFavorite = () => {
    console.log(plant.id);
    const userId = sessionStorage.getItem("id");
    const data = {
        plantId: plant.id
    }
    fetch(`http://localhost:8080/api/favorites/${userId}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",      
          },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Response", json);
      });
  };

  const handleAddFolder = () => {
    console.log(plant.id);
    const userId = sessionStorage.getItem("id");
    const data = {
        plantId: plant.id
    }
    fetch(`http://localhost:8080/api/folders/${userId}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",      
          },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Response", json);
      });
  };

const styles = {
    backgroundImage: `url(${plant.image})`,
    justifyContent: "center",
    height: '60vh',
}

  return (
  <div className="body">
<div className="card-container">
    <div className="card">
    <div style={styles}>
      <div className="card-title">Name: {plant.name}</div>
      <div className="card-body-container">
        <div className="card-description">Description: {plant.description}</div>
       <div className="button-box"> 
      <button className="card-button"onClick={handleFavorite}>💚</button>
      <button className="folder-button"onClick={handleAddFolder}>➕</button>  </div>
      </div>
      {/* need an input to create folder names */}
   </div> 
   </div>
    </div>
    </div>
    
  );
}
export default PlantCard;
