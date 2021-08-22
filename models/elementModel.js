const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let schema = new Schema({
    archon: String,
    color: String,
    emoji: String,
    name: String,
    region: String,
    theme: String,
    type: String,
    url: String,
    insertDate: { type: Date, default: Date.now() }
})

const ElementENModel = mongoose.model('element', schema, 'elementsEN')
const ElementFRModel = mongoose.model('element', schema, 'elementsFR')

module.exports = { ElementENModel, ElementFRModel }