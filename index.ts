import confetti from "canvas-confetti";
import "donutty/dist/donutty.min.js";
import Splide from "@splidejs/splide";

declare function Donutty(a: HTMLElement | null, b: object): void;

const name: string = "Keegan";

const hello = (name: string): string => {
  return `hello there ${name}`;
};

console.log(hello(name));

// const heading = document.querySelector("h1");
// if (heading) {
//   heading.textContent = "This is a heading for v0.4.0";
// }

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
  });
  splide.mount();

  var myCanvas = document.createElement("canvas");
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  document.body.appendChild(myCanvas);

  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 1000,
    spread: 160,
    // any other options from the global
    // confetti function
  });

  var donut = new (Donutty as any)(document.getElementById("donut"), {
    min: -50,
    max: 50,
    value: 11,
  });
});
