const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: String,
    description: String,
    rarity: String,
    category: String,
    materialtype: String,
    dropdomain: String,
    daysofweek: [String],
    source: [String],
    images: {
        redirect: String,
        fandm: String
    },
    url: { fandom: String },
    insertDate: {type: Date, default: Date.now()}
})

const MaterialENModel = mongoose.model('material', schema, 'materialsEN')
const MaterialFRModel = mongoose.model('material', schema, 'materialsFR')

module.exports = { MaterialENModel, MaterialFRModel }