const mongoose = require("mongoose");
 uri = "mongodb+srv://dhruvbarejadb15:6KCAAdlwLgDEyVkS@svastsysapi.tsnuaa6.mongodb.net/SvastsysApi?retryWrites=true&w=majority&appName=SvastsysApi";
const connectDB = () => {

    console.log("Mongodb Database is connected");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
     
module.exports = connectDB;