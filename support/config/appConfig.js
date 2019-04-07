/*
File: appConfig.js
App Name: MEAN Boiler
Purpose: Configuration Part for Server and Database
Created By: Hardik Thakor */

'use strict'
module.exports ={
  "db" :{           //Database Configuration
          "port"		: 27017,
          "dbName"	: 'meandemo',
          "authDb"	: 'admin',
          "url"		  : 'mongodb://localhost:27017/meandemo',
          "host"		: 'localhost',
          "user"		: "mean",
          "passkey"	: "$3cRE@t",
        },
  "server": {       //Server Configuration
          "name":"MEAN Boiler Demo",
          "port":4000,
          "considerPort":true
        }
}
