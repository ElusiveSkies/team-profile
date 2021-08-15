// Generates HTML
function generateHTML(generatedCard) {
  return `
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" type="text/css" href="./lib/style.css">
      <title>Team Profiles</title>
    </head>
    <body>
      <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
        <span class="navbar-brand mb-0 h1">
          <h1>My Team</h1>
        </span>
      </nav>
      <div class="row">${generatedCard}</div>
    </body>
  </html>
  
`;
}

// Starts generation of readme
module.exports = generateHTML;
