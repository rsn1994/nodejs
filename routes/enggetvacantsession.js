const db            = require('../database.js'); // include the database file and get the db object

//connect. (actually can also connect when we call a query )

exports.register = function (server,options,next)

{

      server.route([{

           method: 'GET',// the method

           path: '/eng/get/filled/{code}/{date}',

          handler: function (request, reply) {
var colcde=encodeURIComponent(request.params.code);
var indate=encodeURIComponent(request.params.date);           
    db.connection.query('SELECT * FROM engfull WHERE colCode=? AND idate=? ORDER BY id ASC',[colcde,indate], function(err, rows,   fields) {
  if (err) throw err;
var sts= new Array();
sts.push({
colCode:rows[0].colCode,
colName:rows[0].colName,
oc:0,
bc:0,
bcm:0,
mbc:0,
sc:0,
sca:0,
st:0,
totsa:0,
times:rows[0].times,
idate:rows[0].idate});


for(var i=0;i<rows.length-1;i++)
{
var idata=rows[i];
var fdata=rows[i+1];
sts.push({
colCode:idata.colCode,
colName:idata.colName,
oc:fdata.oc-idata.oc,
bc:fdata.bc-idata.bc,
bcm:fdata.bcm-idata.bcm,
mbc:fdata.mbc-idata.mbc,
sc:fdata.sc-idata.sc,
sca:fdata.sca-idata.sca,
st:fdata.st-idata.st,
totsa:fdata.totsa-idata.totsa,
times:fdata.times,
idate:fdata.idate});

}

  var out=JSON.stringify(sts);
  reply(out);
  

});

           }

       }]);

    next();

}

exports.register.attributes = {

   name    :'user-enggetfilledbysession',

   version : '0.0.1'

};
