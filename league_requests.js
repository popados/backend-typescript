
// const fs = require('fs')

// fs.readFile('config.txt', (err, inputD) => {
//    if (err) throw err;
//       console.log(inputD.toString());
// })

// const url = "https://na1.api.riotgames.com/lol/status/v4/platform-data?api_key="

//var query_url = url + apiKey.toString()

// console.log(inputD.data)


// const endpoint = "https://na1.api.riotgames.com/lol/status/v4/platform-data=";
// const requestOptions = {
//   method: 'GET',
//   headers: {
//     "X-Riot-Token": apiKey
//   }
// };
//


// const fs = require('fs/promises');

// async function example() {
//   try {
//     const data = await fs.readFile('config.txt', { encoding: 'utf8' });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example()




//basic file output

// const fs = require('fs');

// fs.readFile('config.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const fs = require('fs');

// fs.readFile('config.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });


const fs = require('fs');
// const rl =  require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout})

function getData() {
try {
  const data = fs.readFileSync('config.txt', 'utf8');
  console.log(data);
  return data
} catch (err) {
  console.error(err);
}
}



// function getUserName(){
//     //     rl.setPrompt(`What is your age? `);
//     //     rl.prompt();
//     //     rl.on('line', (age) => {
//     //         console.log(`Age received by the user: ${age}`);
//     //         rl.close();
//     //     })
//     rl.question('Who are you?', (name) => {
//         console.log(`Hey there ${name}!`);

//         rl.close();
        
//           });
//     }
        
        

//getUserName()
getData()

var url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/kitingsince90/" + getData()
fetch(url)
.then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));


// var joined = [url, ]

// console.log(url)
// getAPIData(url)




//console.log(data)
