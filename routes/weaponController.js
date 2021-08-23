const express = require('express')
const router = express.Router()
const genshin = require('genshin-db')

const { WeaponENModel, WeaponFRModel, LDWeaponENModel, LDWeaponFRModel } = require('../models/weaponModel')

router.get('/:lang/low/all', (req, res) => {
    if(req.params.lang == 'en-us') {
        LDWeaponENModel.deleteMany({}).exec()
        WeaponENModel.find({}, (err, docs) => {
            if(err) { console.log(err) }
            else {
                docs.forEach(doc => {
                    let weapon = {
                        name: doc.name,
                        material: doc.costs.ascend1[1].name,
                        rarity: doc.rarity,
                        icon: doc.images.icon
                    }
                    console.log(weapon)
                    let tmp = new LDWeaponENModel(weapon)
                    tmp.save((err, doc) => {
                        if(err) console.log(err)
                    })
                })
                setTimeout(() => {
                    LDWeaponENModel.find({}, (err, docs) => {
                        if(err) console.log(err)
                        else res.send(docs)
                    })
                }, 100);
            }
        })
    }
    else if(req.params.lang == 'fr-fr') {
        LDWeaponFRModel.deleteMany({}).exec()
        WeaponFRModel.find({}, (err, docs) => {
            if(err) { console.log(err) }
            else {
                docs.forEach(doc => {
                    let weapon = {
                        name: doc.name,
                        material: doc.costs.ascend1[1].name,
                        rarity: doc.rarity,
                        icon: doc.images.icon
                    }
                    console.log(weapon)
                    let tmp = new LDWeaponFRModel(weapon)
                    tmp.save((err, doc) => {
                        if(err) console.log(err)
                    })
                })
                setTimeout(() => {
                    LDWeaponFRModel.find({}, (err, docs) => {
                        if(err) console.log(err)
                        else res.send(docs)
                    })
                }, 100);
            }
        })
    }
})

router.get('/:lang/all', (req, res) => {
    if(req.params.lang == 'en-us')
    {
        WeaponENModel.findOne({}, (err, docs) => {
            if(err) console.log('Weapon find error : ' + err)
            if(!docs) {
                let weapons = genshin.weapons('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                weapons.forEach(weapon => {
                    let stats = []
                    let lvlMax = weapon.rarity > 2 ? 90 : 70
                    for(let i = 1; i <= lvlMax; i++)
                    {
                        let tmpStat = weapon.stats(i)
                        stats.push({
                            ascension: tmpStat.ascension,
                            attack: tmpStat.attack,
                            level: i,
                            specialized: tmpStat.specialized
                        })
                        if([20, 40, 50, 60, 70, 80].includes(i)) {
                            tmpStat = weapon.stats(i, '+')
                            stats.push({
                                ascension: tmpStat.ascension,
                                attack: tmpStat.attack,
                                level: i,
                                specialized: tmpStat.specialized
                            })
                        }
                    }
                    weapon.stats = stats
                    let tmp = new WeaponENModel(weapon)
                    tmp.save((err, docs) => {
                        if(err) console.log("Weapon save error : " + err)
                    })
                })
            }
            else {
                if((new Date()).getTime() - docs.insertDate.getTime() > 10000/*86400000*/) {
                    let weapons = genshin.weapons('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    weapons.forEach(weapon => {
                        let tmpWeapon = {...weapon}
                        WeaponENModel.deleteOne({name: tmpWeapon.name}).exec()
                        tmpWeapon['insertDate'] = Date.now()
                        let stats = []
                        let lvlMax = weapon.rarity > 2 ? 90 : 70
                        for(let i = 1; i <= lvlMax; i++)
                        {
                            let tmpStat = tmpWeapon.stats(i)
                            stats.push({
                                ascension: tmpStat.ascension,
                                attack: tmpStat.attack,
                                level: i,
                                specialized: tmpStat.specialized
                            })
                            if([20, 40, 50, 60, 70, 80].includes(i)) {
                                tmpStat = tmpWeapon.stats(i, '+')
                                stats.push({
                                    ascension: tmpStat.ascension,
                                    attack: tmpStat.attack,
                                    level: i,
                                    specialized: tmpStat.specialized
                                })
                            }
                        }
                        tmpWeapon.stats = stats
                        let tmp = new WeaponENModel(tmpWeapon)
                        tmp.save((err, docs) => { 
                            if(err) console.log("Weapon save error : " + err) 
                        })
                    })
                }
            }
        })
        setTimeout(() => {
            WeaponENModel.find((err, docs) => {
                if(err) console.log('Weapon find error : ' + err)
                else res.send(docs)
            })
        }, 100);
    }
    else if (req.params.lang == 'fr-fr')
    {
        WeaponFRModel.findOne({}, (err, docs) => {
            if(err) console.log('Weapon find error : ' + err)
            if(!docs) {
                let weapons = genshin.weapons('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                weapons.forEach(weapon => {
                    let stats = []
                    let lvlMax = weapon.rarity > 2 ? 90 : 70
                    for(let i = 1; i <= lvlMax; i++)
                    {
                        let tmpStat = weapon.stats(i)
                        stats.push({
                            ascension: tmpStat.ascension,
                            attack: tmpStat.attack,
                            level: i,
                            specialized: tmpStat.specialized
                        })
                        if([20, 40, 50, 60, 70, 80].includes(i)) {
                            tmpStat = weapon.stats(i, '+')
                            stats.push({
                                ascension: tmpStat.ascension,
                                attack: tmpStat.attack,
                                level: i,
                                specialized: tmpStat.specialized
                            })
                        }
                    }
                    weapon.stats = stats
                    let tmp = new WeaponFRModel(weapon)
                    tmp.save((err, docs) => {
                        if(err) console.log("Weapon save error : " + err)
                    })
                })
            }
            else {
                if((new Date()).getTime() - docs.insertDate.getTime() > 10000/*86400000*/) {
                    let weapons = genshin.weapons('names', {matchCategories: true, verboseCategories: true, resultLanguage: 'French'})
                    weapons.forEach(weapon => {
                        let tmpWeapon = {...weapon}
                        WeaponFRModel.deleteOne({name: tmpWeapon.name}).exec()
                        tmpWeapon['insertDate'] = Date.now()
                        let stats = []
                        let lvlMax = tmpWeapon.rarity > 2 ? 90 : 70
                        for(let i = 1; i <= lvlMax; i++)
                        {
                            let tmpStat = tmpWeapon.stats(i)
                            stats.push({
                                ascension: tmpStat.ascension,
                                attack: tmpStat.attack,
                                level: i,
                                specialized: tmpStat.specialized
                            })
                            if([20, 40, 50, 60, 70, 80].includes(i)) {
                                tmpStat = tmpWeapon.stats(i, '+')
                                stats.push({
                                    ascension: tmpStat.ascension,
                                    attack: tmpStat.attack,
                                    level: i,
                                    specialized: tmpStat.specialized
                                })
                            }
                        }
                        tmpWeapon.stats = stats
                        let tmp = new WeaponFRModel(tmpWeapon)
                        tmp.save((err, docs) => {
                            if(err) console.log('Weapon save error : ' + err)
                        })
                    })
                }
            }
        })
        setTimeout(() => {
            WeaponFRModel.find((err, docs) => {
                if(err) console.log('Weapon find error : ' + err)
                else res.send(docs)
            })
        }, 100);
    }
})

module.exports = router