const Models = require('../models')

const getFolders = (res) => {
  Models.Folders.findAll({})
    .then((data) => {
      // Do NOT return passwords
      // Remove the password key before returning
      // Either through Javascript, OR through scope attribute, see: /models/user.js Line #45
      // for(const user in data){
      //   data[user].password = undefined //The Javascript way of removing a property.key
      // }
      res.send({result: 200, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}

const createFolders = async (data, res) => {
    
    Models.Folders.create(data)
   
      .then((data) => {
        res.status(201).json({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }

  const getFoldersById = (req, res) => {
    Models.Folders.findAll({
      where: { id: req.params.id },
    })
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log("Error: ", err);
        throw err;
      });
  };
  
  const updateFolders = (req, res) => {
    console.log("Controller:", req.body)
    Models.Folders.update(req.body, { where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  const deleteFolders = (req, res) => {
    console.log("Controller:", req.body)
    Models.Folders.destroy( {where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  module.exports = {
    getFolders, getFoldersById, createFolders, updateFolders, deleteFolders
  }

