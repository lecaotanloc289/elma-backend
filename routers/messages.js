const express = require('express')
const { Message } = require('../models/message')
const router = express.Router()

// Add message
router.post('/', async (req, res) => {
    const { chatId, senderId, text } = req.body
    const message = new Message({
        chatId,
        senderId,
        text,
    })
    try {
        const result = await message.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get messages
router.get('/:chatId', async (req, res) => {
    const { chatId } = req.params
    try {
        const result = await Message.find({ chatId })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router
