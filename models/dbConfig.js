const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://127.0.0.1:27017/APIGenshinDB",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(!err) console.log("Connected succesfully")
        else console.log("Connection error : " + err)
    }
)