function updateTime(){
            var TimeToGetWatch = new Date().toLocaleString();
            var timeText = document.querySelector("#timeElement");
            timeText.innerHTML = TimeToGetWatch;
        }
        setInterval(updateTime, 1000);

dragElement(document.getElementById("welcomeScreen"));

dragElement(document.getElementById("AlgebraicScreen"))

dragElement(document.getElementById("Play"))

var topbar = document.querySelector("#welcome")

var biggestIndex = 1;

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

var Play = document.querySelector("#Play")

function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topbar.style.zIndex = biggestIndex + 1;
}

function openVisibility(element) {
  element.style.visibility = "visible";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topbar.style.zIndex = biggestIndex + 1;
}

function closeVisibility(element) {
  element.style.visibility = "hidden";
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

var AlgebraicScreen = document.querySelector("#AlgebraicScreen")

var PlayClose = document.querySelector("#PlayClose")

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

var PlayOpener = document.querySelector("#PlayOpener")

PlayOpener.addEventListener("click", function() {
  openVisibility(Play)
})

PlayClose.addEventListener("click", function() {
  closeVisibility(Play)
})

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
  handleWindowTap (element)
  )
}

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topbar.style.zIndex = biggestIndex + 1;
}

addWindowTapHandling(welcomeScreen)
addWindowTapHandling(AlgebraicScreen)
addWindowTapHandling(Play)