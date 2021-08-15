const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/generateHTML.js");
let generatedCard = "";

const teamMembers = [];

function init() {
  addMember();
}

// Start of questions
function addMember() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your team member's name?",
        name: "name",
      },
      {
        type: "list",
        message: "What is your team member's role?",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
      {
        type: "input",
        message: "What is your team member's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your team member's email address?",
        name: "email",
      },
    ])
    // Function to determine unique value needed dependent on sub class
    .then(function ({ name, role, id, email }) {
      let roleQuestion = "";
      if (role === "Engineer") {
        roleQuestion = "GitHub username";
      } else if (role === "Intern") {
        roleQuestion = "school name";
      } else {
        roleQuestion = "office phone number";
      }
      inquirer
        .prompt([
          {
            type: "input",
            message: `What is your team member's ${roleQuestion}?`,
            name: "roleInfo",
          },
          {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes", "No"],
            name: "additionalMembers",
          },
        ])
        // Adding values to sub classes determined by role
        .then(function ({ roleInfo, additionalMembers }) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          teamMembers.push(newMember);
          addHTML(newMember);
          if (additionalMembers === "Yes") {
            addMember();
          } else {
            createHtml();
          }
        });
    });
}

async function addHTML(newMember) {
  // return new Promise(function() {
  const name = newMember.getName();
  const role = newMember.getRole();
  const id = newMember.getId();
  const email = newMember.getEmail();
  let roleQuestion = "";
  console.log(roleQuestion);

  // Statement to determine what role specific value is needed
  function uniqueQuestion() {
    if (role === "Engineer") {
      roleQuestion = "GitHub username";
      roleInfo = `<a href="https://github.com/${newMember.getGithub()}" target="_blank">${newMember.getGithub()}</a>`;
    } else if (role === "Intern") {
      roleQuestion = "school name";
      roleInfo = newMember.getSchool();
    } else {
      roleQuestion = "office phone number";
      roleInfo = newMember.getOffice();
    }
  }
  uniqueQuestion();

  // Function to create card for each team member
  function getCardHtml() {
    generatedCard += `<div class="card justify-content-center align-items-center" style="width: 18rem;">
          <div class="col card-header">
              <h4>${name}</h4>
          </div>
          <div class="col card-header">
              <h4>${role}</h4 >
          </div >
          <ul class="list-group text">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${email}">${email}</a></li>
              <li class="list-group-item">${roleQuestion}: ${roleInfo}</li>
          </ul>
      </div> `;
  }
  getCardHtml();
}

// // Function call to initialize app
init();

// Function to write html file
async function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("File created");
  });
}

// Fucntion to pass along parameters to create html file
async function createHtml() {
  try {
    let html = generateHTML(generatedCard);
    await writeToFile("genTeamProfile.html", html);
  } catch (error) {
    console.log(error);
  }
}
