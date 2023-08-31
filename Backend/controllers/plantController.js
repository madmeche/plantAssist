"use strict";

const Models = require("../models");
const { Op } = require('sequelize')

const getPlant = (res) => {
  Models.Plant.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const getPlantById = (req, res) => {
  Models.Plant.findAll({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const getPlantsByIds = (req, res) => {
  console.log(req.body.plantIds);
  Models.Plant.findAll({ where: { id: { [Op.or]: req.body.plantIds } } })
    .then((data) => {
      res.send({ result: 200, success: true, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const createPlant = async (data, res) => {
  Models.Plant.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const updatePlant = (req, res) => {
  Models.Plant.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const deletePlant = (req, res) => {
  Models.Plant.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

// where: {
//   type: "9a", // main search param
//   [Op.or]: [
//     {sun_exposure: "1-3"},
//     {sun_exposure: "3-6"}
//   ]
//     }
//     .then((data) => {
//         res.send({result: 200, data: data})
//     })
//     .catch(err => {
//         console.log("Error:", err)
//         throw err
//       })
// })
// }

module.exports = {
  getPlant,
  getPlantById,
  getPlantsByIds,
  createPlant,
  updatePlant,
  deletePlant,
};
