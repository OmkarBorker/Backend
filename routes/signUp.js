const express = require('express');
const router = express.Router();
const UserModel = require('../model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const SECRET_KEY = "Git-Gud";

router.post('/',async (req, res)=>{
    try {
        var hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        const userRecord = await UserModel.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            timestamp: new Date()
        });

        const originalId = userRecord._id.toHexString();
        console.log(originalId);
        const token = await jwt.sign(originalId, SECRET_KEY);

        return res.status(200).json({
            status: "Success",
            message: "SignUp Successful",
            token: token
        })
    }
    catch(e){
        return res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

    res.send('ok');
});

module.exports = router;