# Table of Contents
- [Characters](#characters)
- [Weapons](#weapons)
- [Artifacts](#artifacts)
- [Materials](#materials)
- [Elements](#elements)
- [Builds](#builds)
- [Teams](#teams)
- [Sources](#sources)

| Root URL                 |
|--------------------------|
|https://genshin.lrojon.fr/|

| Supported language | Code to insert |
| ------------------ | -------------- |
| English            | en-us          |
| French             | fr-fr          |

# Characters

| Routes                                       | Description                                    |
| -------------------------------------------- | ---------------------------------------------- |
| ``/characters/<language>/all``               | __Fetch all characters__                       |
| ``/characters/<language>/name/<name>``       | __Fetch one character by his name__            |
| ``/characters/<language>/element/<element>`` | __Fetch all characters who have this element__ |

# Weapons

| Routes                     | Description           |
| -------------------------- | --------------------- |
| ``/weapons/<language>/all`` | __Fetch all weapons__ |

# Artifacts

| Routes                       | Description             |
| ---------------------------- | ----------------------- |
| ``/artifacts/<language>/all`` | __Fetch all artifacts__ |

# Materials

| Routes                         | Description                             |
| ------------------------------ | --------------------------------------- |
| ``/materials/<language>/all``   | __Fetch all materials__                 |
| ``/materials/<language>/daily`` | __Fecth all materials available today__ |

# Elements

| Routes                      | Description           |
| --------------------------- | --------------------- |
| ``/elements/<language>/all`` | __Fetch all element__ |

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

# Sources

__This API formats data that I did not produce.<br>
If you want to recover data please first look at the sources I have used.__<br>
<br>
Data of Character, Weapon, Artifacts, Materials and Elements: [genshin-db](https://github.com/theBowja/genshin-db)<br>
Data of character's Build: [The Genshin Helper Team](https://docs.google.com/spreadsheets/d/1gNxZ2xab1J6o1TuNVWMeLOZ7TPOqrsf3SshP5DLvKzI/htmlview#)<br>
Data of Team composition: [game8](https://game8.co/games/Genshin-Impact/archives/301819)
