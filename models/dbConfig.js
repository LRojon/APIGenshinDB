const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://lrojon:580B12baa2*@mongodb-lrojon.alwaysdata.net/lrojon_genshin",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(!err) console.log("Connected succesfully")
        else console.log("Connection error : " + err)
    }
)
