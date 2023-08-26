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

  return (
    <>
      <h1>Plant Cards Here</h1>
      <div>Name: {plant.name}</div>
      <div>Description: {plant.description}</div>
      <div>Image: {plant.image}</div>
      <button onClick={handleFavorite}>Add to Favorties</button>
    </>
  );
}
export default PlantCard;
