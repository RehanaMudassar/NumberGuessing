#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\n      Welcome to Number Guessing      \n\n")
const randomNumber=Math.floor(Math.random() *6 +1)
const answers=await inquirer.prompt([
    {
        name:"usernumber",
        type: Number,
        message:"Enter you number between 1-6",

    }
]);
if(answers.usernumber===randomNumber)
    {
    console.log("Congratulations Your guess is right");
    }
    else{
        console.log("Oh Your guess is wrong");
        }
    
