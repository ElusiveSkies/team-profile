// Included packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./src/generateMarkdown.js");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: function(name) {
      if (name.length < 1) {
        return console.log("You must enter a title");
      }
      return true;
    }
  },
  {
    type: "input",
    message: "Briefly describe your project:",
    name: "description",
    validate: function(name) {
      if (name.length < 1) {
        return console.log("You must enter a description");
      }
      return true;
    }
  },
  {
    type: "list",
    message: "What kind of license is appropriate for this project?",
    name: "license",
    choices: [
      "MIT",
      "Apache",
      "GNU",
      "ISC",
      "Mozilla Public License",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
  },
  {
    type: "input",
    message:
      "Enter instructions for your project and examples of how to use it",
    name: "usage",
  },
  {
    type: "input",
    message: "How might others contribute?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How may your application be tested?",
    name: "test",
  },
  {
    type: "input",
    message: "How can you be contacted?",
    name: "questions",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
];

// function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("File created");
  });
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize app
async function init() {
  try {
    const responses = await inquirer.prompt(questions);
    console.log(responses);

    const html = generateMarkdown(responses);

    await writeFileAsync("genTeamProfile.html", html);
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init();