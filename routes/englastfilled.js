const db            = require('../database.js'); // include the database file and get the db object

//connect. (actually can also connect when we call a query )

exports.register = function (server,options,next)

{

      server.route([{

           method: 'GET',// the method

           path: '/eng/get/last/{code}',

          handler: function (request, reply) {
var colcde=encodeURIComponent(request.params.code);
           
    db.connection.query('SELECT * FROM engfull WHERE colCode=? ORDER BY id ASC',[colcde], function(err, rows,   fields) {
  if (err) throw err;
var sts = new Array();
var ooc=" seats available";
var obc=" seats available";
var obcm=" seats available";
var ombc=" seats available";
var osc=" seats available";
var osca=" seats available";
var ost=" seats available";
var ototsa=" seats available";
for(var i=0;i<rows.length;i++)
{
if(rows[i].oc==0){
ooc=rows[i].idate+rows[i].times;
break;
}
}
for(var j=0;j<rows.length;j++)
{
if(rows[j].bc==0){
obc=rows[j].idate+rows[j].times;
break;
}}
for(var k=0;k<rows.length;k++)
{
if(rows[k].bcm==0)
{
obcm=rows[k].idate+rows[k].times;
break;
}}
for(var l=0;l<rows.length;l++)
{
if(rows[l].mbc==0)
{
ombc=rows[l].idate+rows[l].times;
break;
}}
for(var m=0;m<rows.length;m++)
{
if(rows[m].sc==0){
osc=rows[m].idate+rows[m].times;
break;
}}
for(var n=0;n<rows.length;n++)
{
if(rows[n].sca==0)
{
osca=rows[n].idate+rows[n].times;
break;
}}
for(var o=0;o<rows.length;o++)
{
if(rows[o].st==0){
ost=rows[o].idate+rows[o].times;
break;
}}
for(var p=0;p<rows.length;p++)
{
if(rows[p].totsa==0){
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

   name    :'user-enggetlast',

   version : '0.0.1'

};
