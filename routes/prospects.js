const express = require('express');
const router = express.Router();
const Handler = require('../handlers/prospectHandler');
const prospectHandler = new Handler();

//Get all posts
router.get('/', (req, res) => {
	res.send('We are on prospects');
});

router.get('/viewProspects', (req, res) => {
	prospectHandler.viewAllHandler(req, res);
});

//Adding a post
router.post('/addNewProspect', (req, res) => {
	prospectHandler.addOneHandler(req, res);
});

//Get a specific post
router.get('/viewProspect::Id', (req, res) => {
	prospectHandler.viewOneHandler(req, res);
});

//Delete specific post
router.delete('/deleteProspect::Id', (req, res) => {
	prospectHandler.deleteOneHandler(req, res);
});

//Update a post
router.patch('/updateProspect::Id', (req, res) => {
	prospectHandler.updateHandler(req, res);
});

module.exports = router;
