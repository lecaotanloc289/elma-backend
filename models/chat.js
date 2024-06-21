const mongoose = require('mongoose')

const chatSchema = mongoose.Schema(
    {
        members: {
            type: Array,
        },
    },
    { timestamps: true },
)
exports.Chat = mongoose.model('Chat', chatSchema)
