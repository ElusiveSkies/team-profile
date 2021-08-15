// // Generates badge depending on what is selected
// licenseBadge = [];

// function renderLicenseBadge(responses) {
//   if (responses.license === "MIT") {
//     licenseBadge =
//       "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//   } else if (responses.license === "Apache") {
//     licenseBadge =
//       "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0))";
//   } else if (responses.license === "GNU") {
//     licenseBadge =
//       "license[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
//   } else if (responses.license === "ISC") {
//     licenseBadge =
//       "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
//   } else if (responses.license === "Mozilla Public License") {
//     licenseBadge =
//       "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
//   } else if (responses.license === "The Unlicense") {
//     licenseBadge =
//       "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
//   }
// }

// Generates markdown for README
function generateHTML(responses) {
  let html = `< !DOCTYPE html >
  <html lang="en">
      <head>
          <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                          <title>Document</title>
                          <style>
                              .row {
                                  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.card {
                                  padding: 15px;
  border-radius: 6px;
  background-color: white;
  color: lightskyblue;
  margin: 15px;
}
.text {
                                  padding: 15px;
  border-radius: 6px;
  background-color: lightskyblue;
  color: black;
  margin: 15px;
}
.col {
                                  flex: 1;
  text-align: center;
}
</style>
</head>
                      <body>
                          <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                              <span class="navbar-brand mb-0 h1">
                                  <h1>My Team</h1>
                              </span>
                          </nav>
                          <div class="row">
                              ${getCardHtml()}
                          </div>
                      </body>

</html>
`;

  // Starts generation of readme
  module.exports = generateHTML;
