'use strict';

const hapi                  = require('hapi');    // this will include our hapi framework package

const server                = new hapi.Server(); // cretae a server object

const Pack                 =  require('./package'); // simple include our package.json file

const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

//Now establish a connection using our server object.

server.connection({

   host: '192.168.1.142',

   port: 8080, // make sure port is available and open
 routes: {
      cors: true
    }	
   

});

//register the user plugin

server.register(
   [


       {

           register    :   require('./routes/adduser.js'),  // register by providing the path of the adduser.js file

           options     :   {

                                }

       },
	{

           register    :   require('./routes/artsfirstfilled.js'),  // register by providing the path of the adduser.js file

           options     :   {

                                }

       },   
              
	{

           register    :   require('./routes/artsinsertfull.js'),  // register by providing the path of the adduser.js file

           options     :   {

                                }

       }, 
	
	{

           register    :   require('./routes/artsgetbycol.js'),  // register by providing the path of the adduser.js file

           options     :   {

                                }

       },
	{

           register    :   require('./routes/artsgetfilled.js'),  // register by providing the path of the adduser.js file

           options     :   {

                                }

       }, 
	{

           register    :   require('./routes/artsgetvacant.js'),  // register by providing the path of the adduser.js file

           options     :   {

                                }

       },
	{

           register    :   require('./routes/artsgetfilledsession.js'),  // register by providing the path of the adduser.js file

           options     :   {

                                }

       },
	{

           register    :   require('./routes/artsgetbycolstatus.js'),  // register by providing the path of the adduser.js file

           options     :   {

                                }

       },
	{

           register    :   require('./routes/get.js'),  // register by providing the path of the adduser.js file

           options     :   {

                                }

       },  
	     

]

);

//start the server
server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        
    }], (err) => {
        server.start( (err) => {
           if (err) {
                console.log(err);
            } else {
                console.log('Server running at:', server.info.uri);
            }
        });
    });