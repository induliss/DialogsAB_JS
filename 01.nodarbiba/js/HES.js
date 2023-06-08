let intervalID_1;

function toggleColor() {
  let e = document.getElementById("flashtext1");
  console.log(e);
  console.log(e.style);
  console.log(e.style.color);
  console.log(e.style.color == "red");
  console.log(e.style.color == "red" ? "blue" : "red");
  e.style.color = e.style.color == "red" ? "blue" : "red";
  console.log(e.style.color);
  console.log("\n");
  }

function stop() {
  clearInterval(intervalID_1);
}

function start() {
  intervalID_1 = setInterval(toggleColor, 5000);
}
