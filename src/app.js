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
  return Math.floor((Math.random() * 10) % anArray.length);
}

function GenerateRandomExcuse() {
  let finalExcuse = "";
  finalExcuse += who[SetRandomNumber(who)] + " ";
  finalExcuse += action[SetRandomNumber(action) + " "];
  finalExcuse += what[SetRandomNumber(what) + " "];
  finalExcuse += when[SetRandomNumber(when)];
  return "SiFunciono";
}
let excuse = GenerateRandomExcuse();

window.onload = function() {
  //write your code here

  document.querySelector("#excuse").innerHTML = GenerateRandomExcuse();
};
