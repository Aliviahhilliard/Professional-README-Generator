const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

/**
 * questions - Array of questions for user input
 */
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Provide your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your email address:',
  },
];

/**
 * writeToFile - Writes the README file
 * @param {string} fileName - File name
 * @param {object} data - Data to write
 */
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFileSync(fileName, markdown);
}

/**
 * init - Initialize the application
 */
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      writeToFile('README.md', answers);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
