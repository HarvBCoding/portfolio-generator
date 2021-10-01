const inquirer = require('inquirer');

inquirer
    // the prompt method can receive an array of objects in it's argument known as the question object
    // the properties of the question object identify the type, name and question message
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    // the answers object is returned as a promise
    .then(answers => console.log(answers));
// // The require statement is a built-in function that's globally available in node.js
// const fs = require('fs');

// // to use functions from other js files, use require('./relative-path)
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', pageHTML, err => {
//     if(err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output');
// });