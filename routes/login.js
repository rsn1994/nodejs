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
            email: Joi.string().email().required(), //ensures to be a valid email address and mandatory filled 
            password: Joi.string().required() //ensures to be mandatory filled
        }
    },
              
           },

            handler: function (request, reply) {
	 function createToken(email) {
 
  
  return jwt.sign({email:email}, secret, { algorithm: 'HS256', expiresIn: "1h" } );
}

	 db.connection.query('SELECT * FROM login WHERE email = ? ',[request.payload.email], function(err, rows,   fields) {
  if (err) throw err;
 if (rows.length <= 0){
                  reply({success: false, message: 'no such user',code : 400});
              } else if(bcrypt.compareSync(request.payload.password,rows[0].password)){
			//reply({status:"valid"});
	if(!rows[0].active) 
{ reply({success: false, message: 'verify e-mail first',status :'not active',code : 401});	
}
else{				  
		let email = rows[0].email;
                  reply({success:true, message: 'login success',token : createToken(email),
                           user : email }).code(200);
}

}
else 
 reply({success: false, message: 'incorrect password',code : 402});
 
  
});
    }
   }]);

   next();

};

exports.register.attributes = {

   name    :'login-route',

   version : '0.0.1'

};
