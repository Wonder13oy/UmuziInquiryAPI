const express = require('express');
const router = express.Router();
const Modal = require('../models/prospectModal');

module.exports = function Handler() {
	this.viewAllHandler = async (req, res) => {
		try {
			const posts = await Modal.find();
			res.json(posts);
		} catch (error) {
			console.log(error);
		}
	};

	this.addOneHandler = async (req, res) => {
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
	};

	this.viewOneHandler = async (req, res) => {
		try {
			const post = await Modal.findById(req.params.Id);
			res.json(post);
		} catch (error) {
			console.log(error);
		}
	};

	this.updateHandler = async (req, res) => {
		try {
			const updatedProspect = await Modal.updateOne(
				{ _id: req.params.Id },
				{ $set: { name: req.body.name, surname: req.body.surname } },
			);

			res.json(updatedProspect);
		} catch (error) {
			console.log(error);
		}
	};
	this.deleteOneHandler = async (req, res) => {
		try {
			const removedProspect = await Modal.deleteOne({ _id: req.params.Id });
			res.json(removedProspect);
		} catch (error) {
			console.log(error);
		}
	};
};
