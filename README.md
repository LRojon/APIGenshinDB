## Table of Contents
- [Informations](#informations)
- [Characters](#characters)
  - [Full data character](#full-data-character)
  - [Low data character](#low-data-character)
- [Weapons](#weapons)
  - [Full data weapon](#full-data-weapon)
  - [Low data weapon](#low-data-weapon)
- [Artifacts](#artifacts)
- [Materials](#materials)
- [Elements](#elements)
- [Builds](#builds)
- [Teams](#teams)
- [Sources](#sources)

# Informations

| Root URL                 | https://genshin.lrojon.fr/ |
|--------------------------|----------------------------|

| Supported language | Code to insert |
| ------------------ | -------------- |
| English            | en-us          |
| French             | fr-fr          |

# Characters

## Full data character

| Routes                                       | Description                                    |
| -------------------------------------------- | ---------------------------------------------- |
| ``/characters/<language>/all``               | __Fetch all characters__                       |
| ``/characters/<language>/name/all``          | __Fetch a list of all character's name__       |
| ``/characters/<language>/name/<name>``       | __Fetch one character by his name__            |
| ``/characters/<language>/element/<element>`` | __Fetch all characters who have this element__ |

<details>
    <summary>Response format</summary>

```js
{
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
    insertDate: Date
}
```
</details>

## Low data character

| Routes                             | Description                      |
| ---------------------------------- | -------------------------------- |
| ``/characters/<language>/low/all`` | __Fetch all low data character__ |

<details>
    <summary>Response format</summary>

```js
{
    name: String,
    element: String,
    material: String,
    rarity: String,
    icon: String
}
```
</details>

# Weapons

## Full data weapon

| Routes                      | Description           |
| --------------------------- | --------------------- |
| ``/weapons/<language>/all`` | __Fetch all weapons__ |

<details>
    <summary>Response format</summary>

```js
{
    name: String,
    description: String,
    weapontype: String,
    rarity: String,
    baseatk: Number,
    substat: String,
    subvalue: String,
    effectname: String,
    effect: String,
    r1: [String],
    r2: [String],
    r3: [String],
    r4: [String],
    r5: [String],
    weaponmaterialtype: String,
    costs: {
        ascend1: [{ name: String, count: Number }],
        ascend2: [{ name: String, count: Number }],
        ascend3: [{ name: String, count: Number }],
        ascend4: [{ name: String, count: Number }],
        ascend5: [{ name: String, count: Number }],
        ascend6: [{ name: String, count: Number }],
    },
    images: {
        image: String,
        icon: String,
        awakenicon: String
    },
    url: { fandom: String },
    stats: [
        {
            ascension: Number,
            attack: Number,
            level: Number,
            specialized: Number
        }
    ],
    insertDate: Date
}
```
</details>

## Low data weapon

| Routes                         | Description                   |
| ------------------------------ | ----------------------------- |
| ``weapons/<language>/low/all`` | __Fetch all low data weapon__ |

<details>
    <summary>Response format</summary>

```js
{
    name: String,
    material: String,
    rarity: String,
    icon: String
}
```
</details>

# Artifacts

| Routes                       | Description             |
| ---------------------------- | ----------------------- |
| ``/artifacts/<language>/all`` | __Fetch all artifacts__ |

<details>
    <summary>Response format</summary>

```js
{
    name : String,
    rarity: [String],
    1pc: String?,
    2pc: String?,
    4pc: String?,
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
}
```
</details>

# Materials

| Routes                         | Description                             |
| ------------------------------ | --------------------------------------- |
| ``/materials/<language>/all``   | __Fetch all materials__                 |
| ``/materials/<language>/daily`` | __Fecth all materials available today__ |

<details>
    <summary>Response format</summary>

```js
{
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
    insertDate: Date
}
```
</details>

# Elements

| Routes                      | Description           |
| --------------------------- | --------------------- |
| ``/elements/<language>/all`` | __Fetch all element__ |

<details>
    <summary>Response format</summary>

```js
{
    archon: String,
    color: String,
    emoji: String,
    name: String,
    region: String,
    theme: String,
    type: String,
    url: String,
    insertDate: Date
}
```
</details>

# Builds

| Routes                                | Description                                      |
| ------------------------------------- | ------------------------------------------------ |
| ``/builds/<language>/all``             | __Fetch all character's build__                  |
| ``/builds/<language>/multiple?params`` | __Fetch all build that match with params__       |
| ``/builds/<language>/one?params``      | __Fetch the first nuild that match with params__ |

| Parameter | Type         | Description                                  |
| --------- | ------------ | -------------------------------------------- |
| character | ___String___ | Character name                               |
| role      | ___String___ | Character's role among DPS, Sub DPS, Support |
| weapon    | ___String___ | Potential weapon in build                    |
| artifact  | ___String___ | Potential artifact set name                  |

<details>
    <summary>Response format</summary>

```js
{
    characterName: String,
    role: String,
    weapons: [
        {
            name: String,
            priority: Number,
        }
    ],
    artifacts: {
        mainStats: {
            sands: [String],
            goblet: [String],
            circlet: [String],
        },
        subStats: [
            {
                stat: String,
                priority: Number
            }
        ],
        sets: [
            {
                priority: Number,
                bonus: [
                    {
                        set: String,
                        pieces: Number
                    }
                ]
            }
        ]
    },
    talent: {
        normal: Number,
        skill: Number,
        burst: Number
    }
}
```
</details>

# Teams

| Routes                               | Description                                      |
| ------------------------------------ | ------------------------------------------------ |
| ``/teams/<language>/all``             | __Fetch all character's build__                  |
| ``/teams/<language>/multiple?params`` | __Fetch all build that match with params__       |
| ``/teams/<language>/one?params``      | __Fetch the first nuild that match with params__ |

| Parameter | Type         | Description                                                  |
| --------- | ------------ | ------------------------------------------------------------ |
| character | ___String___ | Character's name in team                                     |
| element   | ___String___ | Element in team among Anemo, Cryo, Electro, Geo, Hydro, Pyro |

<details>
    <summary>Response format</summary>

```js
{
    characters: [
        {
            character: String,
            element: String,
            role: String
        }
    ]
}
```
</details>

# Sources

__This API formats data that I did not produce.<br>
If you want to recover data please first look at the sources I have used.__<br>
<br>
Data of Character, Weapon, Artifacts, Materials and Elements: [genshin-db](https://github.com/theBowja/genshin-db)<br>
Data of character's Build: [The Genshin Helper Team](https://docs.google.com/spreadsheets/d/1gNxZ2xab1J6o1TuNVWMeLOZ7TPOqrsf3SshP5DLvKzI/htmlview#)<br>
Data of Team composition: [game8](https://game8.co/games/Genshin-Impact/archives/301819)
