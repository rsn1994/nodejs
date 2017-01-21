// include our new controller
var Joi = require('joi');
const db = require('../database.js');
const secret = 'secret';
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
exports.register = function(server,options,next)

{


   server.route([{

           method: 'POST',

           path:   '/login',

           config: {

                  tags : ['api'], // let it be here for now. I will explain it later in this blog
		auth: false,
               // We use Joi plugin to validate request
	validate: {
        payload: {
            username: Joi.string().required(), //ensures to be a valid email address and mandatory filled 
            password: Joi.string().required() //ensures to be mandatory filled
        }
    },
              
           },

            handler: function (request, reply) {
	 function createToken(username) {
 
  
  return jwt.sign({ username: username }, secret, { algorithm: 'HS256', expiresIn: "1h" } );
}

	 db.connection.query('SELECT * FROM login WHERE username = ? ',[request.payload.username], function(err, rows,   fields) {
  if (err) throw err;
 if (rows.length <= 0){
                  reply({}).code(200);
              } else if(bcrypt.compareSync(request.payload.password,rows[0].password)){
			//reply({status:"valid"});					  
		let username = rows[0].username;
                  reply({token : createToken(username),
                           user : username }).code(201);
}
 
  
});
    }
   }]);

   next();

};

exports.register.attributes = {

   name    :'login-route',

   version : '0.0.1'

};
