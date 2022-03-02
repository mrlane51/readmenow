// packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const utils = require('utils');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMd');
const renderLicenseSection = require('./utils/generateMd');

// inital output to welcome user
console.log(`Hello, Welcome to MrLane51's Professional ReadMe Generator.`);

// array of questions for user input
const questions = [
        {
        type: 'checkbox',
        name: 'ReadMeTemplate',
        message: 'Would you like to make a ReadMe profile?',
        choices: ['yes', 'no',],
        // need to add a if statement to check if user picks no
        },
        {
            type: 'input',
            name: 'ProjectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Input the description of your project'
        },
        {
            type: 'input',
            name: 'technologies',
            message: 'What was the technologies used for your project?'
        },
        {
            type: 'input',
            name: 'design',
            message: 'Would you like to add a link to images of the design?'
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Explain the best use for your project?'
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Would you like to add any Contributors?'
        },
        {
            type: 'input',
            name: 'author',
            message: 'Who was the original author of this project?'
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'what license would you like to add?',
            choices: ['MIT', 'GNU', 'None'],
        },
        {
            type: 'input',
                name: 'email',
                    message: "What is your email?",
    },  
        {
            type: 'input',
                name: 'github',
                    message: "What is your github url?",
    },  
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log('data');
    })
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('./utils/README.md', generateMd(data));
    })
}

init();