const mongoose = require('mongoose');
const Product = require('../models/product.model');

//add product
module.exports.addProduct = (req, res) => {
	const { prod_name, prod_dec, prod_price, prod_url } = req.body;
	if (!prod_name || !prod_dec || !prod_price || !prod_url) {
		console.log('All fields are Required');
		return res.status(400).send({
			message: 'All fields are Required'
		});
	}
	const product = new Product({
		prod_name,
		prod_dec,
		prod_price,
		prod_url
	});
	product
		.save()
		.then((data) => {
			res.send({ data });
		})
		.catch((e) => {
			res.status(500).send({ message: 'some error are occured' });
			console.log(e);
		});
};
//Get All product
module.exports.getAllProduct = (req, res) => {
	Product.find()
		.then((data) => {
			res.send({ data });
		})
		.catch((e) => {
			res.status(500).send({ message: 'some error are occured' });
			console.log(e);
		});
};
//get only one product
module.exports.getOneProduct = (req, res) => {
	const id = req.params.id;
	console.log(id);
	Product.findById(id)
		.then((data) => {
			if (!data) {
				return res.status(404).send({ message: 'No Data Found' });
			}
			res.send({ data });
		})
		.catch((e) => {
			res.status(500).send({ message: 'some error are occured' });
			console.log(e);
		});
};
//update product
module.exports.updateProduct = (req, res) => {
	const id = req.params.id;
	const { prod_name, prod_dec, prod_price, prod_url } = req.body;
	if (!prod_name || !prod_dec || !prod_price || !prod_url) {
		console.log('All fields are Required');
		return res.status(400).send({
			message: 'All fields are Required'
		});
	}
	Product.findByIdAndUpdate(
		id,
		{
			prod_name,
			prod_dec,
			prod_price,
			prod_url
		},
		{ new: true }
	)
		.then((data) => {
			if (!data) {
				return res.status(404).send({ message: 'No Data Found' });
			}
			res.send({ data });
		})
		.catch((e) => {
			res.status(500).send({ message: 'some error are occured' });
			console.log(e);
		});
};
//delete product
module.exports.deleteProduct = (req, res) => {
	const id = req.params.id;
	Product.findByIdAndRemove(id)
		.then((data) => {
			if (!data) {
				return res.status(404).send({ message: 'No Data Found' });
			}
			res.send({ data });
		})
		.catch((e) => {
			res.status(500).send({ message: 'some error are occured' });
			console.log(e);
		});
};
