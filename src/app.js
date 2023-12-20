/* eslint-disable */
import "bootstrap";
import "./style.css";

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

function SetRandomNumber(anArray) {
  return;
}

function GenerateRandomExcuse() {
  let finalExcuse = "";
  finalExcuse += who[Math.floor(Math.random() * who.length)] + " ";
  finalExcuse += action[Math.floor(Math.random() * action.length)] + " ";
  finalExcuse += what[Math.floor(Math.random() * what.length)] + " ";
  finalExcuse += when[Math.floor(Math.random() * when.length)] + " ";
  return finalExcuse;
}
let excuse = GenerateRandomExcuse();

window.onload = function() {
  //write your code here

  document.querySelector("#excuse").innerHTML = GenerateRandomExcuse();
};
