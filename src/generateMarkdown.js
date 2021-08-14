// Generates badge depending on what is selected
licenseBadge = [];

function renderLicenseBadge(responses) {
  if (responses.license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (responses.license === "Apache") {
    licenseBadge =
      "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0))";
  } else if (responses.license === "GNU") {
    licenseBadge =
      "license[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
  } else if (responses.license === "ISC") {
    licenseBadge =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (responses.license === "Mozilla Public License") {
    licenseBadge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (responses.license === "The Unlicense") {
    licenseBadge =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
}

// Generates markdown for README
function generateMarkdown(responses) {
  let contents = [`## Table of Contents
    * [Description](#Description)`];
  // If used adds values to the table of contents and the body of the readme
  if (responses.install !== "") {
    contents += `
    * [Installation](#Installation)`;
    installContents = `## Installation

    ${responses.install}`;
  } else {
    installContents = "";
  }

  if (responses.usage !== "") {
    contents += `
    * [Usage](#Usage)`;
    usageContents = `## Usage

   ${responses.usage}`;
  } else {
    usageContents = "";
  }

  if (responses.license !== "") {
    contents += `
    * [License](#License)`;
    licenseContents = `## License

   ${responses.license} License.
   For more information click the badge at the top of the page.`;
  }

  if (responses.contribute !== "") {
    contents += `
    * [Contributions](#Contributions)`;
    contributeContents = `## Contributions

   ${responses.contribute}`;
  } else {
    contributeContents = "";
  }

  if (responses.test !== "") {
    contents += `
    * [Tests](#Tests)`;
    testContents = `## Tests

   ${responses.test}`;
  } else {
    testContents = "";
  }

  if (responses.questions !== "") {
    contents += `
    * [Questions](#Questions)`;
    questionsContents = `## Questions

   For any questions please contact me at ${responses.questions}.
   [![${responses.github}](https://api.github.com/users/${responses.github})]`;
  } else {
    questionsContents = "";
  }

  renderLicenseBadge(responses);

  // Template for the readme
  return `${licenseBadge}
# ${responses.title}

${contents}

## Description

   ${responses.description}

${installContents}
  
${usageContents}

${licenseContents}  

${contributeContents}

${testContents}

${questionsContents}

`;
}

// Starts generation of readme
module.exports = generateMarkdown;
