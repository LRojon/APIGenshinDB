const mongoose = require('mongoose')

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
    description: String,
    element: mongoose.Schema.Types.ObjectId,
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
    weapontype: String
})
const CharacterENModel = mongoose.model('APIGenshinDB', schema, "charactersEN")
const CharacterFRModel = mongoose.model('APIGenshinDB', schema, "charactersFR")