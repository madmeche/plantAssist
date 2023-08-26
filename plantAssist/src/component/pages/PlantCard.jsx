import React from "react";
import { ReactDOM } from "react";

function PlantCard(props) {
    const {plant} = props;
  return (
    <>
     
      <h1>Plant Cards Here</h1>
      <div>Name: {plant.name}</div>
      <div>Description: {plant.description}</div>
      <div>Image: {plant.image}</div>
      <button>Add to Favorties</button>
    </>
  );
}
export default PlantCard;