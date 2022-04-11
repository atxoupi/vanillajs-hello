/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#Excuse").innerHTML = randomExcuse();
};

let randomExcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoidx = Math.floor(Math.random() * who.length);
  let whatidx = Math.floor(Math.random() * what.length);
  let whenidx = Math.floor(Math.random() * when.length);

  return who[whoidx] + " " + what[whatidx] + " " + when[whenidx] + " ";
};
