var express         = require('express'),
    app             = express(),
    // mongoose        = require('mongoose'),
    morgan          = require('morgan'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override');

   app.use(express.static(__dirname + '/public'));
   app.use(morgan('dev')); 
   app.use(bodyParser.urlencoded({'extended':'true'}));  
   app.use(bodyParser.json());  
   app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

   app.listen(3000);
   console.log("Server Listening on Port 3000");  