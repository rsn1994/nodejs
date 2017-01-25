// include our new controller
var Joi = require('joi');
const db = require('../database.js');
const secret = 'secret';
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
exports.register = function(server,options,next)

{


   server.route([{

           method: 'GET',

           path:   '/verify/{token}',

           config: {

                  tags : ['api'], // let it be here for now. I will explain it later in this blog
		auth: false,
		/*validate: {
					headers: Joi.object({
				      'authorization': Joi.string().required()
				    }).unknown()
				},*/

              
           },

            handler: function (request, reply) {
	var key=request.params.token;

	 jwt.verify(key,secret, function(err, decoded) {
	if(decoded === undefined)  reply("invalid verification link");
else
{
           db.connection.query('SELECT * FROM login WHERE email = ? ',decoded.email, function(err, rows,   fields) {
  if (err) throw err;
if (rows[0].active === 1) reply({success: true,message :"account is already verified",code :100});
else {
db.connection.query('UPDATE login SET active = 1  WHERE email = ? ',decoded.email, function(err, rows) {
if(err)throw err;
reply({success: true,message :"account successfully verified",code :200});
});
    }
});
}
	
});
}

    
   }]);

   next();

};

exports.register.attributes = {

   name    :'login-verify',

   version : '0.0.1'

};
