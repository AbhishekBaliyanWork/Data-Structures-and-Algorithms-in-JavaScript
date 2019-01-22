/* Stacks */

// Functions: push, pop, peek, length

/**************

const letters = []; //This is our stack

const word = "free";

let rword = "";

// put letters of word in stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Pop off the stack in reverse order
for (let j = 0; j < word.length; j++) {
  rword += letters.pop();  
}

if (rword === word) {
  console.log(`${word} is a palindrome`); 
} else {
  console.log(`${word} is not palindrome`);
}

****************/

// Create a Stack
const stack = function() {
  this.count = 0;
  this.storage = [];

  // Adds a value onto the end of ths stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Remove and return the value at the end of the stack
  this.pop = function() {
    if(this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function() {
    return this.count;
  }

  // Return the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count - 1];
  }
}

const myStack = new stack(); 

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freecodecamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
