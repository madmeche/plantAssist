import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Folder from './Folder'
import '../styles/Profile.css'
import FolderCard from "./FolderCard";

function FoldersList() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("id");
    fetch(`http://localhost:8080/api/folders/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("response:", json),
        // setPlants(json.data[0].plantIds),
        const plantId = json.data[0].plantIds[0];
        fetch(`http://localhost:8080/api/folders/list`)
          .then((response) => response.json())
          .then((json) => {
            setFolders(json.data);
          });
      });
  });

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

export default FoldersList;
