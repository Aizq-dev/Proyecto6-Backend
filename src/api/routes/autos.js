const express = require('express')
const { getAllAutos, getAutoById, createAuto, updateAutoById, deleteAuto } = require('../controllers/autos')
const { updateOrRemoveFieldInAuto } = require('../repositories/BetwenCollections')
const { updateOrRemoveFieldInAutoController } = require('../controllers/BetwenCollectionsController')
const router = express.Router()


router.get('/',getAllAutos)
router.get('/:id',getAutoById)
router.post('/',createAuto)
router.put('/:id', updateAutoById)
router.delete('/:id',deleteAuto)
router.put('/:idAuto/marca/:idMarca',updateOrRemoveFieldInAutoController)




module.exports = router
 