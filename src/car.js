function Car(make, model, year, color, state, previousOwners, currentOwner){
  this.year = year;
  this.state = state;
  this.previousOwners = previousOwners;
  this.currentOwner = currentOwner;
}

// myCar = new Car("Dodge","Charger", 2015, "Red");

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;