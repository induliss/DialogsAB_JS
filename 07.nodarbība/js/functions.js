function counter(paragraph_name, end_value, step_value){
  let text = "";
  let i = 1;

  while (i <= end_value) {
    //console.log("i: " + i);
    //console.log("i%2: " + (i % 2));
    if (i % step_value == 0) {
      text += "<br>" + i;
    }
    i++;
  }
  document.getElementById(paragraph_name).innerHTML = text;
  // return i;
  return [i, i*i];
}
// u(t) = t*t;

//var cits_i;
//cits_i = counter("demo_function_1",20,2);
//console.log("Mainīgā i vērtība pēc funkcijas darbināšanas: " + cits_i);

//cits_i = counter("demo_function_2",40,3);
//console.log("Mainīgā i vērtība pēc funkcijas darbināšanas: " + cits_i);

var funkcijas_darbiibas_rezultaati;
funkcijas_darbiibas_rezultaati = counter("demo_function_1",20,2);
console.log("Pirmā rezultāta vērtība pēc funkcijas darbināšanas: " + funkcijas_darbiibas_rezultaati[0]);
console.log("Otrā rezultāta vērtība pēc funkcijas darbināšanas: " + funkcijas_darbiibas_rezultaati[1]);

funkcijas_darbiibas_rezultaati = counter("demo_function_2",40,3);
console.log("Pirmā rezultāta vērtība pēc funkcijas darbināšanas: " + funkcijas_darbiibas_rezultaati[0]);
console.log("Otrā rezultāta vērtība pēc funkcijas darbināšanas: " + funkcijas_darbiibas_rezultaati[1]);


/*
text = "";
i = 1;
while (i <= 20) {
  console.log("i: " + i);
  console.log("i%2: " + (i % 3));
  if (i % 3 == 0) {
    text += "<br>" + i;
  }
  i++;
}

document.getElementById("demo_function_2").innerHTML = text;
*/