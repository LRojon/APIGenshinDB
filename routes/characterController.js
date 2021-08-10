const express = require('express')
const router = express.Router()
const genshin = require('genshin-db')

const { CharacterENModel, CharacterFRModel } = require('../models/characterModel')
const { ElementENModel, ElementFRModel } = require('../models/elementModel')

function deleteAccent(str)
{
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "")
}

router.get('/:lang/all', (req, res) => {
    if(req.params.lang == 'en-us')
    {
        CharacterENModel.findOne({}, (err, docs) => {
            if(!docs)
            {
                const chars = genshin.characters('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                chars.forEach(char => {
                    if(char.element != 'None') char['element'] = genshin.elements(char.element, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    let stats = []
                    for(let i = 1; i <= 90; i++) {
                        stats.push(char.stats(i))
                        if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                    }
                    char.stats = stats
                    char['talents'] = genshin.talents(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    let cons = genshin.constellations(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    char['constellations'] = []
                    if(cons != undefined) {
                        Object.keys(cons).forEach(elem => {
                            if(['c1', 'c2', 'c3', 'c4', 'c5', 'c6'].includes(elem))
                            {
                                let c = {
                                    num: parseInt(elem.substring(1)),
                                    name: cons[elem].name,
                                    effect: cons[elem].effect,
                                    image: cons.images[elem]
                                }
                                char.constellations.push(c)
                            }
                        })
                    }
                    let tmp = new CharacterENModel(char)
                    tmp.save((err, docs) => {
                        if(err) console.log('Character save error : ' + err)
                    })
                })
            }
            else
            {
                if((new Date()).getTime() - docs.insertDate.getTime() > 10000/*86400000 /* = 1000ms x 60s x 60m x 24h  */)
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
                    char['talents'] = genshin.talents(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    let cons = genshin.constellations(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    char['constellations'] = []
                    if(cons != undefined) {
                        Object.keys(cons).forEach(elem => {
                            if(['c1', 'c2', 'c3', 'c4', 'c5', 'c6'].includes(elem))
                            {
                                let c = {
                                    num: parseInt(elem.substring(1)),
                                    name: cons[elem].name,
                                    effect: cons[elem].effect,
                                    image: cons.images[elem]
                                }
                                char.constellations.push(c)
                            }
                        })
                    }
                    let tmp = new CharacterENModel(tmpChar)
                    tmp.save((err, docs) => {
                        if(err) console.log('Character save error : ' + err)
                    })
                }
            }
        })
        setTimeout(() => {
            CharacterENModel.find((err, docs) => {
                if(!err) res.send(docs)
                else console.log("Error : " + err)
            })
        }, 100);
    }
    else if (req.params.lang = 'fr-fr')
    {
        CharacterFRModel.findOne({}, (err, docs) => {
            if(!docs)
            {
                const chars = genshin.characters('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                chars.forEach(char => {
                    if(char.element != 'None') char['element'] = genshin.elements(char.element, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    let stats = []
                    for(let i = 1; i <= 90; i++) {
                        stats.push(char.stats(i))
                        if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                    }
                    char.stats = stats
                    char['talents'] = genshin.talents(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                    let cons = genshin.constellations(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                    char['constellations'] = []
                    if(cons != undefined) {
                        Object.keys(cons).forEach(elem => {
                            if(['c1', 'c2', 'c3', 'c4', 'c5', 'c6'].includes(elem))
                            {
                                let c = {
                                    num: parseInt(elem.substring(1)),
                                    name: cons[elem].name,
                                    effect: cons[elem].effect,
                                    image: cons.images[elem]
                                }
                                char.constellations.push(c)
                            }
                        })
                    }
                    let tmp = new CharacterFRModel(char)
                    tmp.save((err, docs) => {
                        if(err) console.log('Character save error : ' + err)
                    })
                })
            }
            else
            {
                if((new Date()).getTime() - docs.insertDate.getTime() > 10000/*86400000 /* = 1000ms x 60s x 60m x 24h  */)
                {
                    if(char.element != 'None') char['element'] = genshin.elements(char.element, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    CharacterFRModel.deleteOne({name: char.name}).exec()
                    char['insertDate'] = Date.now()
                    let stats = []
                    console.log(char.stats)
                    for(let i = 1; i <= 90; i++) {
                        stats.push(char.stats(i))
                        if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                    }
                    let tmpChar = {...char}
                    tmpChar.stats = stats
                    char['talents'] = genshin.talents(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                    let cons = genshin.constellations(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                    char['constellations'] = []
                    if(cons != undefined) {
                        Object.keys(cons).forEach(elem => {
                            if(['c1', 'c2', 'c3', 'c4', 'c5', 'c6'].includes(elem))
                            {
                                let c = {
                                    num: parseInt(elem.substring(1)),
                                    name: cons[elem].name,
                                    effect: cons[elem].effect,
                                    image: cons.images[elem]
                                }
                                char.constellations.push(c)
                            }
                        })
                    }
                    let tmp = new CharacterFRModel(tmpChar)
                    tmp.save((err, docs) => {
                        if(err) console.log('Character save error : ' + err)
                    })
                }
            }
        })
        setTimeout(() => {
            CharacterFRModel.find((err, docs) => {
                if(!err) res.send(docs)
                else console.log("Error : " + err)
            })
        }, 100);
    }
})

module.exports = router