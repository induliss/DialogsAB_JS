/*let text = "";
let i = 1;
while (i <= 20) {
    console.log(" i: " + i);
    console.log("i%2:" + (i % 2));
    if (i % 2 == 0) {
        text += "<br>" + i;
    }
    i++
}
document.getElementById("demo_while").innerHTML = text;*/

text = "";
i = 1;
while (i <= 100) {
  if (i < 10) {
    text += "<br>" + 0 + 0 + i;
  } else if (i < 100) {
    text += "<br>" + 0 + i;
  } else {
    text += "<br>" + i;
  }
  i++;
}

document.getElementById("demo_while").innerHTML = text;
