const express = require('express')
const app = express()
require('./models/dbConfig')
const characterRoutes = require('./routes/characterController')
const elementRoutes = require('./routes/elementController')
const weaponRoutes = require('./routes/weaponController')
const materialRoutes = require('./routes/materialController')
const buildRoutes = require('./routes/buildController')
const buildInitRoutes = require('./routes/initBuildsController')
const artifactRoutes = require('./routes/artifactController')
const teamRoutes = require('./routes/teamController')

app.use('/characters', characterRoutes)
app.use('/elements', elementRoutes)
app.use('/weapons', weaponRoutes)
app.use('/materials', materialRoutes)
app.use('/builds', buildRoutes)
app.use('/builds', buildInitRoutes)
app.use('/artifacts', artifactRoutes)
app.use('/team', teamRoutes)

app.listen(5500, () => console.log("Server started at port 5500"));