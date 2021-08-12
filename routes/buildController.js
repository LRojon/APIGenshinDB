const express = require('express')
const router = express.Router()

const { BuildENModel, BuildFRModel } = require('../models/buildModel')

router.get('/', (req, res) => {
    // Pyro 4 stars
    // Amber DPS                                                                DONE
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Amber Support                                                            DONE
    (new BuildENModel({
        characterName: 'Amber',
        role: 'Support',
        weapons: [
            {
                name: 'Elegy for the End',
                priority: 1
            },
            {
                name: 'Favonius Warbow',
                priority: 2
            },
            {
                name: 'Sacrificial Bow',
                priority: 3
            },
            {
                name: 'Skyward Harp',
                priority: 4
            },
            {
                name: 'Alley Hunter',
                priority: 5
            },
            {
                name: 'The Stringless',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["Energy Recharge", "ATK%"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Energy Recharge",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "Crit DMG",
                    priority: 3
                },
                {
                    stat: "ATK%",
                    priority: 4
                },
                {
                    stat: "Elemental Mastery",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Noblesse Oblige",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Instructor",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "The Exile",
                            pieces: 2
                        },
                        {
                            set: "Emblem of Severed Fate",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Emblem of Severed Fate",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 2, 
                burst: 1
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Xiangling DPS                                                            DONE
    (new BuildENModel({
        characterName: 'Xiangling',
        role: 'DPS',
        weapons: [
            {
                name: 'Primordial Jade-Winged Spear',
                priority: 1
            },
            {
                name: 'Crescent Pike',
                priority: 2
            },
            {
                name: 'Vortex Vanquisher',
                priority: 3
            },
            {
                name: 'Staff of Homa',
                priority: 4
            },
            {
                name: 'Dragonspine Spear',
                priority: 5
            },
            {
                name: 'Blackcliff Pole',
                priority: 6
            }
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Physical DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit Rate",
                    priority: 1
                },
                {
                    stat: "Crit DMG",
                    priority: 2
                },
                {
                    stat: "ATK%",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "Elemental Mastery",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 2
                        },
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Gladiator's Finale",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 5,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 2
                        },
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Xiangling Sub DPS                                                        DONE
    (new BuildENModel({
        characterName: 'Amber',
        role: 'Sub DPS',
        weapons: [
            {
                name: 'Staff of Homa',
                priority: 1
            },
            {
                name: 'Primordial Jade-Winged Spear',
                priority: 2
            },
            {
                name: 'Vortex Vanquisher',
                priority: 3
            },
            {
                name: 'Skyward Spine',
                priority: 4
            },
            {
                name: 'Dragon\'s Bane',
                priority: 5
            },
            {
                name: 'Deathmatch',
                priority: 6
            },
            {
                name: 'Lithic Spear',
                priority: 7
            },
            {
                name: 'Favonius Lance',
                priority: 7
            },
            {
                name: 'Kitain Cross Spear',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["Energie Recahrge", "ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Energy Recharge",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "Crit DMG",
                    priority: 3
                },
                {
                    stat: "ATK%",
                    priority: 4
                },
                {
                    stat: "Elemental Mastery",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Emblem of Severed Fate",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        },
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        },
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 5,
                    bonus: [
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        },
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 6,
                    bonus: [
                        {
                            set: "Noblesse Oblige",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 2, 
                burst: 1
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Bennett DPS                                                              DONE
    (new BuildENModel({
        characterName: 'Bennett',
        role: 'DPS',
        weapons: [
            {
                name: 'Mistsplitter Reforged',
                priority: 1
            },
            {
                name: 'Primordial Jade Cutter',
                priority: 2
            },
            {
                name: 'Freedom-Sworn',
                priority: 3
            },
            {
                name: 'Iron Sting',
                priority: 4
            },
            {
                name: 'Festering Desire',
                priority: 5
            },
            {
                name: 'The Alley Flash',
                priority: 6
            },
            {
                name: 'Blackcliff Longsword',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "ATK%",
                    priority: 4
                },
                {
                    stat: "Energy Recharge",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 5,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 1, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Bennett Sub DPS                                                          DONE
    (new BuildENModel({
        characterName: 'Bennett',
        role: 'Sub DPS',
        weapons: [
            {
                name: 'Mistsplitter Reforged',
                priority: 1
            },
            {
                name: 'Aquila Favonia',
                priority: 2
            },
            {
                name: 'Skyward Blade',
                priority: 3
            },
            {
                name: 'The Alley Flash',
                priority: 4
            },
            {
                name: 'Festering Desire',
                priority: 5
            },
            {
                name: 'Prototype Rancour',
                priority: 6
            },
            {
                name: 'Favonious Sword',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Energy Recharge"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "ATK%",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "Elemental Mastery",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Noblesse Oblige",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 2, 
                burst: 1
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Bennett Support                                                          DONE
    (new BuildENModel({
        characterName: 'Bennett',
        role: 'Support',
        weapons: [
            {
                name: 'Mistsplitter Reforged',
                priority: 1
            },
            {
                name: 'Aquila Favonia',
                priority: 2
            },
            {
                name: 'Freedom-Sworn',
                priority: 3
            },
            {
                name: 'The Alley Flash',
                priority: 4
            },
            {
                name: 'Prototype Rancour',
                priority: 5
            },
            {
                name: 'Festering Desire',
                priority: 6
            },
            {
                name: 'Favonius Sword',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["Energy Recharge", "HP%"],
                goblet: ["HP%"],
                circlet: ["Healing Bonus", "HP%"]
            },
            subStats: [
                {
                    stat: "Energy Recharge",
                    priority: 1
                },
                {
                    stat: "HP%",
                    priority: 2
                },
                {
                    stat: "HP",
                    priority: 3
                },
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Noblesse Oblige",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "The Exile",
                            pieces: 2
                        },
                        {
                            set: "Scholar",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Tenacity of the Millelith",
                            pieces: 2
                        },
                        {
                            set: "Maiden Beloved",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Instructor",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 2, 
                burst: 1
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Xinyan DPS                                                               DONE
    (new BuildENModel({
        characterName: 'Xinyan',
        role: 'DPS',
        weapons: [
            {
                name: 'Skyward Pride',
                priority: 1
            },
            {
                name: 'The Unforged',
                priority: 2
            },
            {
                name: 'Wolf\'s Gravestone',
                priority: 3
            },
            {
                name: 'Serpent Spine',
                priority: 4
            },
            {
                name: 'Snow-Tombed Starsilver',
                priority: 5
            },
            {
                name: 'Prototype Archaic',
                priority: 6
            },
            {
                name: 'Lithic Blade',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Physical DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "ATK%",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 2
                        },
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 2
                        },
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Retracing Bolide",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Gladiator's Finale",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 5,
                    bonus: [
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Xinyan Support                                                           DONE
    (new BuildENModel({
        characterName: 'Xinyan',
        role: 'Support',
        weapons: [
            {
                name: 'Sacrificial Greatsword',
                priority: 1
            },
            {
                name: 'Prototype Archaic',
                priority: 2
            },
            {
                name: 'Whiteblind',
                priority: 3
            },
            {
                name: 'Skyward Pride',
                priority: 4
            },
            {
                name: 'Favonius Greatsword',
                priority: 5
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["DEF%", "ATK%", "Energy Recharge"],
                goblet: ["Pyhsical DMG", "DEF%"],
                circlet: ["DEF%", "Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "DEF%",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Crit Rate",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "Crit DMG",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Noblesse Oblige",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 4
                        },
                        {
                            set: "Noblesse Oblige",
                            pieces: 4
                        },
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Tenacity of the Millelith",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Defender's Will",
                            pieces: 2
                        },
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 1, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Yanfei DPS                                                               DONE
    (new BuildENModel({
        characterName: 'Yanfei',
        role: 'DPS',
        weapons: [
            {
                name: 'Skyward Atlas',
                priority: 1
            },
            {
                name: 'Memory of Dust',
                priority: 2
            },
            {
                name: 'Lost Prayer to the Sacred Winds',
                priority: 3
            },
            {
                name: 'The Widsith',
                priority: 4
            },
            {
                name: 'Dodoco Tales',
                priority: 5
            },
            {
                name: 'Solar Pearl',
                priority: 6
            },
            {
                name: 'Blackcliff Agate',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "ATK%",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "Elemental Mastery",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Retracing Bolide",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Pyro 5 stars
    // Diluc DPS                                                                DONE
    (new BuildENModel({
        characterName: 'Diluc',
        role: 'DPS',
        weapons: [
            {
                name: 'Wolf\'s Gravestone',
                priority: 1
            },
            {
                name: 'The Unforged',
                priority: 2
            },
            {
                name: 'Serpent Spine',
                priority: 3
            },
            {
                name: 'Song Of Broken Pines',
                priority: 4
            },
            {
                name: 'Blackcliff Slasher',
                priority: 5
            },
            {
                name: 'Rainslasher',
                priority: 6
            },
            {
                name: 'Prototype Archaic',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "ATK%",
                    priority: 3
                },
                {
                    stat: "Elemental Mastery",
                    priority: 4
                },
                {
                    stat: "Energy Recharge",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Gladiator's Finale",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Martial Artist",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 2, 
                burst: 3
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Klee DPS                                                                 DONE
    (new BuildENModel({
        characterName: 'Klee',
        role: 'DPS',
        weapons: [
            {
                name: 'Skyward Atlas',
                priority: 1
            },
            {
                name: 'Memory of Dust',
                priority: 2
            },
            {
                name: 'Lost Prayer to the Sacred Winds',
                priority: 3
            },
            {
                name: 'Dodoco Tales',
                priority: 4
            },
            {
                name: 'Solar Pearl',
                priority: 5
            },
            {
                name: 'The Widsith',
                priority: 6
            },
            {
                name: 'Blackcliff Agate',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "ATK%",
                    priority: 3
                },
                {
                    stat: "Elemental Mastery",
                    priority: 4
                },
                {
                    stat: "Energy Recharge",
                    priority: 5
                },
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Lavawalker's Epiphany",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Hu Tao DPS                                                               DONE
    (new BuildENModel({
        characterName: 'Hu Tao',
        role: 'DPS',
        weapons: [
            {
                name: 'Staff of Homa',
                priority: 1
            },
            {
                name: 'Dragon\'s Bane',
                priority: 2
            },
            {
                name: 'Primordial Jade Winged-Spear',
                priority: 3
            },
            {
                name: 'Deathmatch',
                priority: 4
            },
            {
                name: 'Blackcliff Pole',
                priority: 5
            },
            {
                name: 'Vortex Vanquisher',
                priority: 6
            },
            {
                name: 'Skyward Spine',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["HP%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "HP%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "ATK%",
                    priority: 4
                },
                {
                    stat: "Energy Recharge",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Tenacity of the Millelith",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 2, 
                burst: 3
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Yoimiya ?                                                                WIP
    (new BuildENModel({
        characterName: 'Yoimiya',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})

    // Electro 4 stars
    // Fischl DPS                                                               DONE
    (new BuildENModel({
        characterName: 'Fischl',
        role: 'DPS',
        weapons: [
            {
                name: 'Skyward Harp',
                priority: 1
            },
            {
                name: 'Viridescent Hunt',
                priority: 2
            },
            {
                name: 'Amos\' Bow',
                priority: 3
            },
            {
                name: 'Mitternachts Waltz',
                priority: 4
            },
            {
                name: 'Prototype Crescent',
                priority: 5
            },
            {
                name: 'Rust',
                priority: 6
            },
            {
                name: 'Blackcliff Warbow',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Electro DMG", "Physical DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Energy Recharge",
                    priority: 3
                },
                {
                    stat: "Elemental Mastery",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 2
                        },
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        },
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        },
                        {
                            set: "Pale Flame",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 2, 
                burst: 3
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Fischl Sub DPS                                                           DONE
    (new BuildENModel({
        characterName: 'Fischl',
        role: 'Sub DPS',
        weapons: [
            {
                name: 'Skyward Harp',
                priority: 1
            },
            {
                name: 'Alley Hunter',
                priority: 2
            },
            {
                name: 'Amos Bow',
                priority: 3
            },
            {
                name: 'Elegy for the End',
                priority: 4
            },
            {
                name: 'The Stringless',
                priority: 5
            },
            {
                name: 'Mitternachts Waltz',
                priority: 6
            },
            {
                name: 'Windblume Ode',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Electro DMG"],
                circlet: ["Crit DMG", "Crit Rate"]
            },
            subStats: [
                {
                    stat: "Crit Rate",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Energy Recahrge",
                    priority: 3
                },
                {
                    stat: "Crit DMG",
                    priority: 4
                },
                {
                    stat: "Elemental Mastery",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Thundersoothers",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Gamblers",
                            pieces: 2
                        },
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Gamblers",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 1, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Beidou DPS                                                               DONE
    (new BuildENModel({
        characterName: 'Beidou',
        role: 'DPS',
        weapons: [
            {
                name: 'Wolf\'s Gravestone',
                priority: 1
            },
            {
                name: 'The Unforged',
                priority: 2
            },
            {
                name: 'Song of Broken Pines',
                priority: 3
            },
            {
                name: 'Serpent Spine',
                priority: 4
            },
            {
                name: 'Lithic Blade',
                priority: 5
            },
            {
                name: 'Blackcliff Slasher',
                priority: 6
            },
            {
                name: 'Prototype Archaic',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Electro DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Energy Recharge",
                    priority: 3
                },
                {
                    stat: "Crit Rate",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        },
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        },
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        },
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 2, 
                burst: 1
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Beidou Sub DPS                                                           DONE
    (new BuildENModel({
        characterName: 'Beidou',
        role: 'Sub DPS',
        weapons: [
            {
                name: 'Wolf\'s Gravestone',
                priority: 1
            },
            {
                name: 'Serpent Spine',
                priority: 2
            },
            {
                name: 'The Unforged',
                priority: 3
            },
            {
                name: 'Skyward Pride',
                priority: 4
            },
            {
                name: 'Lithic Blade',
                priority: 5
            },
            {
                name: 'Sacrificial Greatsword',
                priority: 6
            },
            {
                name: 'Blackcliff Slasher',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Energy Recharge"],
                goblet: ["Electro DMG DMG"],
                circlet: ["Crit Rate", "Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Energy Recharge",
                    priority: 3
                },
                {
                    stat: "Crit Rate",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Emblem of Severed Fate",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Emblem of Severed Fate",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Noblesse Oblige",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 2, 
                burst: 1
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Lisa DPS                                                                 DONE
    (new BuildENModel({
        characterName: 'Lisa',
        role: 'DPS',
        weapons: [
            {
                name: 'Skyward Atlas',
                priority: 1
            },
            {
                name: 'Memory of Dust',
                priority: 2
            },
            {
                name: 'Lost Prayer to the Sacred Winds',
                priority: 3
            },
            {
                name: 'The Widsith',
                priority: 4
            },
            {
                name: 'Solar Pearl',
                priority: 5
            },
            {
                name: 'Blackcliff Agate',
                priority: 6
            },
            {
                name: 'Dodoco Tales',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery", "Energy Recharge"],
                goblet: ["Electro DMG"],
                circlet: ["Crit DMG", "Crit Rate"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Energy Recharge",
                    priority: 3
                },
                {
                    stat: "Elemental Mastery",
                    priority: 4
                },
                {
                    stat: "Crit Rate",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Thundersoother",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Gladiator's Finale",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 2,
                skill: 1, 
                burst: 3
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Lisa Sub DPS                                                             DONE
    (new BuildENModel({
        characterName: 'Lisa',
        role: 'Sub DPS',
        weapons: [
            {
                name: 'Skyward Atlas',
                priority: 1
            },
            {
                name: 'The Widsith',
                priority: 2
            },
            {
                name: 'Lost Prayer to the Sacred Winds',
                priority: 3
            },
            {
                name: 'Memory of Dust',
                priority: 4
            },
            {
                name: 'Mappa Mare',
                priority: 5
            },
            {
                name: 'Favonius Codex',
                priority: 6
            }
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Energy Recharge"],
                goblet: ["Electro DMG"],
                circlet: ["Crit DMG", "Crit Rate"]
            },
            subStats: [
                {
                    stat: "Energy Recharge",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "ATK%",
                    priority: 3
                },
                {
                    stat: "Crit DMG",
                    priority: 4
                },
                {
                    stat: "Elemental Mastery",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        },
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Noblesse Oblige",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Thundersoother",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 3,
                skill: 2, 
                burst: 1
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Razor DPS                                                                DONE
    (new BuildENModel({
        characterName: 'Razor',
        role: 'DPS',
        weapons: [
            {
                name: 'Wolf\'s Gravestone',
                priority: 1
            },
            {
                name: 'Song of Broken Pines',
                priority: 2
            },
            {
                name: 'The Unforged',
                priority: 3
            },
            {
                name: 'Serpent Spine',
                priority: 4
            },
            {
                name: 'Lithic Blade',
                priority: 5
            },
            {
                name: 'Prototype Archaic',
                priority: 6
            }
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Physical DMG"],
                circlet: ["Crit DMG", "Crit Rate"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Energy Recharge",
                    priority: 3
                },
                {
                    stat: "Crit Rate",
                    priority: 4
                },
                {
                    stat: "Elemental Mastery",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 2
                        },
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Martial Artist",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 2, 
                burst: 3
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Electro 5 stars
    // Traveler Sub DPS                                                         DONE
    (new BuildENModel({
        characterName: 'Traveler (Electro)',
        role: 'Sub DPS',
        weapons: [
            {
                name: 'Favonius Sword',
                priority: 1
            },
            {
                name: 'Sacrificial Sword',
                priority: 2
            },
            {
                name: 'Skyward Blade',
                priority: 3
            },
            {
                name: 'Festering Desire',
                priority: 4
            },
            {
                name: 'Skyrider Sword',
                priority: 5
            }
        ],
        artifacts: {
            mainStats: {
                sands: ["Energy Recharge"],
                goblet: ["Electro DMG"],
                circlet: ["Crit DMG", "Crit Rate"]
            },
            subStats: [
                {
                    stat: "Energy Recharge",
                    priority: 1
                },
                {
                    stat: "Crit Rate",
                    priority: 2
                },
                {
                    stat: "ATK%",
                    priority: 3
                },
                {
                    stat: "Crit DMG",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Emblem of Severed Fate",
                            pieces: 4
                        }
                    ]
                }
            ],
            talent: {
                normal: 3,
                skill: 2, 
                burst: 1
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Keqing Phys DPS                                                          DONE
    (new BuildENModel({
        characterName: 'Keqing',
        role: 'DPS',
        weapons: [
            {
                name: 'Aquila Favonia',
                priority: 1
            },
            {
                name: 'Primordial Jade Cutter',
                priority: 2
            },
            {
                name: 'Summit Shaper',
                priority: 3
            },
            {
                name: 'Prototype Rancour',
                priority: 4
            },
            {
                name: 'The Flute',
                priority: 5
            },
            {
                name: 'Lion\'s Roar',
                priority: 6
            },
            {
                name: 'Blackcliff Longsword',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Physical DMG"],
                circlet: ["Crit DMG", "Crit Rate"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Crit Rate",
                    priority: 3
                },
                {
                    stat: "ATK",
                    priority: 4
                },
                {
                    stat: "Energy Recharge",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Pale Flame",
                            pieces: 2
                        },
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Bloodstained Chivalry",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Retracing Bolide",
                            pieces: 4
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Keqing Electro DPS                                                       DONE
    (new BuildENModel({
        characterName: 'Keqing',
        role: 'DPS',
        weapons: [
            {
                name: 'Mistsplitter Reforged',
                priority: 1
            },
            {
                name: 'Primordial Jade Cutter',
                priority: 2
            },
            {
                name: 'Summit Shaper',
                priority: 3
            },
            {
                name: 'The Black Sword',
                priority: 4
            },
            {
                name: 'Lion\'s Roar',
                priority: 5
            },
            {
                name: 'Blackcliff Longsword',
                priority: 6
            },
            {
                name: 'The Flute',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Electro DMG"],
                circlet: ["Crit DMG", "Crit Rate"]
            },
            subStats: [
                {
                    stat: "Crit Rate",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Crit DMG",
                    priority: 3
                },
                {
                    stat: "Elemental Mastery",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Thundersoother",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Thundering Fury",
                            pieces: 2
                        },
                        {
                            set: "Noblesse Oblige",
                            pieces: 2
                        }
                    ]
                }
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})

    // Hydro 4 stars
    // Xingqiu Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Barbara DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Barbara Support
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Hydro 5 stars
    // Tartaglia DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Tartaglia Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Mona DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Mona Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Mona Support
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})

    // Cryo 4 stars
    // Diona Support
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Chongyun Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Kaeya Cryo DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Kaeya Phys DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Kaeya Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Rosaria Cryo DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Rosaria Phys DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Rosaria Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Cryo 5 stars
    // Qiqi Support
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Ganyu Melt DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Ganyu Freeze DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Ganyu Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Eula DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Kamisato Ayaka DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})

    // Anemo 4 stars
    // Sucrose EM
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Sayu EM
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Anemo 5 stars
    // Traveler Anemo DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Traveler Phys DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Jean DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Jean Support
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Venti Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Xiao DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Kaegehara Kazuha EM
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})

    // Geo 4 stars
    //Ningguang DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Ningguang Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Noelle DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Noelle Support
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Geo 5 stars
    // Traveler Geo DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Traveler Pyhs DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Zhongli Phys DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Zhongli Support
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
    // Albedo Sub DPS
    (new BuildENModel({
        characterName: 'Amber',
        role: 'DPS',
        weapons: [
            {
                name: 'Amos\' Bow',
                priority: 1
            },
            {
                name: 'Prototype Crescent',
                priority: 2
            },
            {
                name: 'Skyward Harp',
                priority: 3
            },
            {
                name: 'Sharpshooter\'s Oath',
                priority: 4
            },
            {
                name: 'Blackcliff Warbow',
                priority: 5
            },
            {
                name: 'Hamayumi',
                priority: 6
            },
            {
                name: 'Viridescent Hunt',
                priority: 7
            },
        ],
        artifacts: {
            mainStats: {
                sands: ["ATK%", "Elemental Mastery"],
                goblet: ["Pyro DMG"],
                circlet: ["Crit DMG"]
            },
            subStats: [
                {
                    stat: "Crit DMG",
                    priority: 1
                },
                {
                    stat: "ATK%",
                    priority: 2
                },
                {
                    stat: "Elemental Mastery",
                    priority: 3
                },
                {
                    stat: "Energy Recharge",
                    priority: 4
                },
                {
                    stat: "ATK",
                    priority: 5
                }
            ],
            sets: [
                {
                    priority: 1,
                    bonus: [
                        {
                            set: "Wanderer's Troupe",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 2,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 4
                        }
                    ]
                },
                {
                    priority: 3,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Wanderer's Troupe",
                            pieces: 2
                        }
                    ]
                },
                {
                    priority: 4,
                    bonus: [
                        {
                            set: "Crimson Witch of Flames",
                            pieces: 2
                        },
                        {
                            set: "Shimenawa's Reminiscence",
                            pieces: 2
                        }
                    ]
                },
            ],
            talent: {
                normal: 1,
                skill: 3, 
                burst: 2
            }
        }
    })).save((err, docs) => {if(err) console.log("Build error : " + err)})
})

module.exports = router