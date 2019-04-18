function Person(){
}
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.friends = ['Jadeja', 'Vijay'];
Person.prototype.sayName = function(){
    console.log(this.name);
};

let person1= new Person();
let person2 = new Person();

// person1.name = "Amit";
person1.friends.push("Vigen");

console.log(person1.friends);
console.log(person2.friends);