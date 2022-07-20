const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        maxLength: 250
    },
    postID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("text", textSchema)