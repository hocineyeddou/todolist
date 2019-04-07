'use strict'
let input = document.getElementsByTagName('input')[0];
let ul = document.getElementsByTagName('ul')[0];
let button = document.getElementsByTagName ('button')[0];
function addLi(){
let newLi = document.createElement ('li');
newLi.innerHTML ="lait";

ul.appendChild(newLi);
}
addLi();

function getInputValue(){
let valueInput = input.value;
console.log(valueInput)
}
getInputValue();

button.onclick = function(){
addLi();


}

console.log(button);