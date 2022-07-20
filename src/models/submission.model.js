const mongoose = require("mongoose")

const submissionSchema = new mongoose.Schema(
    {
        userID: {
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

module.exports = mongoose.model("submission", submissionSchema)