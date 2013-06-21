
/*
 * GET category page.
*/



exports.serve = function (req, res) {

	var http = require('http');

	res.render('category', {
		title:'Fossil Smooth - Dashboard',
		view: '1'
	});
}

exports.post = function (req, res) {

    var data = JSON.stringify(req.body, null, '\t');

	fs = require('fs');

	fs.writeFile('category_config.js', data, function (err) {

		if (err) return console.log(err);

		console.log('File Saved.');

	});


	// var mkdirp = require('mkdirp'),
	// 	fs = require('fs'),
	// 	getDirName = require('/public/js/configSave').dirname;

	// 	function writeFile (path, contents, cb) {
			
	// 		mkdirp(getDirName(path), function (err) {

	// 		if (err){
	// 			return cb(err);
	// 		}

	// 		fs.writeFile(path, contents, cb);

	// 	});
	// }


    var myResponse = 'File Saved.'; // Received JSON - need reply with JSON

    res.setHeader('Content-Type', 'text/html');
    res.write(JSON.stringify(data));
    res.end();

}
	


