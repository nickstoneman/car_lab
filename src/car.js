// How many things can I put in this function?
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = [];
  // this.state = "on";
}

// myCar = new Car("Dodge","Charger", 2015, "Red");

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = "Blue"
};

Car.prototype.start = function(){
  this.state = "on"
}

Car.prototype.off = function(){
  this.state = "off"
}

Car.prototype.pickUp = function(personPickup) {
  this.passengers.push(personPickup)
//   this.passengers.push(this.passenger)
//   if (car = "on") {
//     this.passengers.push(this.passenger))
// } else if {
//   car = "off"
}


module.exports=Car;