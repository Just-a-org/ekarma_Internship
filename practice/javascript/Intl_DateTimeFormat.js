const date = ["Day", "Month", "Date", "FullYear"]
	.map((fnName) => dt[`get${fnName}`]())
	.join(" ");

console.log(date);

const time = ["Hours", "Minutes", "Seconds"]
	.map((fnName) => dt[`get${fnName}`]())
	.join(":");

console.log(time);
