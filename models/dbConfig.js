const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://usr:pwd@mongodb-lrojon.alwaysdata.net/lrojon_genshin",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(!err) console.log("Connected succesfully")
        else console.log("Connection error : " + err)
    }
)
