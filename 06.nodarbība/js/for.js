const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    console.log(i);
    console.log("teksta minīgais saturs pirms izmaiņām" + "/n" + text);
  text += cars[i] + "<br>";
  console.log("teksta minīgais saturs pēc izmaiņām" + "/n" + text + "/n/n");
}

document.getElementById("demo_car").innerHTML = text;