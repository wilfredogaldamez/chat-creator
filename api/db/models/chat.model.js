
const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

})

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = { Chat }