const express = require('express')
const router = express.Router()

const lang = "[en-us, fr-fr]"

router.get('/', (req, res) => {
    res.send({
        routes: [
            "/characters",
            "/weapons",
            "/artifacts",
            "/materials",
            "/elements",
            "/builds",
            "/teams"
        ]
    })
})
router.get('/characters', (req, res) => {
    res.send({
        all: "/" + lang + "/all"
    })
})
router.get('/weapons', (req, res) => {
    res.send({
        all: "/" + lang + "/all"
    })
})
router.get('/artifacts', (req, res) => {
    res.send({
        all: "/" + lang + "/all"
    })
})
router.get('/materials', (req, res) => {
    res.send({
        all: "/" + lang + "/all",
        daily: "/" + lang + "/daily"
    })
})
router.get('/elements', (req, res) => {
    res.send({
        all: "/" + lang + "/all"
    })
})
router.get('/builds', (req, res) => {
    res.send({
        all: "/" + lang + "/all",
        multiple: {
            url: "/" + lang + "/multiple",
            description: "Fetch all build that match with params.",
            params: {
                "character" : "Character name : String",
                "role" : "A role among DPS, Sub DPS, Support : String",
                "weapon" : "Weapon name : String",
                "artifact": "Artifact set name : String"
            }
        },
        one: {
            url: "/" + lang + "/one",
            description: "Fetch the first build that match with params.",
            params: {
                "character" : "Character name : String",
                "role" : "A role among DPS, Sub DPS, Support : String",
                "weapon" : "Weapon name : String",
                "artifact": "Artifact set name : String"
            }
        }
    })
})
router.get('/teams', (req, res) => {
    res.send({
        all: "/" + lang + "/all",
        multiple: {
            url: "/" + lang + "/multiple",
            description: "Fetch all team that match with params.",
            params: {
                "character" : "Character name in team : String",
                "element" : "Element in team among Anemo, Cryo, Electro, Geo, Hydro, Pyro : String"
            }
        },
        one: {
            url: "/" + lang + "/one",
            description: "Fetch the first team that match with params.",
            params: {
                "character" : "Character name in team : String",
                "element" : "Element in team among Anemo, Cryo, Electro, Geo, Hydro, Pyro : String"
            }
        }
    })
})

module.exports = router