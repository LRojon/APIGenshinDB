const express = require('express')
const router = express.Router()
const genshin = require('genshin-db')

const { ArtifactENModel, ArtifactFRModel } = require('../models/artifactModel')

router.get('/:lang/all', (req, res) => {
    if(req.params.lang == 'en-us') {
        ArtifactENModel.findOne((err, doc) => {
            if(!doc) {
                let artifacts = genshin.artifacts('name', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                artifacts.forEach(artifact => {
                    let tmp = new ArtifactENModel(artifact)
                    tmp.save((err, doc) => {
                        if(err) console.log("Artifact save error : " + doc.name + " => " + err)
                    })
                })
            }
            else {
                if((new Date()).getTime() - doc.insertDate.getTime() > 10000/*86400000*/)
                {
                    let artifacts = genshin.artifacts('name', {matchCategories: true, verboseCategories: true, resultLanguage: 'English'})
                    artifacts.forEach(artifact => {
                        artifact['insertDate'] = Date.now()
                        ArtifactENModel.replaceOne({name: artifact.name}, artifact).exec()
                    })
                }
            }
        })
        setTimeout(() => {
            ArtifactENModel.find((err, docs) => {
                if(err) console.log(err)
                else res.send(docs)
            })
        }, 100);
    }
    else if(req.params.lang == 'fr-fr') {

    }
})

module.exports = router