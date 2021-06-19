const express = require('express');
const Register = require('../models/register.model');
const router = express.Router();

router.post('/register', (req, res) => {
	const { name, email, password, cpassword } = req.body;
	const register = new Register({
		name: name,
		email: email,
		password: password,
		cpassword: cpassword
	});
	console.log(`name is:${name}`);
	console.log(`email is:${email}`);
	console.log(`password is:${password}`);
	console.log(`cpassword is:${cpassword}`);

	console.log(register);
	register
		.save()
		.then((data) => {
			res.render('login');
		})
		.catch((e) => {
			res.status(500).send({
				message: 'some error are occured'
			});
			console.log(e);
		});
});
module.exports = router;
