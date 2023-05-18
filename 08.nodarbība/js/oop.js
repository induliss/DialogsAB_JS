const discrete_variable = 4;
const array_example = ['a','b'];
const function_example = function name_for_internal_use(){return x*x;};


const car = {type:"Fiat", model:"500", color:"white"};

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
}

var discrete_variable_new = discrete_variable;
const arrey_example_new = array_example;

const car_1 = car;
car_1.type = 'seat';
console.log(car_1.type);
console.log(car.type);

const person_1 = new Object();

for (let i=0; i < array_example.length; i++); console.log(array_example[i]);

