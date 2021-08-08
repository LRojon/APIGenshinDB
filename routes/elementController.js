const express = require('express')
const router = express.Router()
const genshin = require('genshin-db')
const { ElementENModel, ElementFRModel } = require('../models/elementModel')

router.get('/:lang/all', (req, res) => {
    if(req.params.lang == 'en-us')
    {
        const elements = genshin.elements('name', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
        elements.forEach(elem => {
            ElementENModel.findOne({name: elem.name}, (err, docs) => {
                if(!docs)
                {
                    let tmp = new ElementENModel(elem)
                    tmp.save((err, docs) => {
                        if(err) console.log('Element save error : ' + err)
                    })
                }
                else
                {
                    if((new Date()).getTime() - docs.insertDate.getTime() > 86400000 /* = 1000ms x 60s x 60m x 24h  */)
                    {
                        ElementENModel.deleteOne({name: elem.name}).exec()
                        elem['insertDate'] = Date.now()
                        let tmp = new ElementENModel(elem)
                        tmp.save((err, docs) => {
                            if(err) console.log('Element save error : ' + err)
                        })
                    }
                }
                if(err) console.log('Find one element error: ' + err)
            })
        })
        setTimeout(() => {
            ElementENModel.find((err, docs) => {
                if(!err) res.send(docs)
                else console.log("Error : " + err)
            })
        }, 100);
    }
})

module.exports = router