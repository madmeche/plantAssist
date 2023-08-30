import React from "react";
import "../styles/PlantCard.css";

function PlantCard(props) {
  const { plant } = props;

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
        console.log("Response", json);
      });
  };

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
    <div className="body">
      <div style={styles}>
        Name: {plant.name}
        Description: {plant.description}
        <button className="card-button" onClick={handleFavorite}>
          💚
        </button>
        <button className="folder-button" onClick={handleAddFolder}>
          ➕
        </button>
      </div>
    </div>
  );
}
export default PlantCard;
