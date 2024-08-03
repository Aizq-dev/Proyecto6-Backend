const express= require('express')


const autoRouter = require('./autos')
const marcaRouter = require('./marca')
const router = express.Router()


router.use('/autos',autoRouter)
router.use('/marca',marcaRouter)


module.exports= router