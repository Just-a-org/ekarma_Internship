const dtElem = document.getElementById("date");
const tmElem = document.getElementById("time");

const dt = new Date();
function fnFmt(key, prop, lang = "en-US") {
	const fmt = new Intl.DateTimeFormat(lang, { [key]: prop });

	return fmt.format(dt);
}

const fullDate = fnFmt("dateStyle", "full");
const fulltime = fnFmt("timeStyle", "medium");

dtElem.textContent = fullDate;
tmElem.textContent = fulltime;
