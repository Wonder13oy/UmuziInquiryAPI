const mongoose = require('mongoose');

//PROSPECT SCHEMA
const ProspectSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	surname: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	inquiry: {
		type: String,
		default: 'Recruit',
	},
	assistedBy: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model('Prospects', ProspectSchema);
