'use strict'

const Models = require('../models')

const getFavorite = (res) => {
  //promise based functions. .findall is the promise and .then resolves the promise doing something with the data found.
  Models.Favorite.findAll({})
    //finds all Heros
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const getFavoriteById = (req, res) => {
  Models.Favorite.findAll({
    where: { hero_id: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createFavorite = (data, res) => {
  Models.Favorite.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
  
const updateFavorite = (req, res) => {
  //updates the favorite matching the ID from the param using JSON data POSTed in request body
  Models.Favorite.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
  
const deleteFavorite = (req, res) => {
  //deletes the favorite matching the ID from the param
  Models.Favorite.destroy({ where: {id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
  
  module.exports = {
    getFavorite, getFavoriteById, createFavorite, updateFavorite, deleteFavorite
  }

