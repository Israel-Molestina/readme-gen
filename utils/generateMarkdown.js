// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    let badge;

    switch(data.license) {
        case 'MIT': 
            badge = "https://img.shields.io/badge/license-MIT-green";
            break;
        
        case 'APACHE 2.0': 
            badge = "https://img.shields.io/badge/license-APACHE2.0-blule";
            break;

        case 'GPL 3.0': 
            badge = "https://img.shields.io/badge/license-GPL3.0-red";
            break;

        case 'BSD 3': 
            badge = "https://img.shields.io/badge/license-BSD3-orange";
            break;

        case 'None': 
            badge = '';
            break;

    }
};

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    let link;

    switch(data.license) {
        case 'MIT': 
            link = "https://spdx.org/licenses/MIT.html";
            break;
        
        case 'APACHE 2.0': 
            link = "https://spdx.org/licenses/Apache-2.0.html";
            break;

        case 'GPL 3.0': 
            link = "https://spdx.org/licenses/GPL-3.0-or-later.html"
            ;
            break;

        case 'BSD 3': 
            link = "https://spdx.org/licenses/BSD-3-Clause.html";
            break;

        case 'None': 
            link = '';
            break;

    }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// function to generate markdown for README
function generateMarkdown (data) {
    return `
# ${data.title}

![GitHub license](${renderLicenseBadge.badge})

## Description

${data.description}

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
${data.install} 
\`\`\`

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contribute}

## Tests

To run tests, please run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions conatact me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github})
`
};


module.exports = generateMarkdown;
