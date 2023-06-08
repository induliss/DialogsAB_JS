let intervalID_2;

function toggleColor() {
  let e = document.getElementById("flashtext");
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
    clearInterval(intervalID_2);
  }

  function start() {
    intervalID_2 = setInterval(toggleColor, 2000);
  }

