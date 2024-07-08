const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate README content
const generateREADME = (answers) => {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
\`\`\`
${answers.tests}
\`\`\`

## Questions
If you have any questions, please open an issue or contact me directly at ${answers.email}. You can find more of my work at ${answers.github}.
    `;
};

// Prompt the user for input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide the test instructions:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    }
]).then((answers) => {
    // Generate README content
    const readmeContent = generateREADME(answers);

    // Write README file
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md has been generated!');
    });
});