var button1 = document.getElementById('btn1');

var button2 = document.getElementById('btn2');

var button3 = document.getElementById('btn3');

var button4 = document.getElementById('btn4');

button1.onclick = function() {
    alert('You clicked the button');
}

button2.onmouseover = function() {
    alert('You hovered over the button');
}

button3.onmouseleave = function() {
    alert('You left the button');
}

button4.onmousewheel = function() {
    alert('You scrolled the wheel');
}

