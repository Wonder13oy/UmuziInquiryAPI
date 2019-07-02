const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

//IMPORT ROUTES
const prospectsRoutes = require('./routes/prospects');

//CONNECT TO DATABASE
const uri =
	'mongodb+srv://wandile_nxumalo:<password>@cluster0-hpknm.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(
	'mongodb+srv://wandile_nxumalo:lion13@cluster0-hpknm.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true },
);

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
});

//ROUTES
app.use('/prospects', prospectsRoutes);

//ERROR HANDLING
app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
