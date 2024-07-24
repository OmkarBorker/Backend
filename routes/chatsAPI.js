const express = require('express');
const router = express.Router();
const  Community  = require('../model/CommunityModel'); // Adjust the path as needed


router.post('/createCommunity', async (req, res) => {
    try {
        await Community.create({
            communityName: req.body.communityName
        });

        return res.status(200).json({
            status: "Success",
            message: "Created Community"
        })
    }
    catch (e) {
        return res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});


router.post('/createChannel', async (req, res) => {
    try {
        await Community.findOneAndUpdate(
            { _id: req.body.communityID }, // Filter
            { $set: { 
                channels: {
                    channelName: req.body.channelName
                }  
             } }, // Update
            { new: true } // Options: return the updated document
        );
        
        return res.status(200).json({
            status: "Success",
            message: "Created Community"
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