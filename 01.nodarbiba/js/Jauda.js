let intervalID_2;
 
    function toggleColor() {
      let e = document.getElementById('flashtext');
      e.style.color = e.style.color == 'red' ? 'blue' : 'red';
    }

    function stop() {
      clearInterval(intervalID_2);
    }

    function start() {
       intervalID_2 = setInterval(toggleColor, 2000); 
    }