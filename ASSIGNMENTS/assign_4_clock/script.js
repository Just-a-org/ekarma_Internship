const dt = new Date();

const dtElem = document.getElementById("date");
const tmElem = document.getElementById("time");

const wkElem = dt.getDay();
const mnthElem = dt.getMonth();
const dyElem = dt.getDate();
const fyElem = dt.getFullYear();

const hrElem = dt.getHours();
const minElem = dt.getMinutes();
const secElem = dt.getSeconds();

const arrDay = ["Monday","Tuesday", "Webnesday",]
const arrMnth = ["January", "February", "March", "April","June", "July", "August", "September","October", "November", "December"]

dtElem.textContent = wkElem + " " + mnthElem + " " + dyElem + " " + fyElem;
tmElem.textContent = hrElem + " " + minElem + " " + secElem;

// console.log(wkElem, mnthElem, dyElem, fyElem);
// console.log(hrElem, minElem, secElem);
