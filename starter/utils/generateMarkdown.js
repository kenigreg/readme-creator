// function to generate markdown for README
function generateMarkdown(data) {

    const licenseBadge = {
        ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        Eclipse: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
        IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }

    // conditional statement to check chosen license badge
    let licenseKey;
        if (`${data.license}` in licenseBadge) {
            licenseKey = licenseBadge[`${data.license}`];
        }
    
    // codes to display list of contributors
    const contributors = data.contributors.split(",");
  let contributorsString = "";
  contributors.forEach((contributor) => {
    contributorsString += "* " + contributor.trim() + "\n";
  });
    
    // codes to display Table of content
    const tableofContent = data.tableofcontent.split(",");
    let tableofContentString = "";
    tableofContent.forEach((content) => {
      tableofContentString += "* " + "[" + content.trim() + "]" + "(" + "#" + content.trim().toLowerCase() + ")" + "\n";
  });
    
    // code to validate email address provided for Questions section
    let questionSection;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailProvided = data.github;
    if (emailProvided.match(regex)) {
        questionSection = "If you have further questions about the application or to contribute, please send email to " + "<" + emailProvided + ">";
    }
    else {
        questionSection =
           "For further contribution, please visit my github page at " + "[" + emailProvided + "]" + "(" + "https://github.com/" + emailProvided + ")"
    };


    return `# ${data.title} ${licenseKey}

## Description
${data.description}

## Table of Contents
${tableofContentString}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the license of ${data.license} ${licenseKey}

## Contributing
See the contributors to the project below:
 
${contributorsString}

## Tests
${data.test}

## Questions
${questionSection}
    
  
  `;
  }
  
  module.exports = generateMarkdown;
  