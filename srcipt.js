class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const newName = new Person('John', 31)
const oldPerson = new Person('Chris',50)
console.log(newName,oldPerson)

const fruits = ['mango', 'Orange', 'pear']

const p = fruits.map(item => console.log(item))

const vehicle = ['mustang', 'f-150', 'ford']
const [car, truck, suv] = vehicle
console.log(vehicle)

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate();
console.log(calculate(6,7))