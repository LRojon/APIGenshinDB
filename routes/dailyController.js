const express = require('express')
const router = express.Router()

const { MaterialENModel, MaterialFRModel } = require('../models/materialModel')

router.get('/:lang/all', (req, res) => {

})

module.exports = router