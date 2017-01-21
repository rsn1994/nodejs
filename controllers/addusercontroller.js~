'use strict';

var addModl = require('../models/loginmodel.js'); // include our new model
var fs = require('fs');
//this is something similar to a constructor.

function addUserController()

{

}

//we create a new function  addUsers

addUserController.prototype.addUsers = function(request,reply)

           {
	var obj = JSON.parse(fs.readFileSync('json', 'utf8'));
                  reply(obj);
console.log(obj);
                   var  addModlObj =  new addModl();  // our model object

                   var result  =  addModlObj.saveData(obj); // call the model function

                  

           }

module.exports = addUserController;
