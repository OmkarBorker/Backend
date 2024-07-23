const mongoose = require('mongoose');

const chatSchema = new Schema({
    senderID: { type: Schema.Types.ObjectId},
    receiverID: { type: Schema.Types.ObjectId},
    message: String,
    timestamp: { type: Date, default: Date.now }
});
sender
reciever
channelId
message
tim
const Chat = mongoose.model('Chat', chatSchema);
