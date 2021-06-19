const jwt = require('jsonwebtoken');
module.exports.requireLogin = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization) {
		return res.render('login');
	}
};
