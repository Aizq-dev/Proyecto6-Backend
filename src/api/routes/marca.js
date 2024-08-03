const express = require('express')
const { getAllMarcas, getMarcaById, createMarca, updateMarcaById, deleteMarca } = require('../controllers/marca')
const { updateElementsController } = require('../controllers/BetwenCollectionsController')
const router = express.Router()


router.get('/',getAllMarcas)
router.get('/:id',getMarcaById)
router.post('/',createMarca)
router.put('/:id', updateMarcaById)
router.put('/:idMarca/modelo/:idAuto',updateElementsController)
router.delete('/:id',deleteMarca)




module.exports = router
 