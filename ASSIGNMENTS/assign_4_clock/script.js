const dtElem = document.getElementById("date");
const tmElem = document.getElementById("time");

<<<<<<< HEAD
const wkElem = dt.toLocaleDateString();
const mnthElem = dt.getMonth();
const dyElem = dt.getDate();
const fyElem = dt.getFullYear();
=======
function dateFmt(date, dateType, type, lang = "en-US") {
	const fmt = new Intl.DateTimeFormat(lang, { [dateType]: type });
>>>>>>> 07f40d49592d6c47144a30fad61d3fc0966bbf22

	return fmt.format(date);
}

<<<<<<< HEAD
dtElem.textContent = wkElem + " " + mnthElem + " " + dyElem + " " + fyElem;
tmElem.textContent = hrElem + " " + minElem + " " + secElem;
=======
function update() {
	const dt = new Date();

	const fullDate = dateFmt(dt, "dateStyle", "full");
	const fullTime = dateFmt(dt, "timeStyle", "medium");
>>>>>>> 07f40d49592d6c47144a30fad61d3fc0966bbf22

	dtElem.textContent = fullDate;
	tmElem.textContent = fullTime;

	setTimeout( update, 1000 );
}

update();
