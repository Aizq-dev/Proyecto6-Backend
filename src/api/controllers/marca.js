const { getAllMarcasFromDB, getMarcaByIdFromDB, CreateMarcaInDB, updateMarcaByIdInDB, deleteMarcaInDB } = require("../repositories/marcas")

  

const getAllMarcas = async(req,res,next)=>{
  const marcas = await getAllMarcasFromDB()
  
  res.status(200).json({data: marcas})
}

const getMarcaById = async(req,res,next)=>{
  const {id} = req.params
  const marca= await getMarcaByIdFromDB(id)
  res.status(200).json({data: marca})
}

const createMarca = async(req,res,next)=>{
  
  const newMarca = await CreateMarcaInDB(req.body)
  await newMarca.save()
  res.status(201).json({data: newMarca})
}

const updateMarcaById = async(req,res,next)=>{
  const {id}=req.params
  const payload = req.body
  const updateMarca = await updateMarcaByIdInDB(id,payload)
  res.status(200).json({data: updateMarca})
}
const deleteMarca = async(req,res,next)=>{
  const {id} = req.params

  await deleteMarcaInDB(id)
  res.status(200).json({data: 'Marca borrado'})
}

module.exports={getAllMarcas,getMarcaById,createMarca,updateMarcaById,deleteMarca}
