require('dotenv').config()

const express =require('express')
const { connectDB } = require('./config/db')
const mainRoutes =require('./api/routes/indexRouter')
const { setError } = require('./config/error')
const { initialData } = require('./api/controllers/initialDate')


connectDB
initialData()
  const app = express()
  app.use(express.json())
  const PORT = 4001
  app.use('/api',mainRoutes)
  app.use('*',(req,res,next)=>{
    return next(setError('404',"Ruta no encontrada"))})

app.use((error,req,res,next)=>{
 return res.status(error.status || '500').json(error.message || "Error Interno del Servidor")
})


app.listen(PORT,()=>{
    console.log(`La App corriento en puerto: http://localhost:${PORT}`)
})