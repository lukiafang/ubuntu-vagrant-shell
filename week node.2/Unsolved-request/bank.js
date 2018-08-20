var fs = require("fs");

fs.readFile("bank.txt", "utf8", function(error,data){
    if (error){
        return console.log(error);
    };

   var dataArr = data.split(",")


  //  var sum = [].reduce((a, b) => a + b, 0);
//console.log(sum);

var numbers = [dataArr] 
var sum = 0;
const add = (a, b) =>
  a + b
console.log(add)
});
