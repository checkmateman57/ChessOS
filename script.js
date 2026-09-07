function updateTime(){
            var TimeToGetWatch = new Date().toLocaleString();
            var timeText = document.querySelector("#timeElement");
            timeText.innerHTML = TimeToGetWatch;
        }
        setInterval(updateTime, 1000);

dragElement(document.getElementById("welcomeScreen"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var welcomeScreen = document.querySelector("#welcomeScreen")

function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element){
    element.style.display = "block"
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

var AlgebraicScreen = document.querySelector("#AlgebraicScreen")

welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen)
})

welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen)
})

var algebraicScreenClose = document.querySelector("#AlgebraicClose")

var algebraicScreenOpen = document.querySelector("#AlgebraicOpener")

algebraicScreenClose.addEventListener("click", function() {
  closeWindow(AlgebraicScreen)
  algebraicScreenOpen.classList.remove("selected");
})

algebraicScreenOpen.addEventListener("click", function() {
  openWindow(AlgebraicScreen)
  algebraicScreenOpen.classList.add("selected")
})