const mongoose = require("mongoose"); //bridge or connect that we are going to do for node/express to mongodb
const dotenv = require("dotenv");// it is used to load env variables

dotenv.config(); // it will load the env variable

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb is successfully connected");
    } catch(error){
        console.log("unable to connect to database");
    }
}

module.exports = connectDB;