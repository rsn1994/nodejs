// include our new controller
var Joi = require('joi');
const db = require('../database.js');
exports.register = function(server,options,next)

{


   server.route([{

           method: 'POST',

           path:   '/update',

           config: {

                  tags : ['api'], // let it be here for now. I will explain it later in this blog
		auth:false,
               // We use Joi plugin to validate request
	validate: {
        payload: {
	    username: Joi.string().required(), 
            qualification: Joi.string().required(),
	    address: Joi.string().required(), 
	    school: Joi.string().required(),
            city: Joi.string().required()
        }
    },
              
           },

            handler: function (request, reply) {
        
	var post=request.payload;
	 db.connection.query('INSERT INTO profile set ?',post, function(err, rows,   fields) {
        if (err) throw err;
 	else
reply({status:"success"}).code(202);
 
  
});
    }
   }]);

   next();

};

exports.register.attributes = {

   name    :'update-route',

   version : '0.0.1'

};