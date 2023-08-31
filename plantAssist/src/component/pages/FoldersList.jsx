import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/Profile.css'
import FolderCard from "./FolderCard";


// // API/FOLDERS
// const data = [
//   {
//     folderIds: [1,2,5]
//   }
// ]
// // API/FOLDERS/LIST
// const folderData = [
//   {
//     id: 1,
//     title: "Folder 1",
//     plantIds: [2,3,4]
//   },
//   {
//     id: 2,
//     title: "Folder 2",
//     plantIds: [1,5,7]
//   }
// ]

function FoldersList() {
  const [folders, setFolders] = useState([]);



  useEffect(() => {
    const userId = sessionStorage.getItem("id");
    fetch(`http://localhost:8080/api/users/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("API/users:", json)
        // setPlants(json.data[0].plantIds)

        const folderIds = json.data[0].folderIds;

        fetch(`http://localhost:8080/api/folder/list`, {
          method: "POST",
          body: JSON.stringify(folderIds),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log("API/folder/list", json)
            setFolders(json.data);
          });
      });
  },[]);

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
