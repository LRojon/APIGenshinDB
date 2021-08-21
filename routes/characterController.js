const express = require('express')
const router = express.Router()
const genshin = require('genshin-db')

const { CharacterENModel, CharacterFRModel } = require('../models/characterModel')
const { ElementENModel, ElementFRModel } = require('../models/elementModel')

function deleteAccent(str)
{
    return str.normalize('NFD').replace(/\p{Diacritic}/gu, "")
}

router.get('/:lang/all', (req, res) => {
    if(req.params.lang == 'en-us')
    {
        CharacterENModel.findOne({}, (err, docs) => {
            if(!docs)
            {
                const chars = genshin.characters('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                chars.forEach(char => {
                    let stats = []
                    for(let i = 1; i <= 90; i++) {
                        stats.push(char.stats(i))
                        if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                    }
                    char.stats = stats
                    if(['Aether', 'Lumine'].includes(char.name)) {
                        char.element = {
                            Anemo: genshin.elements('Anemo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                            Geo: genshin.elements('Geo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                            Electro: genshin.elements('Electro', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                        }
                        char['talents'] = {
                            Anemo: genshin.talents('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                            Geo: genshin.talents('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                            Electro: genshin.talents('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                        }
                        char['constellations'] = []
                        let tmpC = genshin.constellations('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                        tmpC['element'] = 'Anemo'
                        char.constellations.push(tmpC)
                        tmpC = genshin.constellations('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                        tmpC['element'] = 'Geo'
                        char.constellations.push(tmpC)
                        tmpC = genshin.constellations('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                        tmpC['element'] = 'Electro'
                        char.constellations.push(tmpC)
                    }
                    else {
                        char['element'] = genshin.elements(char.element, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
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
                    const chars = genshin.characters('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    chars.forEach(char => {
                        let tmpChar = {...char}
                        CharacterENModel.deleteOne({name: tmpChar.name}).exec()
                        tmpChar['insertDate'] = Date.now()
                        let stats = []
                        for(let i = 1; i <= 90; i++) {
                            stats.push(tmpChar.stats(i))
                            if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                        }
                        tmpChar.stats = stats
                        if(['Aether', 'Lumine'].includes(char.name)) {
                            tmpChar.element = {
                                Anemo: genshin.elements('Anemo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                                Geo: genshin.elements('Geo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                                Electro: genshin.elements('Electro', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                            }
                            tmpChar['talents'] = {
                                Anemo: genshin.talents('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                                Geo: genshin.talents('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                                Electro: genshin.talents('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                            }
                            tmpChar['constellations'] = []
                            let tmpC = genshin.constellations('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                            tmpC['element'] = 'Anemo'
                            tmpChar.constellations.push(tmpC)
                            tmpC = genshin.constellations('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                            tmpC['element'] = 'Geo'
                            tmpChar.constellations.push(tmpC)
                            tmpC = genshin.constellations('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                            tmpC['element'] = 'Electro'
                            tmpChar.constellations.push(tmpC)
                        }
                        else {
                            tmpChar['element'] = genshin.elements(char.element, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                            tmpChar['talents'] = genshin.talents(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                            let cons = genshin.constellations(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                            tmpChar['constellations'] = []
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
                                        tmpChar.constellations.push(c)
                                    }
                                })
                            }
                        }
                        let tmp = new CharacterENModel(tmpChar)
                        tmp.save((err, docs) => {
                            if(err) console.log('Character save error : ' + err)
                        })
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
                    let stats = []
                    for(let i = 1; i <= 90; i++) {
                        stats.push(char.stats(i))
                        if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                    }
                    char.stats = stats
                    if(['Aether', 'Lumine'].includes(char.name)) {
                        char.description = char.name == 'Aether' ? "Un voyageur venant d'un autre monde qui a été séparé de sa sœur. Il débute son périple à la recherche des Sept Archons de Teyvat dans l'espoir de la retrouver." : "Une voyageuse venant d'un autre monde qui a été séparée de son frère. Elle débute son périple à la recherche des Sept Archons de Teyvat dans l'espoir de le retrouver."
                        char.element = {
                            Anemo: genshin.elements('Anemo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                            Geo: genshin.elements('Geo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                            Electro: genshin.elements('Electro', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                        }
                        char['talents'] = {
                            Anemo: genshin.talents('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'}),
                            Geo: genshin.talents('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'}),
                            Electro: genshin.talents('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'}),
                        }
                        char['constellations'] = []
                        let tmpC = genshin.constellations('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                        tmpC['element'] = 'Anemo'
                        char.constellations.push(tmpC)
                        tmpC = genshin.constellations('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                        tmpC['element'] = 'Geo'
                        char.constellations.push(tmpC)
                        tmpC = genshin.constellations('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                        tmpC['element'] = 'Electro'
                        char.constellations.push(tmpC)
                    }
                    else {
                        char['element'] = genshin.elements(deleteAccent(char.element), {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
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
                    const chars = genshin.characters('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                    chars.forEach(char => {
                        let tmpChar = {...char}
                        CharacterFRModel.deleteOne({name: tmpChar.name}).exec()
                        tmpChar['insertDate'] = Date.now()
                        let stats = []
                        for(let i = 1; i <= 90; i++) {
                            stats.push(tmpChar.stats(i))
                            if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                        }
                        tmpChar.stats = stats
                        if(['Aether', 'Lumine'].includes(char.name)) {
                            tmpChar.description = char.name == 'Aether' ? "Un voyageur venant d'un autre monde qui a été séparé de sa sœur. Il débute son périple à la recherche des Sept Archons de Teyvat dans l'espoir de la retrouver." : "Une voyageuse venant d'un autre monde qui a été séparée de son frère. Elle débute son périple à la recherche des Sept Archons de Teyvat dans l'espoir de le retrouver."
                            tmpChar.element = {
                                Anemo: genshin.elements('Anemo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                                Geo: genshin.elements('Geo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                                Electro: genshin.elements('Electro', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                            }
                            tmpChar['talents'] = {
                                Anemo: genshin.talents('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'}),
                                Geo: genshin.talents('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'}),
                                Electro: genshin.talents('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'}),
                            }
                            tmpChar['constellations'] = []
                            let tmpC = genshin.constellations('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                            tmpC['element'] = 'Anemo'
                            tmpChar.constellations.push(tmpC)
                            tmpC = genshin.constellations('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                            tmpC['element'] = 'Geo'
                            tmpChar.constellations.push(tmpC)
                            tmpC = genshin.constellations('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                            tmpC['element'] = 'Electro'
                            tmpChar.constellations.push(tmpC)
                        }
                        else {
                            tmpChar['element'] = genshin.elements(deleteAccent(char.element), {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                            tmpChar['talents'] = genshin.talents(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                            let cons = genshin.constellations(char.name, {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                            tmpChar['constellations'] = []
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
                                        tmpChar.constellations.push(c)
                                    }
                                })
                            }
                        }
                        let tmp = new CharacterFRModel(tmpChar)
                        tmp.save((err, docs) => {
                            if(err) console.log('Character save error : ' + err)
                        })
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