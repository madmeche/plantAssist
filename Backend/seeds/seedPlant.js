const Models = require("../models");

const data = [
  {
    name: "Bougainvillea",
    description: "flowering, woody vine-like shrub",
    image: "https://www.logees.com/media/catalog/product/cache/088d41982d5ddfc4a0a1e449b5ddd946/R/1/R1083-2-large.jpg",
    type: "shrub",
    sunExposure: ["full sun"],
    season: ["Fall"],
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
    image: "https://southernlivingplants.com/wp-content/uploads/Five_Uses_for_Sunshine_Ligustrum_1200x6302.jpg",
    type: "shrub",
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
    type: "tree",
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
    type: "shrub",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xPhc63e3dcL_3vVD_IrlQzkpjkh8eYpqVA&usqp=CAU",
    type: "perennial",
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
    image: "https://floralife.com.ua/image/cache/catalog/encyclopedia/hydrangea-enc/hydrangea-top-1200x900.jpg",
    type: "shrub",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2_2Qre8E4MeaoXXkCYKdZfy-3H2vpRWMOSX0MmDlnwXWfldqhEKSxE1U_JM10iozW0c&usqp=CAU",
    type: "tree",
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
  // {
  //   name: "Daydream Dwarf Loropetalum",
  //   description: "displays dark purple mounding foliage year-round and bursts with lovely dark pink string clusters each spring",
  //   image: "https://sunsetplantcollection.com/wp-content/uploads/Loropetalum_Purple_Daydream_Close_600x660px.jpg",
  //   type: "shrub",
  //   sunExposure: ["1-3", "3-6"],
  //   season: ["fall", "spring", "summer"],
  //   moistureLevel: "moist",
  //   zone: ["7", "8", "9", "10"],
  //   indoor: "no",
  //   outdoor: "yes",
  //   toxic: "false",
  //   width: "3",
  //   height: "3",
  //   flowering: "true",
  // },
  {
    name: "Salad Bowl",
    description: "bright green succulent has a large rosette, and tips of its leaves blush red when happily stressed",
    image: "https://i.pinimg.com/564x/b5/48/da/b548da89c58db6d56f52eed51b4350a5--growing-succulents-aeonium.jpg",
    type: "succulent",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OjkbcbgkwlF6ivbSHlJuKYvwSVyr2RKiUg&usqp=CAU",
    type: "vine",
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
  
      // Check if the data returned has a user or not
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