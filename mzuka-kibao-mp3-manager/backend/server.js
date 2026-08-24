const express = require('express');
const cors = require('cors');
const multer = require('multer');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'storage/' });

app.get('/api/status', (req, res) => {
  res.json({
    project: 'Mzuka Kibao MP3 Manager',
    status: 'online'
  });
});

app.post('/api/upload', upload.single('audio'), (req, res) => {
  res.json({
    message: 'Audio uploaded successfully',
    file: req.file
  });
});

app.listen(5000, () => {
  console.log('Mzuka Kibao API running on port 5000');
});
