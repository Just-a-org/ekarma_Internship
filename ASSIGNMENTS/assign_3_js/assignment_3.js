//for better understanding in console printing '=' 20 times

//helper funciton

function secEndLine() {
  const sym = "=".repeat(20);
  console.log(`${sym}\n\n`);
}

//utility function
const { inpMultNums, empEnt, ques, ans } = (() => {
  function inpMultNums() {
    const arr = [];
    const range = prompt("Enter range/length of array you wish to have");
    for (let i = 0; i < range; i++) {
      const num = parseInt(prompt("Please Enter a Number"));
      !isNaN(num) ? arr.push(num) : 0;
    }
    return arr;
  }

  function empEnt() {
    const name = prompt("Enter Name of the Employee");

    let salary = parseInt(prompt("Enter Salary of the Employee"));
    salary = isNaN(salary) ? 0 : salary;

    const dept = prompt("Enter Department of the Employee");

    return { name, salary, dept };
  }

  function ques(params) {
    return console.log("Question:", params);
  }

  function ans(params) {
    return console.log("Answer:", params);
  }

  return { inpMultNums, empEnt, ques, ans };
})();

// question-1

(function () {
  ques("1. Write a JavaScript function to calculate the sum of two numbers.");

  function calcSum(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
      return num1 + num2;
    }
  }

  const num1 = 0 | parseInt(prompt("Enter first number"));
  const num2 = 0 | parseInt(prompt("Enter Second Number"));

  const sumRes = calcSum(num1, num2);

  ans(`Sum of numbers ${num1} and ${num2} is ${sumRes}`);
  secEndLine();
})();

//question-2

(function () {
  ques("2. Write a JavaScript program to find the maximum number in an array.");

  const usrInps = inpMultNums();

  function findMaxNum(nums) {
    let max = nums[0];
    for (let i = 1; i < usrInps.length; i += 1) {
      if (nums[i] > max) {
        max = nums[i];
      }
    }
    return max;
  }

  const maxNum = findMaxNum(usrInps);

  ans(` maximum number is ${maxNum} from ${usrInps}`);
  secEndLine();
})();

//question-3

(function () {
  ques(
    "3. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers."
  );
  let usrInps = inpMultNums();

  function getEvnNums(nums) {
    const newArr = nums.filter((num) => num % 2 === 0);
    return newArr;
  }

  const evnNums = getEvnNums(usrInps);

  ans(`Even numbers are ${evnNums} from ${usrInps}`);
  secEndLine();
})();

//question-4

(function () {
  ques(
    "4. Write a function that takes an array of integers as input and returns a new array with only the unique elements."
  );

  const usrInps = inpMultNums();

  function getUniqNums(nums) {
    const uniqNums = [];

    nums.forEach((currItem) => {
      if (!uniqNums.includes(currItem)) {
        uniqNums.push(currItem);
      }
    });

    return uniqNums;
  }

  const uniqNums = getUniqNums(usrInps);

  console.log(`Unique numbers are ${uniqNums} from numbers ${usrInps}}`);

  secEndLine();
})();

//question-5

(function () {
  ques("5. How do you add an element to the end of an array?");
  const usrInps = inpMultNums();

  console.log(`Your Array : ${usrInps}`);

  const pushElems = parseInt(
    prompt("Enter Element to add at the end of the array")
  );

  usrInps.push(pushElems);
  console.log(`Updated Array : ${usrInps}`);

  secEndLine();
})();

//question-6

(function () {
  ques("6. How do you remove an element from an array at a specific index?");

  const usrInps = inpMultNums();
  console.log(`Your Array : ${usrInps}`);

  const rmvIdx = parseInt(
    prompt("Enter index from which element should be removed")
  );

  function rmvElem(arr, idx) {
    arr.splice(idx, 1);
  }

  rmvElem(usrInps, rmvIdx);

  console.log(`Updated Array : ${usrInps}`);

  secEndLine();
})();

//question-7

(function () {
  ques(
    "7. Write a program to create 5 employees data in object and print all data using map function."
  );

  const emplsDat = [];

  for (let i = 0; i < 5; i++) {
    emplsDat.push(empEnt());
  }

  const emplsInfo = emplsDat.map((data) =>
    console.log(
      `Name: ${data.name}		Salary: ${data.salary}		Department: ${data.dept}`
    )
  );

  secEndLine();
})();

//question-8

(function () {
  ques(
    "8. W.A.P. to print all employees' data whose salary is greater than 20000 and dept is sales."
  );

  const emplsDat = [];

  for (let i = 0; i < 5; i++) {
    emplsDat.push(empEnt());
  }

  const filtEmplsInfo = emplsDat.filter((data) => {
    return data.salary > 20000 && data.dept === "sales";
  });

  const emplsInfo = filtEmplsInfo;
  console.log(emplsInfo);
  secEndLine();
})();
