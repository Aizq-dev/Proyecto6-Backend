require('dotenv').config()
const mongoose = require("mongoose");
const express =require('express')



mongoose
  .connect( process.env.MONGO_URL)
  .then(async() => {
    console.log("Conectado a la base de datos de mongo");
  })
  .catch((err) => {
    console.log("Error conectado a la db:", err);
    process.exit(1)
  });

  const app = express()
  app.use(express.json())
  const PORT = 4001

app.listen(PORT,()=>{
    console.log(`La App corriento en puerto: http://localhost:${PORT}`)
})