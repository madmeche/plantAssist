import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import '../styles/Plant.css'

function PlantList() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8080/api/plant")
      .then((response) => response.json())
      .then((json) => {
        console.log("Response", json.data);
        setData(json.data);
      });
  }, []);

  return (
    <div className="card-list-container">
      <h1 className="list-body">Plant List</h1>
      <div>
        <div className="list-list">
          {data.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlantList;
