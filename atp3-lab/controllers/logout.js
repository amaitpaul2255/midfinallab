var express = require('express');
var router = express.Router();

router.get('/',function(request, response){
    request.session.username = "";
    response.redirect('/login');
});

module.exports = router;