const mongoose = require("mongoose");
const Course= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    }
});
module.exports=mongoose.model("course",Course)