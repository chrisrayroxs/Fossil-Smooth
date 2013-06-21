// routes

//fetch our routes
var index = require('../app/controllers/index'),
user = require('../app/controllers/user'),
dashboard = require('../app/controllers/dashboard'),
category = require('../app/controllers/category');

module.exports = function (app, auth) {

	//serve root, login, logout
	app.get('/', auth, index.serve);
	app.post('/', auth, index.login);
	app.get('/login', auth, index.login);
	app.get('/logout', index.logout);

	//serve dashboard
	app.get('/dashboard', auth, dashboard.serve);

	//serve category get and post routes
	app.get('/category', category.serve);
	app.post('/category', category.post);

	
}