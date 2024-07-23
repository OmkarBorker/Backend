const express = require('express');
const UserModel = require('../model/UserModel');
const router = express.Router();

router.post('/', async (req, res) => {
    await UserModel.findOneAndUpdate(
        { _id: req.body.userID }, // Filter
        { $set: { preferences: req.body.preferences } }, // Update
        { new: true } // Options: return the updated document
    );
    res.send('API')
});

module.exports = router;