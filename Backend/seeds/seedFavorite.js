const Models = require("../models");

const data = [
    {
      plantIds: "2",
     
    },
]
    const seedFavorite = async () => {
        // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
        for await (const element of data) {
          // Check if the user exists in the DB already
          const favorites = await Models.Favorite.findAll({
            where: {
                plantIds: element.plantIds,
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
      
          // Check if the data returned has a user or not
          if (favorites.length === 0) {
            // If no user, add one
            Models.Favorite.create(element)
              .then((data) => {
                console.log("Added", element);
              })
              .catch((err) => {
                console.log("Error:", err);
                throw err;
              });
          } else {
            console.log("Favorite exists", favorites[0].plantIds);
          }
        }
      };
      
      module.exports = {
        seedFavorite,
      };