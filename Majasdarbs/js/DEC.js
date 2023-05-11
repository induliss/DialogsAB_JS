let text = ""
let i = 0;

do {
  text += "<br>" + i;
  i++;
}
while (i < 16);  

document.getElementById("demo").innerHTML = text;