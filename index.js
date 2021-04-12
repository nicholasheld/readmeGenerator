// TODO: Include packages needed for this application
const genrateMarkdown = require('./generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of the project?',
    },

    {
        type: 'input',
        name: 'name',
        message: 'Provide a description of the project',
      },

    {
        type: 'input',
        name: 'name',
        message: 'How is the applications installed?',
      },

      {
        type: 'input',
        name: 'name',
        message: 'Enter Github username',
      },

    {
      type: 'checkbox',
      message: 'What license(s) are utilized with this project?',
      name: 'stack',
      choices: ['MIT', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What license application is covered under?',
      name: 'contact',
      choices: ['MIT', 'GNU GPLv3', 'None'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
