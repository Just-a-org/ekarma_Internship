//for better understanding in console printing '=' 20 times
function quesEndLine () {
	const smbl = `=`.repeat(20);
	console.log(`${ smbl }\n\n`);
}

function promptMultipleNumbers () {
	const arr = [];
	let range = prompt(`Enter range/length of array you wish to have `);
	for (let index = 0; index < range; index++) {
		let number = parseInt(prompt(`Please Enter a Number`));
		arr.push(number);
	}
	return arr;
}

// ----------------------------------
/* console.log(
	`1. Write a JavaScript function to calculate the sum of two numbers.`,
);

function calculateSum(num1, num2) {
	return parseInt(num1) + parseInt(num2);
}
let number1 = prompt(`Enter first number`),
	number2 = prompt(`Enter Second Number`);

const sumResult = calculateSum(number1, number2);

console.log(`Sum of numbers ${number1} and ${number1} is ${sumResult}`);
quesEndLine(); */
// ----------------------------------

// ----------------------------------
/* console.log(
	`2. Write a JavaScript program to find the maximum number in an array.`,
);

const userInputs1 = promptMultipleNumbers();
function findMaxNumber(arr) {
	let max = arr[0];
	for (const item of arr) {
		if (max < item) {
			max = item;
		}
	}
	return max;
}

const maxResult = findMaxNumber(userInputs1);

console.log(` maximum number is ${maxResult} from ${userInputs1}`);
quesEndLine(); */
// ----------------------------------

// ----------------------------------
/* console.log(
	`3. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.`,
);
let userInputs2 = promptMultipleNumbers();

function getEvenNumbers(arr) {
	arr.forEach((element) => {
		if (element % 2 != 0) {
			arr.pop(element);
		}
	});
	return arr;
}

console.log(
	`Even numbers are ${getEvenNumbers(
		userInputs2,
	)} from array of ${userInputs2}`,
);
quesEndLine(); */
// ----------------------------------

// ----------------------------------
/* console.log(
	`4. Write a function that takes an array of integers as input and returns a new array with only the unique elements.`,
);

const userInputs3 = promptMultipleNumbers();

function getUniqueNumbers (arr) {
	const uniqueNumbers = [];

	arr.forEach((currentItem) => {
		if (!uniqueNumbers.includes(currentItem)) {
			uniqueNumbers.push(currentItem);
		}
	});

	return uniqueNumbers;
}

console.log(
	`Unique numbers are ${ getUniqueNumbers(
		userInputs3,
	) } from numbers ${ userInputs3 }}`,
);

quesEndLine(); */
// ----------------------------------

// ----------------------------------
/* console.log(`5. How do you add an element to the end of an array?`);
const userInputs4 = promptMultipleNumbers();

console.log(`Your Array : ${userInputs4}`);

const pushElements = parseInt(
	prompt("Enter Element to add at the end of the array"),
);

userInputs4.push(pushElements);
console.log(`Updated Array : ${userInputs4}`);

quesEndLine(); */
// ----------------------------------

// ----------------------------------
// console.log(
// 	`6. How do you remove an element from an array at a specific index?`,
// );

// const userInputs5 = promptMultipleNumbers();
// console.log(`Your Array : ${ userInputs5 }`);

// const removeElement = parseInt(prompt(`Enter index from which element should be removed`));

// userInputs5.pop();

// console.log(`Updated Array : ${ userInputs5 }`);

// quesEndLine();
// ----------------------------------

// ----------------------------------
console.log(
	`7. Write a program to create 5 employees data in object and print all data using map function.`,
);

const employeesData = [];

for (let index = 0; index < 2; index++) {
	let name = prompt("Enter Name of the Employee");
	let salary = prompt("Enter Salary of the Employee");
	let dept = prompt("Enter Department of the Employee");
	employeesData.push({ name, salary, dept });
}

const employeesInfo = employeesData.map((data) => console.log(`Name: ${ data.name }		Salary: ${ data.salary }		Department: ${ data.dept }`));
quesEndLine();
// ----------------------------------

// ----------------------------------
console.log(
	`8. Wap to print all employees' data whose salary is greater than 20000 and dept is sales.`,
);
quesEndLine();
// ----------------------------------
