var button = document.getElementById("button");
var body = document.body;

var colours = ["red", "yellow", "blue", "green", "gold", "burgundy", "teal", "white", "black", "grey", "pink", "purple", "violet", "dodgerblue", "cyan", "lime", "lightgrey"];

function backgroundChange() {
    var rand = Math.floor(Math.random() * colours.length);
    body.style.backgroundColor = colours[rand];
    
}

button.addEventListener("click", backgroundChange, false);
