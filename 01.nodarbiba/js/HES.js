let intervalID_1;
 
    function toggleColor() {
      let e = document.getElementById('flashtext1');
      e.style.color = e.style.color == 'red' ? 'blue' : 'red';
    }

    function stop() {
      clearInterval(intervalID_1);
    }

    function start() {
       intervalID_1 = setInterval(toggleColor, 5000); 
    }