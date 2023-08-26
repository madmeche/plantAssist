import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';
import { Link } from 'react-router-dom';


function Favorites () {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    const userId = sessionStorage.getItems("id")
    fetch(`http://localhost:8000/api/users/${userId}`)
    .then((response) => response.json())
    .then((json) => {
      // console.log("response:", json),
      // setPlants(json.data[0].plantIds),
      const plantId = json.data[0].plantIds[0]
      fetch(`http://localhost:8080/api/plant/${plantId}`)
      .then((response) => response.json())
      .then((json) => {
        setPlants(json.data)
      })
    })
  })

 

  return (
    <>
   <h1>Favorites</h1>
   <div>
    {plants.map((plant) => (
      <PlantList key={plants.id} plant={plant} />
    ))}
   </div>
    </>
  );
}

export default Favorites;