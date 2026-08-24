const express = require('express');
const router = express.Router();

router.post('/upload', (req,res)=>{
 res.json({
  success:true,
  message:'Upload endpoint ready',
  supported:['mp3','wav','m4a','aac','flac']
 });
});

router.post('/stream-import',(req,res)=>{
 res.json({
  success:true,
  message:'Streaming import processor ready',
  sources:['youtube','soundcloud','mixcloud','audiomack','boomplay']
 });
});

module.exports = router;
