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
                    if(char.name != 'Lumine')
                    {
                        let stats = []
                        for(let i = 1; i <= 90; i++) {
                            stats.push(char.stats(i))
                            if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                        }
                        char.stats = stats
                        if('Aether' == char.name) {
                            char.name = 'Traveler (Anemo)'
                                char.element = genshin.elements('Anemo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                char['talents'] = genshin.talents('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                                char['constellations'] = genshin.constellations('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                let tmp = new CharacterENModel(char)
                                tmp.save((err, docs) => {
                                    if(err) console.log('Character save error : ' + err)
                                })

                            char.name = 'Traveler (Geo)'
                                char.element = genshin.elements('Geo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                char['talents'] = genshin.talents('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                char['constellations'] = genshin.constellations('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                tmp = new CharacterENModel(char)
                                tmp.save((err, docs) => {
                                    if(err) console.log('Character save error : ' + err)
                                })

                            char.name = 'Traveler (Electro)'
                                char.element = genshin.elements('Electro', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                char['talents'] = genshin.talents('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                char['constellations'] = genshin.constellations('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                tmp = new CharacterENModel(char)
                                tmp.save((err, docs) => {
                                    if(err) console.log('Character save error : ' + err)
                                })
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
                            let tmp = new CharacterENModel(char)
                            tmp.save((err, docs) => {
                                if(err) console.log('Character save error : ' + err)
                            })
                        }

                    }
                })
            }
            else
            {
                if((new Date()).getTime() - docs.insertDate.getTime() > 10000/*86400000 /* = 1000ms x 60s x 60m x 24h  */)
                {
                    const chars = genshin.characters('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    chars.forEach(char => {
                        if(char.name != 'Lumine')
                        {
                            let tmpChar = {...char}
                            if(char.name == 'Aether') {
                                CharacterENModel.deleteOne({name: 'Traveler (Anemo)'}).exec()
                                CharacterENModel.deleteOne({name: 'Traveler (Geo)'}).exec()
                                CharacterENModel.deleteOne({name: 'Traveler (Electro)'}).exec()
                            }
                            else {
                                CharacterENModel.deleteOne({name: tmpChar.name}).exec()
                            }
                            tmpChar['insertDate'] = Date.now()
                            let stats = []
                            for(let i = 1; i <= 90; i++) {
                                stats.push(tmpChar.stats(i))
                                if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                            }
                            tmpChar.stats = stats
                            if('Aether' == tmpChar.name) {
                                tmpChar.name = 'Traveler (Anemo)'
                                    tmpChar.element = genshin.elements('Anemo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmpChar['talents'] = genshin.talents('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'}),
                                    tmpChar['constellations'] = genshin.constellations('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    let tmp = new CharacterENModel(tmpChar)
                                    tmp.save((err, docs) => {
                                        if(err) console.log('Character save error : ' + err)
                                    })

                                tmpChar.name = 'Traveler (Geo)'
                                    tmpChar.element = genshin.elements('Geo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmpChar['talents'] = genshin.talents('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmpChar['constellations'] = genshin.constellations('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmp = new CharacterENModel(tmpChar)
                                    tmp.save((err, docs) => {
                                        if(err) console.log('Character save error : ' + err)
                                    })

                                tmpChar.name = 'Traveler (Electro)'
                                    tmpChar.element = genshin.elements('Electro', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmpChar['talents'] = genshin.talents('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmpChar['constellations'] = genshin.constellations('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmp = new CharacterENModel(tmpChar)
                                    tmp.save((err, docs) => {
                                        if(err) console.log('Character save error : ' + err)
                                    })
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
                                let tmp = new CharacterENModel(tmpChar)
                                tmp.save((err, docs) => {
                                    if(err) console.log('Character save error : ' + err)
                                })
                            }
                        }
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
                    if(char.name != 'Lumine')
                    {
                        let stats = []
                        for(let i = 1; i <= 90; i++) {
                            stats.push(char.stats(i))
                            if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                        }
                        char.stats = stats
                        if(char.name == 'Aether') {
                            char.name = 'Voyageur.euse (Anémo)'
                                char.description = "An voyageur.euse venant d'un autre monde qui a été séparé de san sœur/son frère. Iel débute son périple à la recherche des Sept Archons de Teyvat dans l'espoir de lo retrouver."
                                char.element = genshin.elements('Anemo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                char['talents'] = genshin.talents('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'}),
                                char['constellations'] = genshin.constellations('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                let tmp = new CharacterFRModel(char)
                                tmp.save((err, docs) => {
                                    if(err) console.log('Character save error : ' + err)
                                })

                            char.name = 'Voyageur.euse (Géo)'
                                char.element = genshin.elements('Geo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                char['talents'] = genshin.talents('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                char['constellations'] = genshin.constellations('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                tmp = new CharacterFRModel(char)
                                tmp.save((err, docs) => {
                                    if(err) console.log('Character save error : ' + err)
                                })

                            char.name = 'Voyageur.euse (Électro)'
                                char.element = genshin.elements('Electro', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                char['talents'] = genshin.talents('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                char['constellations'] = genshin.constellations('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                tmp = new CharacterFRModel(char)
                                tmp.save((err, docs) => {
                                    if(err) console.log('Character save error : ' + err)
                                })
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

                            let tmp = new CharacterFRModel(char)
                            tmp.save((err, docs) => {
                                if(err) console.log('Character save error : ' + err)
                            })
                        }
                    }
                })
            }
            else
            {
                if((new Date()).getTime() - docs.insertDate.getTime() > 10000/*86400000 /* = 1000ms x 60s x 60m x 24h  */)
                {
                    const chars = genshin.characters('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                    chars.forEach(char => {
                        if(char.name != 'Lumine')
                        {
                            let tmpChar = {...char}
                            if(char.name == 'Aether') {
                                CharacterFRModel.deleteOne({name: 'Voyageur.euse (Anémo)'}).exec()
                                CharacterFRModel.deleteOne({name: 'Voyageur.euse (Géo)'}).exec()
                                CharacterFRModel.deleteOne({name: 'Voyageur.euse (Électro)'}).exec()
                            }
                            else {
                                CharacterFRModel.deleteOne({name: tmpChar.name}).exec()
                            }
                            tmpChar['insertDate'] = Date.now()
                            let stats = []
                            for(let i = 1; i <= 90; i++) {
                                stats.push(tmpChar.stats(i))
                                if([20, 40, 50, 60, 70, 80].includes(i)) stats.push(char.stats(i, '+'))
                            }
                            tmpChar.stats = stats
                            if('Aether' == tmpChar.name) {
                                tmpChar.name = 'Voyageur.euse (Anémo)'
                                    tmpChar.element = genshin.elements('Anemo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmpChar['talents'] = genshin.talents('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'}),
                                    tmpChar['constellations'] = genshin.constellations('Traveler (Anemo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                    let tmp = new CharacterFRModel(tmpChar)
                                    tmp.save((err, docs) => {
                                        if(err) console.log('Character save error : ' + err)
                                    })
    
                                tmpChar.name = 'Voyageur.euse (Géo)'
                                    tmpChar.element = genshin.elements('Geo', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmpChar['talents'] = genshin.talents('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                    tmpChar['constellations'] = genshin.constellations('Traveler (Geo)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                    tmp = new CharacterFRModel(tmpChar)
                                    tmp.save((err, docs) => {
                                        if(err) console.log('Character save error : ' + err)
                                    })
    
                                tmpChar.name = 'Voyageur.euse (Électro)'
                                    tmpChar.element = genshin.elements('Electro', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                                    tmpChar['talents'] = genshin.talents('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                    tmpChar['constellations'] = genshin.constellations('Traveler (Electro)', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                                    tmp = new CharacterFRModel(tmpChar)
                                    tmp.save((err, docs) => {
                                        if(err) console.log('Character save error : ' + err)
                                    })
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
                                let tmp = new CharacterFRModel(tmpChar)
                                tmp.save((err, docs) => {
                                    if(err) console.log('Character save error : ' + err)
                                })
                            }
                        }
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