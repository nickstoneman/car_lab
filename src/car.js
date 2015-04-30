function Car(make, model, year, color, state, previousOwners){
  this.year = year;
  this.state = state;
  this.previousOwners = previousOwners;
}

// myCar = new Car("Dodge","Charger", 2015, "Red");

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;