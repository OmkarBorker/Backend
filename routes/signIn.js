const express = require('express');
const router = express.Router();
const UserModel = require('../model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const SECRET_KEY = "Git-Gud";

router.post('/',async (req, res)=>{
    try {
        const foundRecord = await UserModel.findOne({'email': req.body.email});
    
        if(!foundRecord)
        {
            return res.status(404).json({
                status: "Failed",
                message: "User does not exist"
            })
        }
        else
        {
            var result = await bcrypt.compare(req.body.password, foundRecord.password);
            if(result)
            {
                const originalId = foundRecord._id.toHexString();
                const token = await jwt.sign(originalId, SECRET_KEY);
                return res.status(200).json({
                    status: "Success",
                    message: "SignIp Successful",
                    token: token
                })
            }
            else
            {
                return res.status(404).json({
                    status: "Failed",
                    message: "Invalid Password"
                })
            }
        }
    }
    catch(e){
        return res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

module.exports = router;