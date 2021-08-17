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
                        material['inserDate'] = Date.now()
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
                        material['inserDate'] = Date.now()
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

router.get('/:lang/daily', (req, res) => {
    if(req.params.lang == 'en-us')
    {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let day = daysOfWeek[(new Date()).getDay()];
        MaterialENModel.findOne({daysofweek: day}, (err, docs) => {
            if(err) console.log("Daily material find error : " + err)
            if(!docs)
            {
                let materials = genshin.materials(day, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
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
                    let materials = genshin.materials(day, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    materials.forEach(material => {
                        MaterialENModel.deleteOne({name: material.name}).exec()
                        material['insertDate'] = Date.now()
                        let tmp = new MaterialENModel(material)
                        tmp.save((err, docs) => {
                            if(err) console.log("Material save error : " + err)
                        })
                    })
                }
            }
        })
        MaterialENModel.find({rarity: '2', daysofweek: day}, (err, docs) => {
            if(err) console.log("Daily material find error : " + err)
            else res.send(docs)
        })
    }
    else if(req.params.lang == 'fr-fr')
    {
        const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Venredi', 'Samedi']
        let day = daysOfWeek[(new Date()).getDay()];
        MaterialFRModel.findOne({daysofweek: day}, (err, docs) => {
            if(err) console.log("Daily material find error : " + err)
            if(!docs)
            {
                let materials = genshin.materials(day, {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
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
                    let materials = genshin.materials(day, {matchCategories: true, verboseCategories: true, resultLanguage: 'French', queryLanguages: ['French']})
                    materials.forEach(material => {
                        MaterialFRModel.deleteOne({name: material.name}).exec()
                        material['insertDate'] = Date.now()
                        let tmp = new MaterialFRModel(material)
                        tmp.save((err, docs) => {
                            if(err) console.log("Material save error : " + err)
                        })
                    })
                }
            }
        })
        MaterialFRModel.find({rarity: '2', daysofweek: day}, (err, docs) => {
            if(err) console.log("Daily material find error : " + err)
            else res.send(docs)
        })
    }
})

module.exports = router