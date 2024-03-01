const date = ["Day", "Month", "Date", "FullYear"]
	.map((fnName) => dt[`get${fnName}`]())
	.join(" ");

console.log(date);

const time = ["Hours", "Minutes", "Seconds"]
	.map((fnName) => dt[`get${fnName}`]())
	.join(":");

console.log( time );


// Date.prototype.getMonth = function (fmt = "long") {
// 	return new Intl.DateTimeFormat("en-US", { month: fmt }).format(this);
// };

// const day = fmt.format(dt);

const fmtFullDate = new Intl.DateTimeFormat("en-US", { "timeStyle": "" });
const fullDate = fmtFullDate.format(dt);
const mnth = fnFmt("month", "long");
