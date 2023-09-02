const Models = require("../models");

const data = [
  {
    name: "Bougainvillea",
    description: "flowering, woody vine-like shrub",
    image: "https://www.logees.com/media/catalog/product/cache/088d41982d5ddfc4a0a1e449b5ddd946/R/1/R1083-2-large.jpg",
    type: ["shrub"],
    sunExposure: ["full sun"],
    season: ["fall"],
    moistureLevel: "dry",
    zone: ["9","10","11"],
    indoor:"false",
    outdoor: "true",
    toxic: "false",
    width: 40,
    height: 20,
    flowering: "true",
  },
  {
    name: "Sunshine Ligustrum",
    description: "Evergreen shrub with year round golden foliage",
    image: "https://neilsperry.com/wp-content/uploads/2023/06/6-15-23-Sunshine-ligustrum-grouping-other-shrubs.jpg",
    type: ["shrub"],
    sunExposure: ["6-12", "full sun"],
    season: ["spring", "fall"],
    moistureLevel: "moist",
    zone: ["5", "6", "7", "8", "9", "10"],
    indoor: "false",
    outdoor: "true",
    toxic: "true",
    width: 10,
    height: 15,
    flowering: "false",
  },
  {
    name: "Magnolia",
    description: "evergreen leaves with seasonal blooming",
    image: "https://media.istockphoto.com/id/484051032/photo/white-southern-magnolia-flower-in-bloom-on-tree-atlanta-georgia.jpg?s=612x612&w=0&k=20&c=7CLnRfS05S5tYeI2t4D-6yT-YtAphs5i3bA3y1HxIwM=",
    type: ["tree"],
    sunExposure:[ "full sun"],
    season: ["summer"],
    moistureLevel: "damp",
    zone: ["7", "8", "9", "10"],
    indoor: "false",
    outdoor: "true",
    toxic: "false",
    width: 40,
    height: 80,
    flowering: "true",
  },
  {
    name: "Daydream Dwarf Loropetalum",
    description: "displays dark purple mounding foliage year-round and bursts with lovely dark pink string clusters each spring",
    image: "https://sunsetplantcollection.com/wp-content/uploads/Loropetalum_Purple_Daydream_Close_600x660px.jpg",
    type:[ "shrub"],
    sunExposure: ["1-3", "3-6"],
    season: ["fall", "spring", "summer"],
    moistureLevel: "moist",
    zone: ["7", "8", "9", "10"],
    indoor: "false",
    outdoor: "true",
    toxic: "false",
    width: "3",
    height: "3",
    flowering: "true",
  },
  {
    name: "Daffodils",
    description: "single flower of yellow or white petals surrounding a trumpet on a long green stalk",
    image: "https://h2.commercev3.net/cdn.brecks.com/images/800/99613A.jpg",
    type: ["perennial"],
    sunExposure: ["6-9", "3-6","9-12", "full sun"],
    season: ["spring", "summer"],
    moistureLevel: "moist",
    zone: ["3", "4", "5", "6", "7"],
    indoor: "false",
    outdoor: "true",
    toxic: "false",
    width: ".5",
    height: "1.5",
    flowering: "true",
  },
  {
    name: "Hydrangea",
    description: "deciduous shrubs with flowers in terminal, round or umbrella-shaped clusters in colors of white, pink, or blue, or even purple",
    image: "https://i.shgcdn.com/e90fe375-af84-48d3-a3e3-12e24e45d241/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    type: ["shrub"],
    sunExposure: ["3-6", "6-9", "9-12"],
    season: ["fall", "spring", "summer"],
    moistureLevel: "moist",
    zone: ["3", "4", "5", "6", "7", "8", "9"],
    indoor: "false",
    outdoor: "true",
    toxic: "false",
    width: "6",
    height: "6",
    flowering: "true",
  },
  {
    name: "Weeping Willow",
    description: "medium to large deciduous tree with a stout trunk topped by a graceful broad-rounded crown of branches that sweep downward to the ground",
    image: "https://thisoldhouse.jppadmin.com/wp-content/uploads/sites/10/2022/05/AdobeStock_236514178__1_.0-scaled.jpg",
    type: ["tree"],
    sunExposure: ["9-12", "full sun"],
    season: ["fall", "spring", "summer"],
    moistureLevel: "moist",
    zone: ["4", "5", "6", "7", "8", "9", "10"],
    indoor: "false",
    outdoor: "true",
    toxic: "false",
    width: "35",
    height: "40",
    flowering: "false",
  },
  {
    name: "Salad Bowl",
    description: "bright green succulent has a large rosette, and tips of its leaves blush red when happily stressed",
    image: "https://i.pinimg.com/564x/b5/48/da/b548da89c58db6d56f52eed51b4350a5--growing-succulents-aeonium.jpg",
    type: ["succulent"],
    sunExposure: ["6-9", "9-12", "full sun"],
    season: ["fall", "spring"],
    moistureLevel: "dry",
    zone: ["7", "8", "9", "10"],
    indoor: "true",
    outdoor: "true",
    toxic: "false",
    width: "3",
    height: "1",
    flowering: "false",
  },
  {
    name: "English Ivy",
    description: "vigorous, aggressive, fast-growing, woody evergreen perennial that is primarily grown as a climbing vine or trailing ground cover",
    image: "https://cdn.shopify.com/s/files/1/0058/0252/4783/files/MicrosoftTeams-image_1ad21fab-9423-47f8-8775-6e4f7c5356ac.jpg?v=1665510676",
    type: ["vine"],
    sunExposure: ["1-3", "3-6","6-9"],
    season: ["fall", "spring", "summer"],
    moistureLevel: "moist",
    zone: ["5", "6", "7", "8", "9", "10", "11"],
    indoor: "true",
    outdoor: "true",
    toxic: "true",
    width: "15",
    height: "3",
    flowering: "false",
  },
];

const seedPlant = async () => {
    // Loop over data, await is important to resolve the promise (I promise you that the findAll method is a promise)
    for await (const element of data) {
      // Check if the user exists in the DB already
      const plant = await Models.Plant.findAll({
        where: {
            name: element.name,
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
  
      // Check if the data returned has a plant or not
      if (plant.length === 0) {
        // If no user, add one
        Models.Plant.create(element)
          .then((data) => {
            console.log("Added", element);
          })
          .catch((err) => {
            console.log("Error:", err);
            throw err;
          });
      } else {
        console.log("Plant exists", plant[0].name);
      }
    }
  };
  
  module.exports = {
    seedPlant,
  };