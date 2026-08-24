// Anyiko File Uploader Authentication Routes

const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');

router.post('/register', (req, res) => {
  const user = UserModel.create(req.body);
  res.json({success:true, user});
});

router.post('/login', (req, res) => {
  const user = UserModel.findByEmail(req.body.email);

  if (!user) {
    return res.status(401).json({success:false,message:'Invalid credentials'});
  }

  res.json({
    success:true,
    message:'Login successful',
    user:{
      id:user.id,
      email:user.email,
      role:user.role
    }
  });
});

module.exports = router;
