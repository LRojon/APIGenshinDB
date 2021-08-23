const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let schema = new Schema({
    affiliation: String,
    association: String,
    birthday: String,
    birthdaymmdd: String,
    body: String,
    constellation: String,
    cv: {
        chinese: String,
        english: String,
        japanese: String,
        korean: String
    },
    costs: {
        ascend1: [{ name: String, count: Number }],
        ascend2: [{ name: String, count: Number }],
        ascend3: [{ name: String, count: Number }],
        ascend4: [{ name: String, count: Number }],
        ascend5: [{ name: String, count: Number }],
        ascend6: [{ name: String, count: Number }],
    },
    description: String,
    element: Object,
    gender: String,
    images: {
        card: String,
        cover1: String,
        cover2: String,
        'hoyolab-avatar': String,
        icon: String,
        image: String,
        portrait: String,
        sideicon: String,
    },
    name: String,
    rarity: String,
    region: String,
    stats: [
        {
            ascension: Number,
            attack: Number,
            defense: Number,
            hp: Number,
            level: Number,
            specialized: Number
        }
    ],
    substat: String,
    title: String,
    url: {
        fandom: String
    },
    weapontype: String,
    talents: Object,
    constellations: Object,
    insertDate: {type: Date, default: Date.now()}
})
const CharacterENModel = mongoose.model('character', schema, "charactersEN")
const CharacterFRModel = mongoose.model('character', schema, "charactersFR")

let ldSchema = new Schema({
    name: String,
    element: String,
    material: String,
    rarity: String,
    icon: String
})
const LDCharacterENModel = mongoose.model('ldCharacter', ldSchema, "ldCharactersEN")
const LDCharacterFRModel = mongoose.model('ldCharacter', ldSchema, "ldCharactersFR")

module.exports = { CharacterENModel, CharacterFRModel, LDCharacterENModel, LDCharacterFRModel }