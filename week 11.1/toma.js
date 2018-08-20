function DigitalPal(hungry, sleepy, bored,age,feed,status,sleepy,play,increaseAge,){
    this.hungry= hungry;
    this.sleepy= sleepy;
    this.bored=bored;
    this.age=age;
    this.feed= function(){
        if(this.hungry===true){
            console.log("That was yummy!")
            this.hungry=false;
            this.sleepy=true;
        };if(this.hungry===false){
            console.log("No thanks! I'm full")
        };
        
    };
    this.status = function(){
        console.log(this.hungry, this.sleepy, this.bored, this.age)
    };
    this.sleepy= function(){
        if(this.sleepy=== true){
            console.log("Zzzzzzzzz");
            sleepy=false;
            increaseAge();
        };
        if(this.sleepy===false){
            console.log("No way! I'm not tired")
        };
    };
    this.play=function(){
        if(this.bored===true){
            console.log("Yay! Let's play!");
            this.hungry=true;
        };

    };
    this.increaseAge=function(){
        console.log("Happy Birthday to me! I am "+age+"old!")
    };

    

};
var smokey = new DigitalPal(false,false,true,0);
smokey.feed();
smokey.sleepy();
smokey.play();
smokey.status();