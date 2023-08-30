const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

// localhost:8080/api/recent/
router.get("/", (req, res) => {
  Controllers.recentController.getRecent(res)
})



// localhost:8080/api/recent/create
router.post("/create", (req, res) => {
  Controllers.recentController.createRecent(req.body, res)
})

// localhost:8080/api/recent/:<user_id>
router.get('/:id', (req, res) => {
  Controllers.recentController.getRecentById(req, res)
})
// localhost:8080/api/recent/:<user_id>
router.put('/:id', (req, res) => {
  Controllers.recentController.updateRecent(req, res)
})

// localhost:8080/api/recent/:<user_id>  
router.delete('/:id', (req, res) => {
  Controllers.recentController.deleteRecent(req, res)
})

// console.log("Router:", req.body)

module.exports = router;
