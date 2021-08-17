const express = require('express')
const router = express.Router()

const { BuildENModel, BuildFRModel } = require('../models/buildModel')

router.get('/:lang/all', (req, res) => {
    if(req.params.lang == "en-us") {
        BuildENModel.find((err, docs) => {
            if(err) console.log("Build fetch error (all) : " + err)
            else res.send(docs)
        })
    }
    else if (req.params.lang == 'fr-fr') {

    }
})
router.get('/:lang/:multiple', (req, res) => {
    if(req.params.lang == "en-us") {
        let filter = {}
        if(req.query.character != null) filter['characterName'] = req.query.character
        if(req.query.role != null) filter['role'] = req.query.role
        if(req.query.weapon != null) filter['weapons.name'] = req.query.weapon
        if(req.query.artifact != null) filter['artifacts.sets.bonus.set'] = req.query.artifact
        if(req.params.multiple == 'one')
            BuildENModel.findOne(filter, (err, docs) => {
                if(err) console.log("Build fetch one error : " + err)
                else res.send(docs)
            })
        else if(req.params.multiple == 'multiple')
            BuildENModel.find(filter, (err, docs) => {
                if(err) console.log("Build fetch one error : " + err)
                else res.send(docs)
            })
    }
    else if (req.params.lang == 'fr-fr') {

    }
})

module.exports = router