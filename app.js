'use strict';

const hapi                  = require('hapi');    // this will include our hapi framework package

const server                = new hapi.Server(); // cretae a server object

const Pack                 =  require('./package'); // simple include our package.json file
const jwt = require('jsonwebtoken'); 
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const secret = 'secret';
//Now establish a connection using our server object.

server.connection({

   host: '192.168.1.142',

   port: 8080, // make sure port is available and open
 routes: {
      cors: true
    }	
   

});



//register the user plugin

server.register([

{register    :   require('./routes/login.js')},
{register    :   require('./routes/register.js')},
{register    :   require('./routes/update.js')},
{register    :   require('./routes/artsfirstfilled.js')},
{register    :   require('./routes/artslastfilled.js')}, 
{register    :   require('./routes/artsinsertfull.js')},
{register    :   require('./routes/artsgetbycol.js')},   
{register    :   require('./routes/artsgetfilled.js')},
{register    :   require('./routes/artsgetvacant.js')},
{register    :   require('./routes/artsgetfilledsession.js')},              
{register    :   require('./routes/artsgetbycolstatus.js')},
{register    :   require('./routes/get.js')},              
		
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
server.register(require('hapi-auth-jwt'), (err) => {

  // We're giving the strategy both a name
  // and scheme of 'jwt'
  server.auth.strategy('jwt', 'jwt', {
    key: secret,
    verifyOptions: { algorithms: ['HS256'] }
  });
 server.auth.default('jwt');
});

