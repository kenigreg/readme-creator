const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the Table of Contents?',
        name: 'tableofcontent',
    },
    {
        type: 'input',
        message: 'What is the Installation process?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the usage details of your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose a license for your project?',
        name: 'license',
        choices: ["ISC", "MIT", "GNU", "Apache", "Eclipse", "IBM"],
    },
    {
        type: 'input',
        message: 'Who are the contributors?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What are the test details of your project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username or email address?',
        name: 'github',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
   
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            Object.keys(response).length === questions.length ? console.log('Success') : console.log('You forgot to complete some sections!');
            const myAnswer = generateMarkdown(response);
            writeToFile('sample.md', myAnswer);
        })

}

// function call to initialize program
init();