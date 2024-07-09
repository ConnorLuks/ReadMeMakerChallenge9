const inquirer = require("inquirer");
const fs = require("fs");
const { BADSTR } = require("dns");

// Function to generate README content
var generateREADME = (answers) => {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [How To Use](#howtouse)
- [Links] (#links)
- [Screenshots] (#screenshots)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)

## Installation
\`\`\`
${answers.installation}
\`\`\`

## How To Use
${answers.howtouse}

## Links
\`\`\`
${answers.links}
\`\`\`

## Screenshots
${answers.screenshots}

## License
This project is licensed under the ${answers.license} license.

## Credits
${answers.credits}

## Questions
If you have any questions, please open an issue on the project reop or you can contact me at ${answers.email}. You can find more of my projects at ${answers.github}.
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
        name: 'howtouse',
        message: 'Provide the usage information:'
    },
    {
        type: 'input',
        name: 'links',
        message: 'Provide links to the website:'
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'Provide direct links to screenshots:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter credited people/sources for the project:'
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
        
]).then((answers) => {
    // Generate README content
    const readmeContent = generateREADME(answers);

    // Write README file
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md has been generated!');
    });
});