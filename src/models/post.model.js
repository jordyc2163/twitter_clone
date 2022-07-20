const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {   
        slug: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String,
            required: true,
            maxLength: 250
        },
        userID: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        postID: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("post", postSchema)