// How many things can I put in this function?
function Car(make, model, year, color, state, previousOwners, currentOwner, passengers) {
  this.year = year;
  this.state = state;
  this.previousOwners = [];
  this.currentOwner = currentOwner;
  this.passengers = [];
}

// myCar = new Car("Dodge","Charger", 2015, "Red");

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
  this.currentOwner === "Charlie";
};

Car.prototype.paint = function(newColor){

};


module.exports=Car;