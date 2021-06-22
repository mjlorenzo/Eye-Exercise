// retrieve an array of DOM elements that have the CSS class "ball"
var balls = document.getElementsByClassName("ball");

// add an event listener to the document
// this will call the provided callback every time the mouse moves
// I modified this from the original code because use of the generic "event" object
// is now considered deprecated and may break in future browsers
document.addEventListener("mousemove", (event) => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";
  
    // adapted to handle any number of eyes
    for (let ball of balls) {
      ball.style.left = x;
      ball.style.top = y;
      ball.transform = "translate(-" + x + ",-" + y + ")";
    }
  });