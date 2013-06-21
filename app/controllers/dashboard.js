
/*
 * GET dashboard page.
 */


exports.serve = function (req, res, auth) {

	if (auth) {
		//dashboard.dashboard;
		res.render('dashboard', {
			title: 'Fossil Smooth - Dashboard',
			view: '1'
		});
	} else res.send('No Authentication');

}