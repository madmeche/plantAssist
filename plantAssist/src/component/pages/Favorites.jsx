import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';
import { Link } from 'react-router-dom';


function Favorites () {

  const [plants, setPlants] = useState([])

 

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