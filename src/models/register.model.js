const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		cpassword: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);
const Register = new mongoose.model('Registers', RegisterSchema);
module.exports = Register;
