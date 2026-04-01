// =========================================
// File: 06-classes.js
// Topic: Classes, Constructor, this, Inheritance
// =========================================
// What I Understand:
// Class is a blueprint for creating objects
// constructor() runs automatically when you create a new instance.
// 'this' refers to the current instance of the class.
// extends allows a class to inherit from another class.
// super() calls the parent class constructor.
// ========================================
// Problem 31: Basic Class
// Create a class called Person with:
//   - constructor: name, age
//   - method greet() that logs: "Hi, I'm [name] and I'm [age] years old."
// Your code here:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
console.log("Problem 31:");
const sabbir = new Person("sabbir", 20);
sabbir.greet();
// Expected: "Hi, I'm Sabbir and I'm 25 years old."
// =========================================
// Problem 32: Class Method with Logic
// Create a class called BankAccount with:
//   - constructor: owner, balance (default 0)
//   - method deposit(amount): adds to balance, logs new balance
//   - method withdraw(amount): deducts from balance
//  - if amount > balance: log "Insufficient funds"
//       otherwise: log new balance
// Your code here:
class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Balance: ${this.balance}`);
        }
    }
}
console.log("Problem 32:");
const acc = new BankAccount("Sabbir", 1000);
acc.deposit(500); // Balance: 1500
acc.withdraw(200); // Balance: 1300
acc.withdraw(2000); // Insufficient funds

// ========================================
// Problem 33: Getter & Setter
// Create a class called Temperature with:
//   - constructor: celsius
//   - getter fahrenheit: returns celsius converted to fahrenheit (C * 9/5 + 32)
//   - setter fahrenheit: sets celsius from a fahrenheit value
// Your code here:
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return (this.celsius * 9) / 5 + 32;
    }
    set fahrenheit(f) {
        this.celsius = ((f - 32) * 5) / 9;
    }
}
console.log("Problem 33:");
const temp = new Temperature(0);
console.log(temp.fahrenheit); // 32
temp.fahrenheit = 212;
console.log(temp.celsius); // 100
// ========================================
// Problem 34: Static Method
// Create a class called MathHelper with:
//   - static method add(a, b): returns a + b
//   - static method multiply(a, b): returns a * b
//   - static method clamp(value, min, max): returns value clamped between min and max
// Note: static methods are called on the CLASS, not an instance.
// Your code here:
class MathHelper {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
}
console.log("Problem 34:");
console.log(MathHelper.add(3, 4)); // 7
console.log(MathHelper.multiply(3, 4)); // 12
console.log(MathHelper.clamp(15, 0, 10)); // 10

// =========================================
// Problem 35: Inheritance — extends & super
// Create a class Animal with:
//   - constructor: name
//   - method speak(): logs "[name] makes a sound."
// Create a class Dog that extends Animal with:
//   - constructor: name, breed
//   - override speak(): logs "[name] barks."
//   - method info(): logs "[name] is a [breed]."
// Your code here:
class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name, breed);
        this.name = name;
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} bark.`);
    }
    info() {
        console.log(`${this.name} is ${this.breed}`);
    }
}
console.log("Problem 35:");
 const dog = new Dog("Bruno", "Labrador");
 dog.speak(); // Bruno barks.
 dog.info();  // Bruno is a Labrador.
