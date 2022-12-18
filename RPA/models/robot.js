const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const robotSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    attend:String,
    stand:String,

});

const Robot = mongoose.model("Robot",robotSchema);
module.exports = Robot;