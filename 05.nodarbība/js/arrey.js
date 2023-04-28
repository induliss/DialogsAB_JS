var x1 = 1,
x2 = 2,
x3 = 3;
var delta_x1 = x2 - x1;
var delta_x2 = x3 - x2;
var x_coord = [11, 22, 306];
console.log(x_coord[0]);
console.log(x_coord[1]);
console.log(x_coord[2]);
var coord = [
[11, 22, 306],
[89, 96, 45],
];
console.log(coord[0]);
console.log(coord[0][0]);

<html>
<body>

<h2>JavaScript Array Methods</h2> 
<h2>toString()</h2>
<p>The toString() method returns an array as a comma separated string:</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
</script>

</body>
</html>

