const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

// localhost:8080/api/favorites/
router.get("/", (req, res) => {
  Controllers.favoriteController.getFavorite(res)
})

// localhost:8080/api/favorites/create
router.post("/create", (req, res) => {
  Controllers.favoriteController.createFavorite(req.body, res)
  
})

// localhost:8080/api/favorites/:<user_id>
router.get('/:id', (req, res) => {
  Controllers.favoriteController.getFavoriteById(req, res)
})

// localhost:8080/api/favorites/:<user_id>
router.put('/:id', (req, res) => {
  Controllers.favoriteController.updateFavorite(req, res)
})



// localhost:8080/api/favorites/<user_id>  
router.delete('/:id', (req, res) => {
  Controllers.favoriteController.deleteFavorite(req, res)
})

// console.log("Router:", req.body)

module.exports = router;