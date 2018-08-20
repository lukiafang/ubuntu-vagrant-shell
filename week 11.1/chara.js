

function Lu(Name, Profession, Gender, Age, Strength,HitPoints,Health, PrintStats) {
    this.Name=Name;
    this.Profession = Profession;
    this.Gender= Gender;
    this.Age= Age;
    this.Strength= Strength;
    this.HitPoints = HitPoints;
    this.Health= Health;
    this.PrintStats = function(){
        console.log(this.Name, this.Profession, this.Gender,this.Age, this.Strength, this.HitPoints, this.Health)
    }

   
  };
  var lu1 = new Lu("Lu", "Ninja", "Male",33,100,12,1000,);
  var kun = new Lu("kun","monk","Male",45,100,13,1000,);
  var yun = new Lu("Yun","student","Femal",20,100,10,1000,);

  lu1.PrintStats();
  kun.PrintStats();
  yun.PrintStats();

var attack = function(){
    console.log(lu1.Health - kun.HitPoints);
};
attack();

var levelUp = function(){
    console.log(lu1.Health+ 1, kun.Age+1)
}
levelUp();









