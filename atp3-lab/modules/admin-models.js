var db = require('./db');

module.exports = {

    insert: function(product, callback){

		var sql ="insert into products values('', ?, ?, ?, ?, ?)";
		db.execute(sql, [product.category,product.subcategory,product.name,product.price,product.review], function(status){
			callback(status);
		});
	},
	getAll: function(callback){
		var sql = "select * from user where type=2";
		
		db.getResults(sql, [], function(results){
			
			if(results){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
}