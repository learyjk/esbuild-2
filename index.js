"use strict";
exports.__esModule = true;
var confetti = require("canvas-confetti");
require("donutty/dist/donutty.min.js");
var name = "Keegan";
var hello = function (name) {
    return "hello there ".concat(name);
};
console.log(hello(name));
var myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
document.body.appendChild(myCanvas);
var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
});
myConfetti({
    particleCount: 1000,
    spread: 160
});
var donut = new Donutty(document.getElementById("donut"), {
    min: -50,
    max: 50,
    value: 11
});
var heading = document.querySelector("h1");
if (heading) {
    heading.textContent = "This is a heading for v0.4.0";
}
