import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import FoldersList from "./FoldersList";
import "../styles/Plant.css";

function FolderDetails() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("id");
    fetch(`http://localhost:8080/api/favorites/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("response:", json);
        // setPlants(json.data[0].plantIds),

        const folderIds = json.data[0].folderIds;

        fetch(`http://localhost:8080/api/folders/list`, {
          method: "POST",
          body: JSON.stringify(folderIds),
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
    <>
    <div className='body-profile'>
      <div className="header">Folders</div>
      <div className="ffr-body">
        {folders.map((folder) => (
          <FolderCard key={folder.id} folder={folder} />
        ))}
        <div className="folders">
          <Link to='/folders/folder'>**Name of Folder**</Link>

        </div>
      </div>
      </div>

      {/* add handleDelete */}
    </> 
  );
}

export default FolderDetails;
