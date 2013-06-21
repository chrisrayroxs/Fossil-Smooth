/*
 *
 */

exports.serve = function(req, res) {

	//check if the user's credentials are saved in a cookie
	if (req.cookies.user == undefined || req.cookies.pass == undefined) {
		res.render('page-login', {
			title: 'Fossil Smooth - Login',
			message: 'Please sign in',
			content: 'Login',
			view: 'developer',
			fail: false
		});
	} else {
		//attempt to login automatically
		AM.autoLogin(req.cookies.user, req.cookies.pass, function(o) {
			if (o != null) {
				req.session.user = o;
				res.redirect('/dashboard');
			} else {
				res.render('login', {
					locals: {
						title: 'Hello - Please Login To Your Account'
					}
				});
			}
		});
	}

};

exports.login = function(req, res, auth) {

	if ((req.param('username') === 'user') && (req.param('password') === 'pass')) {
		auth = true;
		res.redirect('/dashboard');
	} else {
		res.render('page-login', {
			title: 'Cat Snap - Login',
			message: 'Please sign in',
			content: 'Login',
			view: 'developer',
			fail: true
		});
	}

}

exports.logout = function(req, res, auth) {

	auth = false;
	res.render('page-login', {
		title: 'Fossil Smooth - Login',
		content: 'Login',
		view: 'developer',
		message: 'You have been logged out.',
		fail: false
	});

}