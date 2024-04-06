#!/usr/bin/env node

import inquirer  from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your frist number", type: "number", name: "fristNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "select one of operator to operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "multiplication", "Division"],
  },
]);

//conditional statement
if(answer.operator === "Addition") {
  console.log (answer.fristNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log (answer.fristNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.fristNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
 console.log (answer.fristNumber/ answer.secondNumber);
}  else {console.log ("please select valid number")}

