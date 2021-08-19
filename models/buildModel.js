const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    characterName: String,
    role: String,
    weapons: [{
        name: String,
        priority: Number,
    }],
    artifacts: {
        mainStats: {
            sands: [String],
            goblet: [String],
            circlet: [String],
        },
        subStats: [{
            stat: String,
            priority: Number
        }],
        sets: [
            {
                priority: Number,
                bonus: [{
                    set: String,
                    pieces: Number
                }]
            }
        ]
    },
    talent: {
        normal: Number,
        skill: Number,
        burst: Number
    }
})

const BuildENModel = mongoose.model('build', schema, 'buildsEN')
const BuildFRModel = mongoose.model('build', schema, 'buildsFR')

module.exports = { BuildENModel, BuildFRModel }