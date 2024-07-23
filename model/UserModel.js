const { MongoNetworkError } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String, 
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String, 
            required: true
        },
        timestamp: {
            type: Date
        }
    }
)

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;