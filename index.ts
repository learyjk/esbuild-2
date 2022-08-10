import confetti from "canvas-confetti";
import "donutty/dist/donutty.min.js";

declare const Donutty;

const hello = (name: string): string => {
  return `hello there ${name}`;
};

console.log(hello("Keegan"));

var myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});
myConfetti({
  particleCount: 100,
  spread: 160,
  // any other options from the global
  // confetti function
});

var donut = new Donutty(document.getElementById("donut"), {
  min: -50,
  max: 50,
  value: 11,
});