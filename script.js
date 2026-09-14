var welcomeScreen = document.querySelector("#welcomeScreen")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")
var topbar = document.querySelector("#welcome")

var AlgebraicScreen = document.querySelector("#AlgebraicScreen")
var algebraicScreenClose = document.querySelector("#AlgebraicClose")
var algebraicScreenOpen = document.querySelector("#AlgebraicOpener")
var AlgebraicMaximize = document.querySelector("#AlgebraicMaximize")
var AlgebraicMinimize = document.querySelector("#AlgebraicMinimize")

var Play = document.querySelector("#Play")
var PlayOpener = document.querySelector("#PlayOpener")
var PlayClose = document.querySelector("#PlayClose")
var PlayMaximize = document.querySelector("#PlayMaximize")

var TerminalScreen = document.querySelector("#TerminalScreen")
var TerminalOpen = document.querySelector("#TerminalOpener")
var TerminalClose = document.querySelector("#TerminalClose")
var TerminalInput = document.querySelector("#TerminalInput")
var TerminalHistory = document.querySelector("#TerminalHistory")
var TerminalMessage = "Welcome to the Terminal. Can't make a move? Perhaps you're in <b><u>Stalemate</u></b>"
var TerminalMaximize = document.querySelector("#TerminalMaximize")
var TerminalMinimize = document.querySelector("#TerminalMinimize")

var HallScreen = document.querySelector("#HallScreen")
var HallOpener = document.querySelector("#HallOpener")
var HallClose = document.querySelector("#HallClose")
var HallMaximize = document.querySelector("#HallMaximize")
var HallMinimize = document.querySelector("#HallMinimize")


var biggestIndex = 1;


function updateTime(){
            var TimeToGetWatch = new Date().toLocaleString();
            var timeText = document.querySelector("#timeElement");
            timeText.innerHTML = TimeToGetWatch;
        }
        setInterval(updateTime, 1000);

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

TerminalInput.addEventListener("keydown", function(event) {
  if(event.key === "Enter") {
    var RawText = TerminalInput.value;
    var command = RawText.trim().toLowerCase();

    TerminalHistory.innerHTML += `<span style="color: rgb(237, 194, 107); font-weight: bold;">user:~$</span> ${RawText}<br>`;
    if (command === "stalemate") {
      TerminalHistory.innerHTML += "Seems as though you can't make a move.<br>Here are some available move: <br> New Game: clear menu, e4: Know who you're playing, Ng6: Why chess is so amazing, Bxf7+: A sacrifice, Hint: a chess quote, Checkmate: close terminal<br>";
    }

    else if (command ==="new game") {
      TerminalHistory.innerHTML = TerminalMessage;
    }

    else if (command ==="e4") {
      TerminalHistory.innerHTML += "Chess.com: Rapid: 2330 Blitz: 2340 Bullet: 2400<br>CFC: Regular: 1800 Quick: 1770<br>Fide: Classical: 1890<br>e5, your turn<br>";
    }

    else if (command ==="ng6") {
      TerminalHistory.innerHTML += "I love chess because it challenges the mind. Different positions each game, you always have to think. It is pure brainpower overpowering another, the true test of how strong the mind is, and if you lose, it will always be your fault no matter what. No excuses possible<br>0-0, your move<br>";
    }

    else if (command ==="bxf7+") {
      TerminalHistory.innerHTML += "A sacrifice huh? well it's probably a calculated one but you should do real sacrifices like Mikhail Tal. You have a hunch you can get a winning position but can't exactly get there off calculation alone. That's real intuition and it takes courage.<br>I guess I'll take your sacrifice, Kxf7, your move<br>";
    }

    else if (command ==="hint") {
      TerminalHistory.innerHTML += "[In Chess] You must take your opponent into a deep, dark forest where 2+2=5, and the path leading out is only wide enough for one. - Mikhail Tal<br>";
    }
    
    else if (command ==="checkmate") {
      TerminalHistory.innerHTML += "Looks like you beat me today. Good Game";
      TerminalHistory.scrollTop = TerminalHistory.scrollHeight;
      setTimeout(function () {
        TerminalHistory.innerHTML = TerminalMessage;
        closeWindow(TerminalScreen);
      }, 2000)
    }
    
    else if (command ==="") {
      
    }

    else {
      TerminalHistory.innerHTML += `Engine: Command '${RawText}' is an illegal move. Please try again<br>`;
    }

    TerminalInput.value = "";
    TerminalHistory.scrollTop = TerminalHistory.scrollHeight;

  }
})


welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen)
})

welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen)
})

algebraicScreenClose.addEventListener("click", function() {
  closeWindow(AlgebraicScreen)
  algebraicScreenOpen.classList.remove("selected");
})

algebraicScreenOpen.addEventListener("click", function() {
  openWindow(AlgebraicScreen)
  algebraicScreenOpen.classList.add("selected")
})

AlgebraicMaximize.addEventListener("click", function() {
  AlgebraicScreen.classList.toggle("maximize")
})

AlgebraicMinimize.addEventListener("click", function() {
  closeWindow(AlgebraicScreen)
})

PlayOpener.addEventListener("click", function() {
  openVisibility(Play)
})

PlayClose.addEventListener("click", function() {
  closeVisibility(Play)
})

PlayMaximize.addEventListener("click", function() {
  Play.classList.toggle("maximize")
})

TerminalOpen.addEventListener("click", function() {
  openWindow(TerminalScreen)
  TerminalOpen.classList.add("selected")
})

TerminalClose.addEventListener("click", function() {
  closeWindow(TerminalScreen)
  TerminalOpen.classList.remove("selected")
})

TerminalMaximize.addEventListener("click", function() {
  TerminalScreen.classList.toggle("maximize")
})

TerminalMinimize.addEventListener("click", function() {
  closeWindow(TerminalScreen)
})

HallOpener.addEventListener("click", function() {
  HallOpener.classList.add("selected")
  openWindow(HallScreen)
})

HallClose.addEventListener("click", function() {
  closeWindow(HallScreen)
  HallOpener.classList.remove("selected")
})

HallMaximize.addEventListener("click", function() {
  HallScreen.classList.toggle("maximize")
})

HallMinimize.addEventListener("click", function() {
  closeWindow(HallScreen)
})

addWindowTapHandling(welcomeScreen)
addWindowTapHandling(AlgebraicScreen)
addWindowTapHandling(Play)
addWindowTapHandling(TerminalScreen)
addWindowTapHandling(HallScreen)

dragElement(document.getElementById("welcomeScreen"));
dragElement(document.getElementById("AlgebraicScreen"))
dragElement(document.getElementById("Play"))
dragElement(document.getElementById("TerminalScreen"))
dragElement(document.getElementById("HallScreen"))