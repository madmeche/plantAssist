import React from "react";
import { ReactDOM } from "react";

function PlantCard(props) {
    const {plant} = props;

    const handleFavorite = () => {
        console.log(plant.id)

        fetch("http://localhost:8080/api/plant/favorites")
        .then((response) => response.json())
        .then((json) => {
          console.log("Response", json.data);
          setData(json.data);
        });
   

    }

    

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