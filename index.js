const express = require('express')
const app = express()
require('./models/dbConfig')
const characterRoutes = require('./routes/characterController')
const elementRoutes = require('./routes/elementController')
const weaponRoutes = require('./routes/weaponController')
const materialRoutes = require('./routes/materialController')
const dailyRoutes = require('./routes/dailyController')

app.use('/characters', characterRoutes)
app.use('/elements', elementRoutes)
app.use('/weapons', weaponRoutes)
app.use('/materials', materialRoutes)
app.use('/daily', dailyRoutes)

app.listen(5500, () => console.log("Server started at port 5500"));