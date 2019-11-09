var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var expSession = require('express-session');
var login = require('./controllers/login');
var registration = require('./controllers/registration');
var customer = require('./controllers/member');
var admin = require('./controllers/admin');
var logout = require('./controllers/logout');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value',saveUninitialized:true,resave:false}));
app.use('/login', login);
app.use('/registration', registration);
app.use('/member', member);
app.use('/admin', admin);
app.use('/logout', logout);

app.listen(3000,function(){
    console.log('server started at 3000...');
})