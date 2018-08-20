var p = process.argv;

 var x = p[3];

 var y = p[2];

 if ( x === y) {
     console.log("yeahhhhh")
 } else {
     console.log("crappp")
 }

 var fs = require("fs");

 fs.writeFile("movies.txt","inception",function(err){
     if (err){
         return console.log(err);
     }
     console.log("movies.txt was updated")
 })

 fs.appendFile()