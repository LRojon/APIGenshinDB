const express = require('express')
const router = express.Router()

const { TeamENModel, TeamFRModel } = require('../models/teamModel')

router.get('/init', (req, res) => {
    // Yoimiya's team                                       DONE
    let tmp = new TeamENModel({
        characters: [
            {
                character: "Yoimiya",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Kaedehara Kazuha",
                element: "Anemo",
                role: "Sub DPS"
            },
            {
                character: "Diona",
                element: "Cryo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Ayaka's team                                         DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Kamisato Ayaka",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Klee",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Kaedehara Kazuha",
                element: "Anemo",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Eula's team                                          DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Eula",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Fischl",
                element: "Electro",
                role: "DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Yanfei's team                                        DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Yanfei",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Sucrose",
                element: "Anemo",
                role: "Support"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Rosaria's team                                       DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Rosaria",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Fischl",
                element: "Electro",
                role: "DPS"
            },
            {
                character: "Xinyan",
                element: "Pyro",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Hu Tao's team                                        DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Hu Tao",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Xingqiu",
                element: "Hydro",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Xiao's team                                          DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Xiao",
                element: "Anemo",
                role: "DPS"
            },
            {
                character: "Albedo",
                element: "Geo",
                role: "DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Barbara",
                element: "Hydro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Ganyu's team                                         DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Tartaglia",
                element: "Hydro",
                role: "DPS"
            },
            {
                character: "Kaedehara Kazuha",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Diluc's team                                         DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Diluc",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Xingqiu",
                element: "Hydro",
                role: "Sub DPS"
            },
            {
                character: "Chongyun",
                element: "Cryo",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Klee's team                                          DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Klee",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Mona",
                element: "Hydro",
                role: "Sub DPS"
            },
            {
                character: "Sucrose",
                element: "Anemo",
                role: "Sub DPS"
            },
            {
                character: "Diona",
                element: "Cryo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Tartaglia's team                                     DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Tartaglia",
                element: "Hydro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Albedo",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Keqing's team                                        DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Keqing",
                element: "Electro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Rosaria",
                element: "Cryo",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Razor's team                                         DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Razor",
                element: "Electro",
                role: "DPS"
            },
            {
                character: "Xingqiu",
                element: "Hydro",
                role: "DPS"
            },
            {
                character: "Rosaria",
                element: "Cryo",
                role: "Sub DPS"
            },
            {
                character: "Diona",
                element: "Cryo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Ningguang's team                                     DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Ningguang",
                element: "Geo",
                role: "DPS"
            },
            {
                character: "Albedo",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Traveler (Geo)",
                element: "Geo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Xinyan's team                                        DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Xinyan",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Albedo",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // F2P team                                             DONE
    tmp = new TeamENModel({
        characters: [
            {
                character: "Noelle",
                element: "Geo",
                role: "DPS"
            },
            {
                character: "Traveler (Geo)",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Kaeya",
                element: "Cryo",
                role: "Sub DPS"
            },
            {
                character: "Barbara",
                element: "Hydro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})

    // Team FR


    // Yoimiya's team                                       DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Yoimiya",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Kaedehara Kazuha",
                element: "Anemo",
                role: "Sub DPS"
            },
            {
                character: "Diona",
                element: "Cryo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Ayaka's team                                         DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Kamisato Ayaka",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Klee",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Kaedehara Kazuha",
                element: "Anemo",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Eula's team                                          DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Eula",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Fischl",
                element: "Electro",
                role: "DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Yanfei's team                                        DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Yanfei",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Sucrose",
                element: "Anemo",
                role: "Support"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Rosaria's team                                       DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Rosalia",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Fischl",
                element: "Electro",
                role: "DPS"
            },
            {
                character: "Xinyan",
                element: "Pyro",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Hu Tao's team                                        DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Hu Tao",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Xingqiu",
                element: "Hydro",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Xiao's team                                          DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Xiao",
                element: "Anemo",
                role: "DPS"
            },
            {
                character: "Albedo",
                element: "Geo",
                role: "DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Barbara",
                element: "Hydro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Ganyu's team                                         DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Tartaglia",
                element: "Hydro",
                role: "DPS"
            },
            {
                character: "Kaedehara Kazuha",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Diluc's team                                         DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Diluc",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Xingqiu",
                element: "Hydro",
                role: "Sub DPS"
            },
            {
                character: "Chongyun",
                element: "Cryo",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Klee's team                                          DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Klee",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Mona",
                element: "Hydro",
                role: "Sub DPS"
            },
            {
                character: "Sucrose",
                element: "Anemo",
                role: "Sub DPS"
            },
            {
                character: "Diona",
                element: "Cryo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Tartaglia's team                                     DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Tartaglia",
                element: "Hydro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Albedo",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Keqing's team                                        DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Keqing",
                element: "Electro",
                role: "DPS"
            },
            {
                character: "Ganyu",
                element: "Cryo",
                role: "DPS"
            },
            {
                character: "Rosalia",
                element: "Cryo",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Razor's team                                         DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Razor",
                element: "Electro",
                role: "DPS"
            },
            {
                character: "Xingqiu",
                element: "Hydro",
                role: "DPS"
            },
            {
                character: "Rosalia",
                element: "Cryo",
                role: "Sub DPS"
            },
            {
                character: "Diona",
                element: "Cryo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Ningguang's team                                     DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Ningguang",
                element: "Geo",
                role: "DPS"
            },
            {
                character: "Albedo",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Traveler (Geo)",
                element: "Geo",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // Xinyan's team                                        DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Xinyan",
                element: "Pyro",
                role: "DPS"
            },
            {
                character: "Albedo",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Zhongli",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Bennett",
                element: "Pyro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})
    // F2P team                                             DONE
    tmp = new TeamFRModel({
        characters: [
            {
                character: "Noelle",
                element: "Geo",
                role: "DPS"
            },
            {
                character: "Traveler (Geo)",
                element: "Geo",
                role: "Sub DPS"
            },
            {
                character: "Kaeya",
                element: "Cryo",
                role: "Sub DPS"
            },
            {
                character: "Barbara",
                element: "Hydro",
                role: "Support"
            }
        ]
    })
    tmp.save((err, doc) => {if(err) console.log(err)})

    res.send({message: "Done. Check the console for potential error."})
})

module.exports = router