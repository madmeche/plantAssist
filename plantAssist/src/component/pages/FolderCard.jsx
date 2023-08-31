import React from "react";
import { Link } from "react-router-dom";
import "../styles/PlantCard.css";

function FolderCard(props) {
  const { folder } = props;

  const styles = {
    // backgroundImage: `url(${plant.image})`,
    backgroundSize: "cover",
    justifyContent: "center",
    width: "50vh",
    height: "50vh"
  };

  return (
    <>
    <div className="body">
      <div style={styles}>
        <div className="folder-name">
          <Link to={`/folders/${folder.id}`}>{folder.title}</Link> 
        </div>
        </div> 
        {/* <div className="buttons"> */}
        
        
      {/* </div> */}
    </div>
    </>
  );
}
export default FolderCard;
