/**
 * renderLicenseBadge - Generates the license badge markdown
 * @param {string} license - License name
 * @returns {string} - License badge markdown or empty string
 */
function renderLicenseBadge(license) {
 return license ? `![License](https://img.shields.io/badge/License-${license}-blue.svg)` : '';
}

/**
* renderLicenseLink - Generates the license link markdown
* @param {string} license - License name
* @returns {string} - License link markdown or empty string
*/
function renderLicenseLink(license) {
 return license ? `[License](https://opensource.org/licenses/${license})` : '';
}

/**
* renderLicenseSection - Generates the license section of the README
* @param {string} license - License name
* @returns {string} - License section markdown or empty string
*/
function renderLicenseSection(license) {
 if (!license) return '';
 return `## License
 
This project is licensed under the ${license} license. For more details, please refer to ${renderLicenseLink(license)}.`;
}

/**
* generateMarkdown - Generates the README markdown
* @param {object} data - Data object containing README information
* @returns {string} - Generated README markdown
*/
function generateMarkdown(data) {
 return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

For further questions, feel free to reach out to me at:

- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}

For specific questions about this project, please [open an issue](https://github.com/${data.githubUsername}/${data.title}/issues) or contact me directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
