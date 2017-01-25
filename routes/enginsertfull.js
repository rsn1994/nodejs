const db            = require('../database.js'); // include the database file and get the db object
var fs = require("fs");
//connect. (actually can also connect when we call a query )

exports.register = function (server,options,next)

{

      server.route([{

           method: 'GET',// the method
           path: '/eng/insertfull/{time}',

          handler: function (request, reply) {

 console.log(encodeURIComponent(request.params.time));
// Get content from file
var file=encodeURIComponent(request.params.time);
var myDate=file;
myDate=myDate.split("_");
var yDate=myDate[0];
var ytime=myDate[1];
yDate=yDate.split("-");
var newDate=yDate[2]+"-"+yDate[1]+"-"+yDate[0];
  var udate=new Date(newDate);
//var path='/data/'+file+'.json';
 var contents = fs.readFileSync(file+'.json');
// Define to JSON type
 var jsonContent = JSON.parse(contents);

db.connection.query('CREATE TRIGGER insert_trigg BEFORE INSERT ON engfull FOR EACH ROW SET new.totsa = new.oc+new.bc+new.bcm+new.mbc+new.sc+new.sca+new.st');
db.connection.query('CREATE TRIGGER insert_trigge BEFORE UPDATE ON eng FOR EACH ROW SET new.totsa = new.oc+new.bc+new.bcm+new.mbc+new.sc+new.sca+new.st');
db.connection.query('CREATE TRIGGER insert_trig BEFORE INSERT ON eng FOR EACH ROW SET new.totsa = new.oc+new.bc+new.bcm+new.mbc+new.sc+new.sca+new.st');
db.connection.query('SELECT * FROM eng',function(err, row,   fields) {
  if (err) throw err;
if(row.length>0)
{
for (var x=0;x<jsonContent.length;x++) {
var post = jsonContent[x];
post.times=ytime;
post.idate=udate;
db.connection.query('UPDATE eng SET ? WHERE colCode = ?',[post,post.colCode], function(err, rows) {
if(err) throw new Error(err)}) ;
}
}
else
for (var x=0;x<jsonContent.length;x++) {
var post = jsonContent[x];
post.times=ytime;
post.idate=udate;
{
db.connection.query('INSERT INTO eng set?',post,function(err, rows) {
if(err) throw new Error(err)
}); 
}
}
});

for (var x=0;x<jsonContent.length;x++) {
var post = jsonContent[x];
post.times=ytime;
post.idate=udate;
 
db.connection.query(

                       'INSERT INTO engfull set?',post,

                       function(err, rows) {

                         if(err) {

                           throw new Error(err)

                         }

                       }

                     ) 

}
  

              
 

           
  reply("inserted");
  



           }

       }]);

    next();

}

exports.register.attributes = {

   name    :'user-enginsertfull',

   version : '0.0.1'

};
