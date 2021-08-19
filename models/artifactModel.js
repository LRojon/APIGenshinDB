const mongoose = require('mongoose')
const Schema = mongoose.Schema

let schema = new Schema({
    name : String,
    rarity: [String],
    '1pc': {type: String, default: ''},
    '2pc': {type: String, default: ''},
    '4pc': {type: String, default: ''},
    flower: {
        name: String,
        relictype: String,
        description: String,
    },
    plume: {
        name: String,
        relictype: String,
        description: String,
    },
    sands: {
        name: String,
        relictype: String,
        description: String,
    },
    goblet: {
        name: String,
        relictype: String,
        description: String,
    },
    circlet: {
        name: String,
        relictype: String,
        description: String,
    },
    images: {
        flower: String,
        plume: String,
        sands: String,
        goblet: String,
        circlet: String
    },
    url: {fandom: String},
    insertDate: { type: Date, default: Date.now() }
})

const ArtifactENModel = mongoose.model('artifact', schema, 'artifactsEN')
const ArtifactFRModel = mongoose.model('artifact', schema, 'artifactsFR')

module.exports = { ArtifactENModel, ArtifactFRModel }