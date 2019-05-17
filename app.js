const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config');

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const prospectRoute = require('./routes/prospects');

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.use('/prospects', prospectRoute);

//DATABASE
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to Database');

});

//LISTEN TO SERVER
app.listen(3000, () => {
    console.log('Server Running...');

});