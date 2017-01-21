// include our new controller
var Joi = require('joi');
const db = require('../database.js');
var bcrypt = require('bcrypt');
exports.register = function(server,options,next)

{


   server.route([{

           method: 'POST',

           path:   '/register',

           config: {

                  tags : ['api'], // let it be here for now. I will explain it later in this blog
		auth: false,
               // We use Joi plugin to validate request
	validate: {
        payload: {
	    firstname: Joi.string().required(), //ensures to be a valid email address and mandatory filled 
            lastname: Joi.string().required(),
	    phone: Joi.string().required(), //ensures to be a valid email address and mandatory filled 
            tenth: Joi.number().required(),
	    twelfth: Joi.number().required(),
	    username: Joi.string().required(),
            password: Joi.string().required(), //ensures to be a valid email address and mandatory filled 
            email: Joi.string().email().required() //ensures to be mandatory filled
        }
    },
              
           },

            handler: function (request, reply) {
        // var fal=0;
	//db.connection.query('CREATE TRIGGER instigg BEFORE INSERT ON login FOR EACH ROW SET new.active =?',fal);
	//if (err) throw err;
	var pass=request.payload.password;
	var hash = bcrypt.hashSync(pass, 10);
	request.payload.password=hash;
	var post=request.payload;
	
	 db.connection.query('INSERT INTO login set ?',post, function(err, rows,   fields) {
        if (err) throw err;
 	else
reply({status:"success"}).code(202);
 
  
});
    }
   }]);

   next();

};

exports.register.attributes = {

   name    :'register-route',

   version : '0.0.1'

};
