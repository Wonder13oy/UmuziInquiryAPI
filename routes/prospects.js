const express = require('express');
const router = express.Router();
const Modal = require('../models/prospectModal');

//Get all posts
router.get('/viewProspects', (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET requests /prospects/viewProspects',
	});
});

//Adding a post
router.post('/addNewProspect', (req, res, next) => {
	console.log('Adding Prospect');

	// const model = new Modal({
	// 	name: req.body.name,
	// 	surname: req.body.surname,
	// 	age: req.body.age,
	// 	date: new Date(),
	// 	inquiry: req.body.inquiry,
	// 	assistedBy: req.body.assistedBy,
	// });

	const prospect = {
		name: req.body.name,
		surname: req.body.surname,
		age: req.body.age,
		date: req.body.date,
		inquiry: req.body.inquiry,
		assistedBy: req.body.assistedBy,
	};

	const model = new Modal(prospect);

	model
		.save()
		.then(result => {
			console.log(result);
		})
		.catch(err => {
			console.log(err);
		});

	res.status(201).json({
		message: 'Handling POST requests /prospects/addNewProspect',
		newProspect: prospect,
	});
});

//Get a specific post
router.get('/viewProspect::Id', (req, res, next) => {
	const id = req.params.Id;
	if (id === 'special') {
		res.status(200).json({
			message: 'You discovered a special ID',
			id: id,
		});
	} else {
		res.status(200).json({
			message: 'You passed an ID',
		});
	}
});

//Delete specific post
router.delete('/deleteProspect::Id', (req, res, next) => {
	res.status(200).json({
		message: 'Deleted prospect',
	});
});

//Update a post
router.patch('/updateProspect::Id', (req, res, next) => {
	res.status(200).json({
		message: 'Updated info',
	});
});

module.exports = router;
