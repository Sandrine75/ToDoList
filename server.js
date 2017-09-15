//*****************************************************************
//* Création d’une liste minimaliste
//*****************************************************************

var http = require("http");
var url  = require("url");
var querystring = require("querystring");

var todoList = [
  "rdv chez le médecin", 
  "chercher colis au point relais", 
  "dej pro avec John", 
  "cours de tennis"
];
      
var server = http.createServer(
  function(req, res) {
    var urlQuery  = url.parse(req.url).query;
    var params = querystring.parse(urlQuery);
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    
    if(params.task != undefined) {
      todoList.push(params.task);
    }

    for(var i=0; i<todoList.length; i++) {
      res.write(todoList[i]+"<br>");
    } 
    
    res.end();
  }
);

server.listen(80);