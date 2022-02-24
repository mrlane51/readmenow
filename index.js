// packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');

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


inquirer.prompt(questions).then((answers) => {
    console.log('\nReadMeTemplate:');
    console.log(JSON.stringify(answers, null, '  '));
});

// extra optional types of prompts
// {
//     type: 'list',
//         name: 'size',
//             message: 'What size do you need?',
//                 choices: ['Large', 'Medium', 'Small'],
//                     filter(val) {
//         return val.toLowerCase();
//     },
// },
// {
//     type: 'rawlist',
//         name: 'beverage',
//             message: 'You also get a free 2L beverage',
//                 choices: ['Pepsi', '7up', 'Coke'],
//     },
// {
//     type: 'list',
//         name: 'prize',
//             message: 'For leaving a comment, you get a freebie',
//                 choices: ['cake', 'fries'],
//                     when(answers) {
//         return answers.comments !== 'Nope, all good!';
//     },
// },


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();