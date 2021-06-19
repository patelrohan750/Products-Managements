const mongoose = require('mongoose');
// const url =
// 	'mongodb+srv://rohan7:GIk3HlUYtpIKxPgC@cluster0.k5jae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
	.connect('mongodb://localhost:27017/ProductsManagements', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('connection successfully');
	})
	.catch((e) => {
		console.log('no connection');
		console.log(e);
	});
