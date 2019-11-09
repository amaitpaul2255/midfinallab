var db = require('./db');

module.exports = {

    insert: function(user, callback){

		var sql ="insert into user values('', ?, ?, ?, ?, ?)";
		db.execute(sql, [user.name, user.contactNO, user.username,  user.password, user.type], function(status){
			callback(status);
		});
    },
    validate: function(user, callback){
		var sql ="select * from user where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(result){
			if(result){
                //console.log(result[0].type);
				callback(result[0]);
			}
		});	
	}
}