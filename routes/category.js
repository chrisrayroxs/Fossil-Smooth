
/*
 * GET category page.
*/

exports.category = function(req, res){

	res.render('category', {
    title:'Fossil Smooth - Dashboard',
    view: '1'
  });

};
