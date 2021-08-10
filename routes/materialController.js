const express = require('express')
const router = express.Router()
const genshin = require("genshin-db")

const { MaterialENModel, MaterialFRModel } = require('../models/materialModel')

router.get('/:lang/all', (req, res) => {
    if(req.params.lang == 'en-us')
    {
        MaterialENModel.findOne({}, (err, docs) => {
            if(!docs)
            {
                let materials = genshin.materials('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                materials.forEach(material => {
                    let tmp = new MaterialENModel(material)
                    tmp.save((err, docs) => {
                        if(err) console.log("Material save error : " + err)
                    })
                })
            }
            else
            {
                if((new Date()).getTime() - docs.insertDate.getTime() > 10000/*86400000*/)
                {
                    let materials = genshin.materials('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    materials.forEach(material => {
                        MaterialENModel.findOneAndReplace({name: material.name}, material).exec()
                    })
                }
            }
        })
        setTimeout(() => {
            MaterialENModel.find((err, docs) => {
                if(err) console.log("Material find error : " + err)
                res.send(docs)
            })
        }, 100);
    }
    else if(req.params.lang = "fr-fr")
    {
        MaterialFRModel.findOne({}, (err, docs) => {
            if(!docs)
            {
                let materials = genshin.materials('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                materials.forEach(material => {
                    let tmp = new MaterialFRModel(material)
                    tmp.save((err, docs) => {
                        if(err) console.log("Material save error : " + err)
                    })
                })
            }
            else
            {
                if((new Date()).getTime() - docs.insertDate.getTime() > 10000/*86400000*/)
                {
                    let materials = genshin.materials('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                    materials.forEach(material => {
                        MaterialFRModel.findOneAndReplace({name: material.name}, material).exec()
                    })
                }
            }
        })
        setTimeout(() => {
            MaterialFRModel.find((err, docs) => {
                if(err) console.log("Material find error : " + err)
                res.send(docs)
            })
        }, 100);
    }
})

module.exports = router