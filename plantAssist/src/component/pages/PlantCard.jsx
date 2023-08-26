import React from "react";
import { ReactDOM } from "react";
import { json } from "react-router-dom";

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
const styles = {
    backgroundImage: `url(${plant.image})`, 
    width:'300px', 
    height:'400px', 
    margin: '10px'
}

  return (
  
<div className="body">
    <div style={styles}>
      <div className="card-title">Name: {plant.name}</div>
      <div className="card-description">Description: {plant.description}</div>
      <div>Image: {plant.image}</div>
      <button className="card-button"onClick={handleFavorite}>Add to Favorties</button>
    </div>
    </div>
    
  );
}
export default PlantCard;
