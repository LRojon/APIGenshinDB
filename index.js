const express = require('express')
const app = express()
require('./models/dbConfig')
const characterRoutes = require('./routes/characterController')
const elementRoutes = require('./routes/elementController')
const weaponRoutes = require('./routes/weaponController')

app.use('/characters', characterRoutes)
app.use('/elements', elementRoutes)
app.use('/weapons', weaponRoutes)

app.listen(5500, () => console.log("Server started at port 5500"));