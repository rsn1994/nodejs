'use strict';

const db            = require('../database.js'); // include the database file and get the db object

const Joi           =  require('joi');//include the joi module for validation

//this is something similar to a constructor.

function addUserModel()

{

}

//we create a new function  saveData

addUserModel.prototype.saveData = function(palyloadData)

           {
                   
                   var post = {sid:palyloadData.sid,fname:palyloadData.fname,lname:palyloadData.lname,address:palyloadData.address,city:palyloadData.city,dob:palyloadData.dob,sex:palyloadData.sex,course:palyloadData.course};
                   db.connection.query(

                       'INSERT INTO info set?',post,

                       function(err, rows) {

                         if(err) {

                           throw new Error(err)

                         }

                       }

                     )                

           }

module.exports = addUserModel;
