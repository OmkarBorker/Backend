const express = require('express');
const UserModel = require('../model/UserModel');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        await UserModel.findOneAndUpdate(
            { _id: req.body.userID }, // Filter
            { $set: { preferences: req.body.preferences } }, // Update
            { new: true } // Options: return the updated document
        );
        return res.status(200).json({
            status: "Success",
            message: "Preferences added",
            token: token
        })
    }
    catch (e) {
        return res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

module.exports = router;