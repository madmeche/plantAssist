import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlantCard from "./PlantCard";
import "../styles/Plant.css";

function FolderDetails() {
  const [plants, setPlants] = useState([]);
  //get the folder id from URL params
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/folder/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("response:", json);
        // setPlants(json.data[0].plantIds),

        const data = { plantIds: json.data[0].plantIds };

        fetch(`http://localhost:8080/api/folder/list`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log("API/plant/list:", json);
            setPlants(json.data);
          });
      });
  }, []);

  return (
    <div className="card-list-container">
      <div className="list-title">Favorites</div>
      <div className="list-body">
        <div className="list-list">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
          {/* add handleDelete */}
        </div>
      </div>
    </div>
  );
}

export default FolderDetails;
