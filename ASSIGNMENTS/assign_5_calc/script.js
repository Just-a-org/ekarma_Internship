const num1Elem = document.getElementById("num1");
const num2Elem = document.getElementById("num2");
const resElem = document.getElementById("res");

const sumElem = document.getElementById("btn_sum");
const minElem = document.getElementById("btn_min");
const divElem = document.getElementById("btn_div");
const multElem = document.getElementById("btn_mult");

const sum = () => {
  resElem.value = Number(num1Elem.value) + Number(num2Elem.value);

};
const min = () => {
	resElem.value = num1Elem.value - num2Elem.value;
};
const div = () => {
	resElem.value = num1Elem.value / num2Elem.value;
};
const mult = () => {
	resElem.value = num1Elem.value * num2Elem.value;
};
