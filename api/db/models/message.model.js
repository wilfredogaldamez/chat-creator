
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _chatId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    _leftside: {
        type: Boolean,
        default: false
    },

})

const Message = mongoose.model('Message', MessageSchema);

module.exports = { Message }