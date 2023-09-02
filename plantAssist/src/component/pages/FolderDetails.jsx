import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlantCard from "./PlantCard";
import "../styles/Plant.css";

function FolderDetails() {
  const [plants, setPlants] = useState([]);
  //get the folder id from URL params
  const { id } = useParams(); //returns an object of key/value pairs of the dynamic params

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
        
        //another fetch request to get the folder titles
        //Map over the folder tiles, display to user
        //User can click on a folder title, user can nav to /folder/<title>
        //On new page /folder/<title> fetch request to get all the plants by id

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
            // Pretty much always when you have a dynamic 
            //route like this you want to access the dynamic value 
            //in your custom component which is where the useParams hook comes in
            //https://blog.webdevsimplified.com/2022-07/react-router/
          ))}
          {/* add handleDelete */}
        </div>
      </div>
    </div>
  );
}

export default FolderDetails;
