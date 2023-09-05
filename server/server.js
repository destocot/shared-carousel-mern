require('dotenv').config();
const express = require('express');
const router = require('./routes/route.js');
const database = require('./database/index.js');

const app = express();
app.use(express.json());

app.use('/api/images', router);

const port = process.env.PORT || 5001;

database
  .then(() => {
    console.log('Database connected...');
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch(() => console.log('Error connecting to database...'));