const db            = require('../database.js'); // include the database file and get the db object
const Joi = require('joi');
//connect. (actually can also connect when we call a query )

exports.register = function (server,options,next)

{

      server.route([{
	

           method: 'GET',// the method

           path: '/eng/get',
	 config: { 
				tags: ['api'], 
				//auth: false,
				description: 'arts list',
				
        handler: function (request, reply) {

           
    db.connection.query('SELECT * FROM eng', function(err, rows,   fields) {
  if (err) throw err;
  var out=JSON.stringify(rows);
  reply(out);
  

});

           },
	validate: {
					headers: Joi.object({
				      'authorization': Joi.string().required()
				    }).unknown()
				},

}

       }]);

    next();

}

exports.register.attributes = {

   name    :'user-engget',

   version : '0.0.1'

};
