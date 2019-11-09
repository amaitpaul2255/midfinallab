var express = require('express');
var adminModel = require('../modules/admin-models');
var router = express.Router();

router.get('/', function(request, response){
    var data={
        username: request.session.username
    }
    response.render('admin/index', {user:data});
});

router.get('*', function(request, response, next){
    if(request.session.username != ""){
		next();
	}else{
		response.redirect('/logout');
	}
});

router.get('/addproduct',function(request, response){
    response.render('admin/addproduct');
});

router.get('/removecustomer',function(request, response){
    adminModel.getAll(function(results){
        console.log(results);
        response.render('admin/removecustomer', {users:results});
    });
});

router.get('/removecustomer/:custid', function(request, response){

	adminModel.delete(request.params.custid, function(status){	
		if(status){
			response.redirect("/admin/removecustomer");
		}else{
				
		}
	});
});

router.post('/addproduct',function(request, response){
    var product={
        category: request.body.category,
        subcategory: request.body.subcategory,
        name: request.body.pname,
        price: request.body.price,
        review: request.body.review
    }
    adminModel.insert(product, function(status){
        if(status)
        {
            response.redirect('/admin');
        }
    });
});



module.exports = router;