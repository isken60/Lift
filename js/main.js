let elevator = document.querySelector("#lift");
let floor = 70;
let btn1 = document.querySelector("#floor-1");
let btn2 = document.querySelector("#floor-2");
let btn3 = document.querySelector("#floor-3");
let btn4 = document.querySelector("#floor-4");
let btn5 = document.querySelector("#floor-5");
let btn6 = document.querySelector("#floor-6");
let btn7 = document.querySelector("#floor-7");
let btn8 = document.querySelector("#floor-8");
let btn9 = document.querySelector("#floor-9");

function rander() {
  elevator.style.bottom = `${floor}px`;
  elevator.style.transition = "1s";
}
btn1.addEventListener("click", () => {
  console.log(floor);
  floor = 70;
  rander();
});
btn2.addEventListener("click", () => {
  console.log(floor);
  floor = 130;
  rander();
});
btn3.addEventListener("click", () => {
  console.log(floor);
  floor = 190;
  rander();
});
btn4.addEventListener("click", () => {
  console.log(floor);
  floor = 250;
  rander();
});
btn5.addEventListener("click", () => {
  console.log(floor);
  floor = 310;
  rander();
});
btn6.addEventListener("click", () => {
  console.log(floor);
  floor = 370;
  rander();
});
btn7.addEventListener("click", () => {
  console.log(floor);
  floor = 430;
  rander();
});
btn8.addEventListener("click", () => {
  console.log(floor);
  floor = 490;
  rander();
});
btn9.addEventListener("click", () => {
  console.log(floor);
  floor = 550;
  rander();
});
