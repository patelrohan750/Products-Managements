const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
app.use(express.urlencoded({ extended: false }));
const productRouter = require('./routers/product.router');
const registerRouter = require('./routers/register.router');
const loginRouter = require('./routers/login.router');
require('./db/conn');
const Product = require('./models/product.model');
const middleware = require('./middleware/requriedLogin');
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');

app.use(express.static(staticPath));
app.use(express.json());
app.use(productRouter);
app.use(registerRouter);
app.use(loginRouter);

app.set('view engine', 'hbs');
app.set('views', templatePath);

app.get('/', (req, res) => {
	res.send('Home page');
});
app.get('/register', (req, res) => {
	res.render('register');
});
app.get('/login', (req, res) => {
	res.render('login');
});
app.get('/products', middleware.requireLogin, (req, res) => {
	Product.find((err, data) => {
		if (!err) {
			res.render('products', {
				productData: data
			});
		}
	});
});

//search filter
app.post('/search/', (req, res) => {
	var name = req.body.prodName;
	var price = req.body.prodPrice;

	if (name && price) {
		var filterparameter = {
			$and: [
				{
					prod_name: name
				},
				{
					prod_price: price
				}
			]
		};
	} else if (name && !price) {
		var filterparameter = {
			prod_name: name
		};
	} else if (!name && price) {
		var filterparameter = {
			prod_price: price
		};
	} else {
		var filterparameter = {};
	}
	console.log(filterparameter);
	var productFilter = Product.find(filterparameter);
	// console.log(productFilter);
	productFilter.exec(function(err, data) {
		if (!err) {
			res.render('products', {
				productData: data
			});
		}
	});
});
app.listen(port, () => {
	console.log(`server running at port:${port}`);
});
