// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
# Description
${data.description}
[Description](#description)
[Technologies Used](#technologies-used)
[Design](#design)
[Usage Information](#usage)
[Contribution](#contribution)
[Authors](#authors)
[License](#license)
[Faqs](#faqs)
${data.usage}
`;
}

module.exports = generateMarkdown;

//need to fill the rest of the data in & generate licenses