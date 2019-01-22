/* Sets */

function mySet() {
  // the let collection will hold the set
  const collection = [];
  
  // this method will check the presence of an element and return true and false
  this.has = function(value) {
    return (collection.indexOf(value) !== -1);
  }

  // This method will return all the values in the set
  this.value = function() {
    return collection;
  }

  // this method will add an value to the set
  this.add = function(value) {
    if (this.has(value)) {
      return false;
    }
    collection.push(value);
    return true;
  }

  // this method will remove an value from a set
  this.remove = function(value) {
    if (!this.has(value)) {
      return false;
    }
    collection.splice(collection.indexOf(value), 1);
    return true;
  }

  // this method will return the size of collection
  this.size = function() {
    return collection.length;
  }

  // this method will return the union of two sets
  this.union = function(otherSet) {
    const unionSet = new mySet();
    const firstSet = this.value();
    const secondSet = otherSet.value();

    firstSet.forEach(e => unionSet.add(e) );

    secondSet.forEach(e => unionSet.add(e) );

    return unionSet;
  }

  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.value();

    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  }

  // this methid will return the difference of two sets as a new set
  this.difference = function(otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.value();
    let that = this;
    const secondSet = otherSet.value();

    firstSet.forEach(e => {
      if(!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    // secondSet.forEach(e => {
    //   if(!that.has(e)) {
    //     differenceSet.add(e);
    //   }
    // });

    return differenceSet;
  }

  // this method will test if the set is the subset of different det
  this.subset = function(otherSet) {
    const firstSet = this.value();
    return firstSet.every(e => otherSet.has(e) );
  }

}


let myset1 = new mySet();
let myset2 = new mySet();

myset1.add(123);
myset1.add(3652);
myset1.add(55);

myset2.add(55);
myset2.add(123);
myset2.add(452);
myset2.add(3652);

console.log(myset1.subset(myset2));

