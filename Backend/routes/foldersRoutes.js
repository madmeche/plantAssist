const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

// localhost:8080/api/folders/
router.get("/", (req, res) => {
  Controllers.foldersController.getFolder(res)
})

// localhost:8080/api/folderss/:<user_id>
router.get('/:id', (req, res) => {
  Controllers.foldersController.getFolderById(req, res)
})

// localhost:8080/api/folders/create
router.post("/create", (req, res) => {
  Controllers.foldersController.createFolder(req.body, res)
  
})

// localhost:8080/api/folders/:<user_id>
router.put('/:id', (req, res) => {
  Controllers.foldersController.updateFolder(req, res)
})

// localhost:8080/api/folders/<user_id>  
router.delete('/:id', (req, res) => {
  Controllers.foldersController.deleteFolder(req, res)
})

// console.log("Router:", req.body)

module.exports = router;