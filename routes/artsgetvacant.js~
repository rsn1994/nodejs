const db            = require('../database.js'); // include the database file and get the db object

//connect. (actually can also connect when we call a query )

exports.register = function (server,options,next)

{

      server.route([{

           method: 'GET',// the method

           path: '/arts/get/vacant/{code}',

          handler: function (request, reply) {
var colcde=encodeURIComponent(request.params.code);
           
    db.connection.query('SELECT * FROM artsfull WHERE colCode=? ORDER BY id ASC',[colcde], function(err, rows,   fields) {
  if (err) throw err;
var idata=rows[0];
var fdata=rows[rows.length-1];

  var out=JSON.stringify(fdata);
  reply(out);
  

});

           }

       }]);

    next();

}

exports.register.attributes = {

   name    :'user-artsgetvacant',

   version : '0.0.1'

};
