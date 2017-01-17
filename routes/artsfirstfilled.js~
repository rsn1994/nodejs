const db            = require('../database.js'); // include the database file and get the db object

//connect. (actually can also connect when we call a query )

exports.register = function (server,options,next)

{

      server.route([{

           method: 'GET',// the method

           path: '/arts/get/first/{code}',

          handler: function (request, reply) {
var colcde=encodeURIComponent(request.params.code);
           
    db.connection.query('SELECT * FROM artsfull WHERE colCode=? ORDER BY id ASC',[colcde], function(err, rows,   fields) {
  if (err) throw err;
var idata=rows[0];
var initoc=rows[0].oc;
var initbc=rows[0].bc;
var initbcm=rows[0].bcm;
var initmbc=rows[0].mbc;
var initsc=rows[0].sc;
var initsca=rows[0].sca;
var initst=rows[0].st;
var inittotsa=rows[0].totsa;
var sts = new Array();
var ooc="NOT FILLED TILL NOW";
var obc="NOT FILLED TILL NOW";
var obcm="NOT FILLED TILL NOW";
var ombc="NOT FILLED TILL NOW";
var osc="NOT FILLED TILL NOW";
var osca="NOT FILLED TILL NOW";
var ost="NOT FILLED TILL NOW";
var ototsa="NOT FILLED TILL NOW";
for(var i=0;i<rows.length;i++)
{
if(rows[i].oc!=initoc){
ooc=rows[i].idate+rows[i].times;
break;
}
}
for(var j=0;j<rows.length;j++)
{
if(rows[j].bc!=initbc){
obc=rows[j].idate+rows[j].times;
break;
}}
for(var k=0;k<rows.length;k++)
{
if(rows[k].bcm!=initbcm)
{
obcm=rows[k].idate+rows[k].times;
break;
}}
for(var l=0;l<rows.length;l++)
{
if(rows[l].mbc!=initmbc)
{
ombc=rows[l].idate+rows[l].times;
break;
}}
for(var m=0;m<rows.length;m++)
{
if(rows[m].sc!=initsc){
osc=rows[m].idate+rows[m].times;
break;
}}
for(var n=0;n<rows.length;n++)
{
if(rows[n].sca!=initsca)
{
osca=rows[n].idate+rows[n].times;
break;
}}
for(var o=0;o<rows.length;o++)
{
if(rows[o].st!=initst){
ost=rows[o].idate+rows[o].times;
break;
}}
for(var p=0;p<rows.length;p++)
{
if(rows[p].totsa!=inittotsa){
ototsa=rows[p].idate+rows[p].times;
break;
}}

sts.push({
fcolCode:rows[0].colCode,
fcolName:rows[0].colName,
foc:ooc,
fbc:obc,
fbcm:obcm,
fmbc:ombc,
fsc:osc,
fsca:osca,
fst:ost,
ftotsa:ototsa,


});


  var out=JSON.stringify(sts);
  reply(out);
  

});

           }

       }]);

    next();

}

exports.register.attributes = {

   name    :'user-artsgetfirst',

   version : '0.0.1'

};
