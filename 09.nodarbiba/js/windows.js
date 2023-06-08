var counter = 1;
var showCounter = () => console.log(counter);

console.log(counter);
showCounter();

console.log(window.counter);
window.showCounter();

console.log('window.innerWidth: ' + window.innerWidth);
console.log('document.documentElement.clientWidth: ' + document.documentElement.clientWidth);
console.log('document.body.clientWidth: ' + document.body.clientWidth)

const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

console.log(`window.outerWidth: ${window.outerWidth}`)

const height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

let ageStr = prompt('How old are you?');
let age = Number(ageStr);

let feedback = age >= 16 ?
    'You are eligible to join.' :
    'You must be at least 16 year old to join.';

alert(feedback);

let url = 'https://www.ss.lv/msg/lv/transport/spare-parts/ford/galaxy/bdecdo.html#photo-1';
let testWindow = window.open(url, 'tests_1');

setTimeout((feature = 'height=600,width=800')=> {
    window.open('https://www.tf.llu.lv/conference/','about')
let jsWindow = window.open(url, 'prove', feature);
}, 5000)

setTimeout(() => {
    alert('3 seconds has been passed!')
}, 3000);

let result = confirm('Are you sure you want to delete?');

let message = result ? 'You clicked the OK button' :
    'You clicked the Cancel button';

alert(message);

let intervalID;

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
    clearInterval(intervalID);
  }
  
  function start() {
    intervalID = setInterval(toggleColor, 1000);
  }

urlParamsString = '?keys=ko%C4%A3ener%C4%81cija';//location.search;
urlParams = new URLSearchParams(urlParamsString);

for (const [key, value] of urlParams) {
    console.log(`${key}:${value}`);
}

for (const key of urlParams.keys()) {
    console.log(key);
}

for (const value of urlParams.values()) {
    console.log(value);
}

for (const entry of urlParams.entries()) {
    console.log(entry);
}