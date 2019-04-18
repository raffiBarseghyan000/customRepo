function Class1 (type) {
    this.type = type;
    this.value1 = "value10";
}

function Class2 (type) {
    this.type = type;
    this.value1 = "value11";
    this.superValue = "superValue";
}

function Extend (Class1, Class2) {
    Class1.prototype = new Class2();
}

Extend(Class1, Class2);

let Object1 = new Class1();
let Object2 = new Class1();

console.log(Object1.superValue);
console.log(Object1.hasOwnProperty("superValue"));

console.log(Object2.superValue);
console.log(Object2.hasOwnProperty("superValue"));

delete Object.getPrototypeOf(Object1).superValue;

console.log(Object1.superValue);
console.log(Object1.hasOwnProperty("superValue"));

console.log(Object2.superValue);
console.log(Object2.hasOwnProperty("superValue"));

