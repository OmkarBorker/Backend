const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const chatSchema = new mongoose.Schema({
    senderID: { type: Schema.Types.ObjectId},
    receiverID: { type: Schema.Types.ObjectId},
    message: String,
    timestamp: { type: Date, default: Date.now }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
