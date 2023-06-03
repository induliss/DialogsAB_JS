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

setTimeout(() => {
    jsWindow.close();
}, 5000);