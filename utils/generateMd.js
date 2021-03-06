// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(License) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
${data.ProjectName}
---
##  Table of Contents:
* [Description](#description)
* [Walkthrough](#walkthrough)
* [Technologies Used](#technologies-used)
* [Design](#design)
* [Wireframe](#wireframe)
* [Usage Information](#usage)
* [Contribution Guidelines](#contribution-guidelines)
* [Authors](#authors)
* [License](#license)
* [Question](#questions)


## Description:
${data.Description}

## Technologies Used:

${data.technologies}

## Design:

${data.design}

## Usage:

${data.usageInfo}

## Contribution:
${data.Contributors}

## Author:
--- 
${data.author}

## License:

${data.License}

## Questions?
---
Any additional question? Reach out via Github!
${data.email}
`;
}

// ${data.github}

module.exports = generateMarkdown;