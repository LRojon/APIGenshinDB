const express = require('express')
const app = express()
require('./models/dbConfig')
const navigationRoutes = require('./routes/navigationController')
const characterRoutes = require('./routes/characterController')
const elementRoutes = require('./routes/elementController')
const weaponRoutes = require('./routes/weaponController')
const materialRoutes = require('./routes/materialController')
const buildRoutes = require('./routes/buildController')
const buildInitRoutes = require('./routes/initBuildsController')
const artifactRoutes = require('./routes/artifactController')
const teamRoutes = require('./routes/teamController')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')

app.use(express.json({
    limit: '2000mb',
    extended: false
}))
app.use(express.urlencoded({
    limit: '2000mb',
    extended: false,
    parameterLimit: 50000
}))
app.use(express.text({
    limit: '2000mb',
}))

app.use('/', navigationRoutes)
app.use('/characters', characterRoutes)
app.use('/elements', elementRoutes)
app.use('/weapons', weaponRoutes)
app.use('/materials', materialRoutes)
app.use('/builds', buildRoutes)
app.use('/builds', buildInitRoutes)
app.use('/artifacts', artifactRoutes)
app.use('/teams', teamRoutes)

app.listen(8101, () => {
    console.log("Server started at port 8101")
})