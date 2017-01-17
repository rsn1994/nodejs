var mysql           = require('mysql');  // include the mysql plugin

//setup the connection

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'swc'
});

//connect. (actually can also connect when we call a query )

connection.connect(function(err) {

   if (err) {

     console.error('error connecting: ' + err.stack);

     return;

   }

   else{

        console.log('mysql started');

   }

});

//export this module , then only we can use this in other files

module.exports = {

 connection: connection

};
