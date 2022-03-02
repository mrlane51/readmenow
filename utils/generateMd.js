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
return ` #${data.ProjectName}
# Description: 
${data.Description}(#description)

${data.technologies}(#technologies-used)

${data.design}(#design)

${data.usageInfo}(#usage)

${data.Contributors}(#contribution)

${data.author}(#authors)

${data.License}(#license)

${data.email}(#email)

${data.github}(#github)

`;
}

module.exports = generateMarkdown;