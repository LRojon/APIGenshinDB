const express = require('express')
const router = express.Router()
const genshin = require('genshin-db')

const { CharacterENModel, CharacterFRModel } = require('../models/characterModel')
const { ElementENModel, ElementFRModel } = require('../models/elementModel')

router.get('/:lang/all', (req, res) => {
    if(req.params.lang == 'en-us')
    {
        const chars = genshin.characters('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
        chars.forEach(char => {
            CharacterENModel.findOne({name: char.name}, (err, docs) => {
                if(!docs)
                {
                    if(char.element != 'None') char['element'] = genshin.elements(char.element, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    let stats = []
                    for(let i = 1; i <= 90; i++) {
                        stats.push(char.stats(i))
                        if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                    }
                    char.stats = stats
                    let tmp = new CharacterENModel(char)
                    tmp.save((err, docs) => {
                        if(err) console.log('Character save error : ' + err)
                    })
                }
                else
                {
                    if((new Date()).getTime() - docs.insertDate.getTime() > 86400000 /* = 1000ms x 60s x 60m x 24h  */)
                    {
                        if(char.element != 'None') char['element'] = genshin.elements(char.element, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                        CharacterENModel.deleteOne({name: char.name}).exec()
                        char['insertDate'] = Date.now()
                        let stats = []
                        console.log(char.stats)
                        for(let i = 1; i <= 90; i++) {
                            stats.push(char.stats(i))
                            if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                        }
                        let tmpChar = {...char}
                        tmpChar.stats = stats
                        let tmp = new CharacterENModel(tmpChar)
                        tmp.save((err, docs) => {
                            if(err) console.log('Character save error : ' + err)
                        })
                    }
                }
                if(err) console.log('Find one element error: ' + err)
            })
        })
        CharacterENModel.find((err, docs) => {
            if(!err) res.send(docs)
            else console.log("Error : " + err)
        })
    }
    else if (req.params.lang = 'fr-fr')
    {
        CharacterFRModel.find((err, docs) => {
            console.log(docs)
            if(!err) res.send(docs)
            else console.log("Error : " + err)
        })
    }
})

module.exports = router