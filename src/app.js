import "./style.css";
import ".";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  " when I finished",
  "during my lunch",
  "while I was praying"
];
function GenerateRandomExcuse() {
  let finalExcuse = "";
  finalExcuse += who[SetRandomNumber(who)] + " ";
  finalExcuse += action[SetRandomNumber(action) + " "];
  finalExcuse += what[SetRandomNumber(what) + " "];
  finalExcuse += when[SetRandomNumber(when)];
  return finalExcuse;
}
console.log(GenerateRandomExcuse());
function SetRandomNumber(anArray) {
  return (Math.random() * 10) % anArray.length;
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
