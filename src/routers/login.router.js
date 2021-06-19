const express = require('express');
const Register = require('../models/register.model');
const router = express.Router();
const jwt = require('jsonwebtoken');
const localStorage = require('localStorage');
const Product = require('../models/product.model');

router.post('/login', (req, res) => {
	const { email, password } = req.body;
	Register.findOne({ email: email })
		.then((data) => {
			if (!data) {
				return res.status(404).send({ message: 'Invalid Details' });
			}
			if (password === data.password) {
				const token = jwt.sign({ _id: data._id }, 'iamdevloperoftecstubnowiamtraineeasfronteenddeveloper');
				console.log('token is:', token);
				localStorage.setItem('authtoken', token);
				myValue = localStorage.getItem('authtoken');
				console.log(myValue);
				Product.find((err, data) => {
					if (!err) {
						res.render('products', {
							productData: data
						});
					}
				});
			} else {
				res.status(404).send({ message: 'invalid details' });
			}
		})
		.catch((e) => {
			console.log(e);
		});
});

module.exports = router;
