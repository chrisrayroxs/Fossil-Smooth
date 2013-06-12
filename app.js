
/* 
    -/--/- App Configurations -/--/-
*/

//get ready
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , dashboard = require('./routes/dashboard')
  , category = require('./routes/category')
  , about = require('./routes/about')
  , login = require('./routes/login');

//GO!
var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 8080);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon('public/images/ico/fav.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

// Asynchronous Authentication
var auth = express.basicAuth(function(user, pass, callback) {
 var result = (user === 'user' && pass === 'pass');
 callback(null /* error */, result);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});
//create server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/* 
    -/--/- /index -/--/-
*/
app.get('/', auth, routes.index);

/* 
    -/--/- /index POST -/--/-
*/
app.post('/', function(req, res){
    if ((req.param('username') === 'user') && (req.param('password') === 'pass')){
          auth = true;
          res.redirect('/dashboard');
        }
    else{
      res.render('page-login', {
        title:'Cat Box - Login',
        message: 'Please sign in',
        content: 'Login',
        view: 'developer',
        fail: true
  });
    }
});

/* 
    -/--/- /noAuth -/--/-
*/
app.get('/noAuth', function(req, res) {
  res.send('No Authentication');
});

/* 
    -/--/- /logout -/--/-
*/
app.get('/logout', function(req, res) {
  auth = false;
  res.render('page-login', {
    title:'Fossil Smooth - Login', 
    content: 'Login', 
    view: 'developer',
    message: 'You have been logged out.',
    fail: false
  });
});
/* 
    -/--/- /logout POST -/--/-
*/
app.post('/logout', function(req, res){
    if ((req.param('username') === 'user') && (req.param('password') === 'pass')){
          auth = true;
          res.redirect('/dashboard');
        }
    else{
      res.render('page-login', {
        title:'Cat Box - Login',
        message: 'Please sign in',
        content: 'Login',
        view: 'developer',
        fail: true
  });
    }
});

/* 
    -/--/- /dashboard -/--/-
*/
app.get('/dashboard', function(req, res) {
  if(auth){
      //dashboard.dashboard;
    res.render('dashboard', {
      title:'Fossil Smooth - Dashboard',
      view: '1'
    });
  }
  else
    res.send('No Authentication');
});
/* 
    -/--/- /about -/--/-
*/

/* 
    -/--/- /category -/--/-
*/
app.get('/category', category.category);

/* 
    -/--/- /index POST -/--/-
*/
app.post('/category', function(req, res){


    console.log('Request received');

    res.writeHead(200, { 
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*' // implementation of CORS
    });
    req.on('data', function (chunk) {
        console.log('GOT DATA!');
    });

    res.end('{"msg": "OK"}'); // removed the 'callback' stuff
  
  //   var category = req.body.cat_select;
  //   res.render('category', {
  //     title:'Fossil Smooth - Dashboard',
  //     view: '1',

  //     pageName: req.body.cat_select
  // });
});

/* 
    -/--/- /handle ajax push from client -/--/-
*/





