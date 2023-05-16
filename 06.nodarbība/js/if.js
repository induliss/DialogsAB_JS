if (new Date().getHours() < 18) {
    document.getElementById("demo_if").innerHTML = "Good day!";
    document.getElementById("demo_if").innerHTML =
      document.getElementById("demo_if").innerHTML + " Good day one more time!";
  }
  
  if (new Date().getHours() < 18) console.log("Good day!");
  
  console.log("Good day one more time!");