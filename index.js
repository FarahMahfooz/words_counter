#! /usr/bin/env node
// import inquirer and chalk package
import inquirer from "inquirer";
import chalk from "chalk";
// Dislpay a colourfull wellcome message
console.log("=".repeat(60));
console.log(chalk.bold.blueBright("\n \t\t WELLCOME IN WORDS_COUNTER PROJECT"));
console.log("=".repeat(60));
//prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
// Trimming the sentence and splitting it into woed base "spaces"
let words = answers.sentence.trim().split(" ");
//analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count:${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
