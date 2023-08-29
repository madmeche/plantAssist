import { useState, useEffect } from "react"

function Folders () {

    const [plants, setPlants] = useState([])
  
    useEffect(() => {
      const userId = sessionStorage.getItem("id")
      fetch(`http://localhost:8080/api/users/${userId}`)
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
     <h1>Folders</h1>
     <div>
      {plants.map((plant) => (
        <PlantList key={plants.id} plant={plant} />
      ))}
     </div>
      </>
    );
  }
  
  export default Folders;