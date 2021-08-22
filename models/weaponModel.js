const mongoose = require('mongoose')
const Schema = mongoose.Schema

let schema = new Schema({
    name: String,
    description: String,
    weapontype: String,
    rarity: String,
    baseatk: Number,
    substat: String,
    subvalue: String,
    effectname: String,
    effect: String,
    r1: [String],
    r2: [String],
    r3: [String],
    r4: [String],
    r5: [String],
    weaponmaterialtype: String,
    costs: {
        ascend1: [{ name: String, count: Number }],
        ascend2: [{ name: String, count: Number }],
        ascend3: [{ name: String, count: Number }],
        ascend4: [{ name: String, count: Number }],
        ascend5: [{ name: String, count: Number }],
        ascend6: [{ name: String, count: Number }],
    },
    images: {
        image: String,
        icon: String,
        awakenicon: String
    },
    url: { fandom: String },
    stats: [
        {
            ascension: Number,
            attack: Number,
            level: Number,
            specialized: Number
        }
    ],
    insertDate: {type: Date, default: Date.now()}
})

const WeaponENModel = mongoose.model('WeaponModel', schema, 'weaponsEN')
const WeaponFRModel = mongoose.model('WeaponModel', schema, 'weaponsFR')

module.exports = { WeaponENModel, WeaponFRModel }