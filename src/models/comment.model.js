const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            maxLength: 250
        },
        userID: {
            type: String,
            required: true
        },
        postID: {
            type: String,
            required: true
        },
        commentID: {
            type: String,
            required: true
        }

    },
    { timestamps: true }
)

module.exports = mongoose.model("comment", commentSchema)