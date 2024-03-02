const dtElem = document.getElementById("date");
const tmElem = document.getElementById("time");

function dateFmt(date, dateType, type, lang = "en-US") {
	const fmt = new Intl.DateTimeFormat(lang, { [dateType]: type });

	return fmt.format(date);
}

function update() {
	const dt = new Date();

	const fullDate = dateFmt(dt, "dateStyle", "full");
	const fullTime = dateFmt(dt, "timeStyle", "medium");

	dtElem.textContent = fullDate;
	tmElem.textContent = fullTime;

	setTimeout( update, 1000 );
}

update();
