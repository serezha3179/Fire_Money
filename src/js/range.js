let rangeTop = document.querySelector('.hero-item__input_top');
let rangeNumTop = document.querySelector('.range-num_top');

rangeTop.oninput = function () {
let valTop = rangeTop.value;
const min = rangeTop.min ? rangeTop.min : 0;
const max = rangeTop.max ? rangeTop.max : 100;
const newVal = Number(((valTop - min) * 100) / (max - min));
rangeNumTop.innerHTML = valTop + " " + "000" + " " + '₽';
rangeNumTop.style.left = `calc(${newVal}% + (${8 - newVal * 0.4}px))`;
} ;

let rangeBottom = document.querySelector('.hero-item__input_bottom');
let rangeNumBottom = document.querySelector('.range-num_bottom');

rangeBottom.oninput = function () {
let valBottom = rangeBottom.value;
const min = rangeBottom.min ? rangeBottom.min : 3;
const max = rangeBottom.max ? rangeBottom.max : 30;
const newVal = Number(((valBottom - min) * 100) / (max - min));
rangeNumBottom.innerHTML = valBottom + " " + 'дней';
rangeNumBottom.style.left = `calc(${newVal}% + (${8 - newVal * 0.4}px))`;
} ;