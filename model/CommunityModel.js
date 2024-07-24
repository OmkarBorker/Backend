const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Channel sub-schema
const channelSchema = new Schema({
    channelId: { type: Schema.Types.ObjectId},
    channelName: String
});

// Define the Community schema
const communitySchema = new Schema({
    communityName: String,
    channels: [channelSchema]
});

// Create the Community model
const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
