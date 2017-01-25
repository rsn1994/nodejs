const db            = require('../database.js'); // include the database file and get the db object

//connect. (actually can also connect when we call a query )

exports.register = function (server,options,next)

{

      server.route([{

           method: 'GET',// the method

           path: '/eng/get/{code}',
	

          handler: function (request, reply) {
var colcde=encodeURIComponent(request.params.code);
           
    db.connection.query('SELECT * FROM engfull WHERE colCode=?',[colcde], function(err, rows,   fields) {
  if (err) throw err;
  var out=JSON.stringify(rows);
  reply(out);
  

});

           }

       }]);

    next();

}

exports.register.attributes = {

   name    :'user-enggetbycolcode',

   version : '0.0.1'

};
