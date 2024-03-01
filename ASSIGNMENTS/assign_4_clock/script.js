const dt = new Date();

const dtElem = document.getElementById("date");
const tmElem = document.getElementById("time");

console.log(dt.getMonth());

function fnFmt(var1, var2, var3) {
	const var1 = new Intl.DateTimeFormat("hin", { [var2]: var3 });
}

Date.prototype.getMonth = function (fmt = "long") {
	return new Intl.DateTimeFormat("en-US", { month: fmt }).format(this);
};

const day = fmt.format(dt);

const fmtMnth = new Intl.DateTimeFormat("hin", { month: "long" });
const mnth = fmtMnth.format(dt);

console.log(day);
console.log(mnth);
