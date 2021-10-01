// The rewuire statement is a built-in function that's globally available in node.js
const fs = require('fs');
// to use functions from other js files, use require('./relative-path)
const generatePage = require('./src/page-template.js');

// process is a global object that represents everything going on in the app; 
// the argv property of process is an array that holds what was typed into the command line on execution so that the data can be captured and used w/in the app
const profileDataArgs = process.argv.slice(2, process.argv.length);
// assignment destructuring assigns elements of an array to variable names in a single expression
const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
    if(err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output');
})