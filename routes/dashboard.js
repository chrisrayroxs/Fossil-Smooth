
/*
 * GET dashboard page.
 */

exports.dashboard = function(req, res){

	//var source_code = require('./repo/homepage.html');
	var source_code = "//page source code";

	res.render('dashboard', {
		title:'Fossil Smooth - Dashboard',
		view: '1',
		content: source_code
	});	

};