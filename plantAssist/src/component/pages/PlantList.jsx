import React, { useEffect, useState } from "react";

function PlantFavorites() {

const [data, setData] = useState([]);
// const {plant} = props // doesn't like props.
// const [saved, setSaved] = useState(false)

// const handleFavorite = (e) => {
//   e.preventDefault();

//   console.log(plant.id); // cannot read properties 'id' have tried, data, key, [] [0], [data]...

  // const data = {
  //   plantIds: [plant.id]
  // }

//   const userId= sessionStorage.getItem("id")

//   useEffect(() => {
//   fetch(`http://localhost:8080/api/users/${userId}`, {
//     method: "PUT",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",      
//     },
//   })
//   .then((response) => response.json())
//   .then((json) => {
//     // console.log(json);
//     if(json.success){
//       //if response success = true
//       console.log("To do...")
//       setSaved(true)
//     }else{
//       console.log("error", json.message)
//     }
//   }) 
//   });
// };

  useEffect(() => {
    fetch("http://localhost:8080/api/plant")
      .then((response) => response.json())
      .then((json) => {
        console.log("Response", json.data)
        setData(json.data);
      });
  }, []);


  return (
    <div>
      <h1 className="text-center">Plant List</h1>
      <div className="table table-striped text-center mt-5">
    
            <div>

              {data.map((row) => (

                <div key={row.id}>
                  <div>Name: {row.name}</div>
                  <div>Description: {row.description}</div>
                  <div>Image: {row.image}</div>
                  <button>Add to Favorties</button>

                  {/* <button onClick={handleFavorite}>{saved ? "Saved" : "Add to Favorites"}</button> */}
                </div>
              ))}
            </div>
      </div>
    </div>
  );
};

export default PlantFavorites;