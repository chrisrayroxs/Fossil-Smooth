
/*
 * GET login page.
 */

exports.index = function(req, res){

	//check if the user's credentials are saved in a cookie
	if (req.cookies.user == undefined || req.cookies.pass == undefined){
		res.render('page-login', 
		{
			title:'Fossil Smooth - Login',
			message: 'Please sign in',
			content: 'Login', 
			view: 'developer',
    		fail: false
		});
	}
	else{
		//attempt to login automatically
		AM.autoLogin(req.cookies.user, req.cookies.pass, function(o){
			if (o != null){
				req.session.user = o;
				res.redirect('/dashboard');
			}
			else{
				res.render('login', {
					locals:{ 
						title: 'Hello - Please Login To Your Account'
					}
				});
			}
		});
	}
	
	


};