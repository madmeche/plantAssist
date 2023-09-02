import React from "react";
import { useState } from "react";
import "../styles/PlantCard.css";

function PlantCard(props) {
  const { plant } = props;
  const [saved, setSaved] = useState(false)

  const handleFavorite = () => {
    console.log(plant.id);
    const userId = sessionStorage.getItem("id");
    
    const data = {
      plantId: plant.id,
    };
    fetch(`http://localhost:8080/api/favorites/${userId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if(json.success){
          console.log("Response", json);
          setSaved(true)
        } else {
          console.error('Error', json.message)
        }
        });
      
  };

  // const deleteButton = authenticated && userHandle ===

  const handleAddFolder = () => {
    console.log(plant.id);
    const userId = sessionStorage.getItem("id");
    const data = {
      plantId: plant.id,
    };
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
    backgroundSize: "cover",
    justifyContent: "center",
    width: "50vh",
    height: "50vh"
  };

  return (
    <>
    <div className="body">
      <div style={styles}>
        <div className="name-desc">
        <div className="plant-name">
        <b>{plant.name}</b> 
        </div>
        <div className="plant-description">
        {plant.description}
        </div>
        </div> 
        {/* <div className="buttons"> */}
        <button className="card-button" onClick={handleFavorite}>{saved ? "✔️" : "💗"}
       
        </button>
        <button className="folder-button" onClick={handleAddFolder}>
          ➕
        </button>
      {/* </div> */}
    </div>
    </div>
    </>
  );
}
export default PlantCard;
