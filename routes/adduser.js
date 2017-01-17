var addContl = require('../controllers/addusercontroller.js'); // include our new controller
var Joi = require('joi');
exports.register = function(server,options,next)

{

   var addContlObj = new addContl(); // create an object for the new controller.

   server.route([{

           method: 'POST',

           path:   '/adduser',

           config: {

                  tags : ['api'], // let it be here for now. I will explain it later in this blog

               // We use Joi plugin to validate request

              
           },

           handler:  addContlObj. addUsers//  see here we removed a lot of codes and simply handed

                                                                     //over that to our new controller function addUsers

   }]);

   next();

};

exports.register.attributes = {

   name    :'adduser-route',

   version : '0.0.1'

};
