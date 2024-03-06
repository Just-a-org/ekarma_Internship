const dt = new Date();

const dtElem = document.getElementById("date");
const tmElem = document.getElementById("time");

const wkElem = dt.toLocaleDateString();
const mnthElem = dt.getMonth();
const dyElem = dt.getDate();
const fyElem = dt.getFullYear();

const hrElem = dt.getHours();
const minElem = dt.getMinutes();
const secElem = dt.getSeconds();

dtElem.textContent = wkElem + " " + mnthElem + " " + dyElem + " " + fyElem;
tmElem.textContent = hrElem + " " + minElem + " " + secElem;

// console.log(wkElem, mnthElem, dyElem, fyElem);
// console.log(hrElem, minElem, secElem);
