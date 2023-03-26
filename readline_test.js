const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a promise based version of rl.question so we can use it in async functions
const question = (str) => new Promise(resolve => rl.question(str, resolve));

// A list of all the steps involved in our program
const steps = {
  start: async () => {
    return steps.seeCars();
  },
  seeCars: async () => {
    const seeCars = await question("Would you like to see which cars are available? Please type yes/no: ");
    if (seeCars === 'yes') { return steps.showCars(); }
    if (seeCars === 'no') { return steps.locationSearch(); }
    console.log('No worries, have a nice day');
    return steps.end();
  },
  showCars: async () => {
    console.log('showing cars');
    return steps.end();
  },
  locationSearch: async () => {
    const longlat = await question("Would you like to search by latitude or longitude instead? If yes, please type latitude and longitude: ");
    return steps.end();
  },
  end: async () => {
    rl.close();
  },
};

// Start the program by running the first step.
steps.start();

//console.log(steps.showCars)