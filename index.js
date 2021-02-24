const inquirer = require('inquirer');
const fs = require('fs');

const writeResponse = (response) => {
    return `
# ${response.title}

![GitHub license](https://.svg)

## Description

${response.description}

## Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Contributing](#Contributing)

* [Tests](#Tests)

* [Questions](#Questions)

## Installation

To install the required dependancies, please run the following command:

\`\`\`
${response.install} 
\`\`\`

## Usage

${response.usage}

## License

This project is licensed under the ${response.license} license.

## Contributing

${response.contribute}

## Tests

To run tests, please run the following command:

\`\`\`
${response.test}
\`\`\`

## Questions

If you have any questions conatact me at ${response.email}. You can find more of my work at ${response.github}
`
};

inquirer
    .prompt([
        {
           type: 'input',
           message: "What is your projects name?",
           name: 'title', 
        },
        {
            type: 'input',
            message: "Provide a description of your project",
            name: 'description',
        },
        {
            type: 'input',
            message: "What commands need to be run to install dependencies?",
            name: 'install',
        },
        {
            type: 'input',
            message: "What information will the user need in order to use the repo?",
            name: 'usage',
        },
        {
            type: 'input',
            message: "What information will the user need in order to contribute the repo?",
            name: 'contribute',
        },
        {
            type: 'input',
            message: "What commands need to be run to run tests?",
            name: 'test',
        },
        {
            type: 'list',
            message: "What kind of license does your project use?",
            choices: [ "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
            name: 'license',
        },
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'github',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
        },
    ])

    .then ((response) => {

        const genRead = writeResponse(response)

        fs.writeFile('README.md', genRead, (err) =>
        err ? console.log(err) : console.log("README successfully created!"))
        
    });