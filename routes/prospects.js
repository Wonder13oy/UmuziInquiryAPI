const express = require('express');
const router = express.Router();
const Modal = require('../models/prospectModal');

//Get all posts
router.get('/', (req, res) => {
	res.send('We are on prospects');
});

router.get('/viewProspects', async (req, res) => {
	try {
		const posts = await Modal.find();
		res.json(posts);
	} catch (error) {
		console.log(error);
	}
});

//Adding a post
router.post('/addNewProspect', async (req, res) => {
	const post = new Modal({
		name: req.body.name,
		surname: req.body.surname,
		age: req.body.age,
		date: req.body.date,
		inquiry: req.body.inquiry,
		assistedBy: req.body.assistedBy,
	});

	try {
		const savedModal = await post.save();
		res.json(savedModal);
	} catch (error) {
		console.log(error);
	}
});

//Get a specific post
router.get('/viewProspect::Id', async (req, res) => {
	try {
		const post = await Modal.findById(req.params.Id);
		res.json(post);
	} catch (error) {
		console.log(error);
	}
});

//Delete specific post
router.delete('/deleteProspect::Id', async (req, res) => {
	try {
		const removedProspect = await Modal.remove({ _id: req.params.Id });
		res.json(removedProspect);
	} catch (error) {
		console.log(error);
	}
});

//Update a post
router.patch('/updateProspect::Id', async (req, res) => {
	try {
		const updatedProspect = await Modal.updateOne(
			{ _id: req.params.Id },
			{ $set: { name: req.body.name, surname: req.body.surname } },
		);

		res.json(updatedProspect);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
