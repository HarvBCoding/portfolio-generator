// process is a global object that represents everything going on in the app; 
// the argv property of process is an array that holds what was typed into the command line on execution so that the data can be captured and used w/in the app
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
    // this
    for (let i=0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('==============');

    // is the same as this
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);