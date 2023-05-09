<script>
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "<br>"; 
}

document.getElementById("demo").innerHTML = txt;
</script>