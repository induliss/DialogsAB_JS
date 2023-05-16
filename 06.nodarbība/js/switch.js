let day;
let day_ = new Date().getDay();

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    console.log(day)
}
document.getElementById("demo_switch").innerHTML = "Today is " + day;

switch (new Date().getDay()) {
    case 0:
    day = "Sunday";
    break;  
    case 1:
      day = "Monday";
      default_1:
      text = " Sāku pieņemt bakalura darbus!"
      break;
    case 2:
      day = "Tuesday";
      default_2:
        text = " Pieņemu bakalura darbus!"
      break;
    case 3:
      day = "Wednesday";
      default_3:
        text = " Pieņemu bakalura darbus!"
      break;
      case 4:
      day = "Thursday";
      default_4:
        text = " Beidzu pieņemt bakalura darbus pl.17.00!"
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    
}

document.getElementById("demo_switch").innerHTML =
  document.getElementById("demo_switch").innerHTML + text;   