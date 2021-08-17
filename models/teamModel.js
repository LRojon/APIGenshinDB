const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    characters: [
        {
            character: String,
            element: String,
            role: String
        }
    ]
})
const TeamENModel = mongoose.model('team', schema, 'teamsEN')
const TeamFRModel = mongoose.model('team', schema, 'teamsFR')

module.exports = { TeamENModel, TeamFRModel }