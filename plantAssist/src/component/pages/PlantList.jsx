import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [data, setData] = useState([]);

  const handleFavorite = () => {};

  useEffect(() => {
    fetch("http://localhost:8080/api/plant")
      .then((response) => response.json())
      .then((json) => {
        console.log("Response", json.data);
        setData(json.data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Plant List</h1>
      <div className="table table-striped text-center mt-5">
        <div>
          {data.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlantList;
