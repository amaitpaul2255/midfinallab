var express = require('express');
var userModel = require('../modules/user-model');
var router = express.Router();

router.get('/', function(request, response){
    response.render('registration/index');
});

router.post('/', function(request, response){
    var user = {
		name: request.body.name,
        contactNO: request.body.cno,
        username: request.body.uname,
        password: request.body.password,
        type: request.body.type
        
	};
	userModel.insert(user, function(status){
		
		if(status){
            response.redirect('/login');
			
		}else{
			//response.redirect('/admin/addemployee');
		}
	});
});

module.exports = router;