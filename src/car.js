// How many things can I put in this function?
function Car(make, model, year, color, state, previousOwners, currentOwner, passengers) {
  this.year = year;
  this.state = state;
  this.previousOwners = [];
  this.currentOwner = currentOwner;
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

Car.prototype.pickUp = function(newPassenger){
    this.passengers.push(this.passenger);
  }

module.exports=Car;