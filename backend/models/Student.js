// we have to create the model schema to our application

const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    course: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("GaneshSchool", StudentSchema)