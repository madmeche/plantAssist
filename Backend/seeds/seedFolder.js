const Models = require("../models");

const data = [
    {
      title: "Front Porch",
      plantIds: [1,9]
    },
    {
      title: "Lansdscape",
      plantIds: [6,2,4]
    },
    {
        title: "Back Patio",
        plantIds: [7,9]
      }
  ]
  

  const seedFolder = async () => {
    // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
    for await (const element of data) {
      // Check if the user exists in the DB already
      const folder = await Models.Folder.findAll({
        where: {
          title: element.title
        },
        raw: true,
      })
        .then((data) => {
          // If a user is found the length will be > 1, else 0
          return data;
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
  
      // Check if the data returned has a folder or not
      if (folder.length === 0) {
        
        // If no user, add one
        Models.Folder.create(element)
          .then((data) => {
            console.log("Added", element);
          })
          .catch((err) => {
            console.log("Error:", err);
            throw err;
          });
      } else {
        console.log("Folder exists", folder[0].title);
      }
    }
  };
  
  module.exports = {
    seedFolder,
  };