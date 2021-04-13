// Packages needed for this application
const markdown = require('./util/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = [

{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title'
   },
   {
    type: 'input',
    message: 'Provide a short description of the project:',
    name: 'description',
   },
   {
    type: 'input',
    message: 'How was the project created, including technologies used?',
    name: 'process',
   },
   {
    type: 'input',
    message: 'Please include installation instructions:',
    name: 'installation',
   },
   {
    type: 'input',
    message: 'Please include an example of usage:',
    name: 'usage',
   },
   {
    type: 'input',
    message: 'Please include a screenshot of the project:',
    name: 'screenshot',
   },
   {
    type: 'input',
    message: 'How can someone contribute to the project?',
    name: 'contributing',
   },
   {
    type: 'input',
    message: 'What command lines are required for the application?',
    name: 'tests',
   },
   {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
   },
   {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
   },
   {
    type: 'list',
    message: 'Please select a license, if applicable:',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPLv3', 'none'],
   }
];

// Function to write README file
function writeToFile(fileName, template) {
    fs.writeFile(fileName, template, function (err) {
        console.log(fileName);

        if (err) {
            return console.log(err);
        } else {
            return console.log("Success, readme file has been created!");
        }
    })
}

//  This is the function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers);
            var readme = markdown(answers);
            // console.log(readme);
            writeToFile('./Generated-README/README.md', readme);
        });
}

// Function call to initialize app
init();
