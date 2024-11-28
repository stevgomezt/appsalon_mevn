import express from 'express' //esm
import servicesRoutes from './routes/servicesRoutes.js'

// Configurar App
const app = express()

//Definir ruta
app.use('/api/services', servicesRoutes)

// Definir un puerto
const PORT = process.env.PORT || 4000

// Iniciar App
app.listen(PORT, () => {
  console.log('El servidor se esta ejecutando en el puerto : ', PORT)
})
