
 
    
var cat = {
    raining:false,
     noise:"Meow",
      makeNoise: function(){ 
          if (this.raining===true){
        
    console.log(this.noise)}
}};

var dog = {
    raining:true, 
    noise:"woof",
    makeNoise:function(bark) {
        if (this.raining===true){
        console.log(this.noise)}
    }
}
dog.makeNoise();
cat.raining = true;
cat.makeNoise();

var massHysteria = function(dog, cat) {
    if (dog.raining === true && cat.raining === true) {
      console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
  };
  
  massHysteria(dog, cat);



