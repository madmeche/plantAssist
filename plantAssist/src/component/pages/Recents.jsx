import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import "../styles/PlantCard.css";

function Recents() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("id"); //tried adding JSON.stringify
    fetch(`http://localhost:8080/api/recents/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("response:", json);
        // setPlants(json.data[0].plantIds),

        const data = { plantIds: json.data[0].plantIds };

        fetch(`http://localhost:8080/api/plant/list`, {
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
    <div className="body-profile">
      <div className="header">Recents</div>
      <div className="list-list">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>

      {/* add handleDelete */}
    </div>
  );
}

export default Recents;
