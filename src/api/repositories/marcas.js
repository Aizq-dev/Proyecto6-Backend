

const {Marca} = require('../models/marcas');
const { setError } = require('../../config/error');




const getAllMarcasFromDB = async()=>{
    try {
        const marcas = await Marca.find().populate({
            path: 'modelos',
            model: 'Auto',
            select:{
                modelo:true,
                precio:true,
                año:true
            }
        });
        
        return marcas;
    } catch (error) {
    console.log(error)
       return setError('400','Error al obtener todo las marcas de la base de datos')
        
    }
};

const getMarcaByIdFromDB = async(id)=>{
    try {
        const marca = await Marca.findById(id).populate({
            path: 'modelos',
            model: 'Auto',
            select:{
                modelo:true,
                precio:true,
                año:true
            }
        });
    return marca
    } catch (error) {
        return setError('400','Error al obtener la marca por la ID de la base de datos')
    }
    
}

const CreateMarcaInDB = async(payload)=>{
    try {
        const newMarca = new Marca(payload)
    
    return newMarca
    } catch (error) {
        return   setError('400','Error crear una marca en la base de datos')

    }
    
}
const updateMarcaByIdInDB = async(id,payload)=>{
  try {
    const oldMarca = await Marca.findById(id)
    const newMarca = new Marca(payload)
    
    newMarca._id = id
    if (oldMarca.modelos && newMarca.modelos){
        newMarca.modelos = [...oldMarca.modelos, ... newMarca.modelos]
    }
    const updateMarca = await Marca.findByIdAndUpdate(id, newMarca, {new:true})
    return updateMarca
  } catch (error) {
    console.log('>>>>',error)
    return setError('400','Error al modificar la marca por la ID en la base de datos')

  }
    
}
const deleteMarcaInDB =async(id)=>{
    try {
         await Marca.deleteOne({_id:id})
    return
    } catch (error) {
        return  setError('400','Error al borrar la marca por la ID de la base de datos')

    }
   
}
module.exports={getAllMarcasFromDB,getMarcaByIdFromDB,CreateMarcaInDB,updateMarcaByIdInDB,deleteMarcaInDB}

