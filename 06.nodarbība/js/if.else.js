const hour = new Date().getHours();
let greeting;

console.log(greeting);
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);

document.getElementById("demo_if_else").innerHTML = greeting;
