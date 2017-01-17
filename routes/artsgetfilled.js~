const db            = require('../database.js'); // include the database file and get the db object

//connect. (actually can also connect when we call a query )

exports.register = function (server,options,next)

{

      server.route([{

           method: 'GET',// the method

           path: '/arts/get/filled/{code}',

          handler: function (request, reply) {
var colcde=encodeURIComponent(request.params.code);
           
    db.connection.query('SELECT * FROM artsfull WHERE colCode=? ORDER BY id ASC',[colcde], function(err, rows,   fields) {
  if (err) throw err;
var idata=rows[0];
var fdata=rows[rows.length-1];
var sts={};
 
sts.colCode=idata.colCode;
sts.colName=idata.colName;
sts.oc=fdata.oc-idata.oc;
sts.bc=fdata.bc-idata.bc;
sts.bcm=fdata.bcm-idata.bcm;
sts.mbc=fdata.mbc-idata.mbc;
sts.sc=fdata.sc-idata.sc;
sts.sca=fdata.sca-idata.sca;
sts.st=fdata.st-idata.st;
sts.totsa=fdata.totsa-idata.totsa;
sts.times=fdata.times;
sts.idate=fdata.idate;

  var out=JSON.stringify(sts);
  reply(out);
  

});

           }

       }]);

    next();

}

exports.register.attributes = {

   name    :'user-artsgetfilled',

   version : '0.0.1'

};
