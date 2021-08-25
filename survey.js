const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let str = "";
rl.question('What do you think of Node.js? ', (answer) => {
  str = str.concat('Your opinion about Node.js is ', answer);
  rl.question('What\'s your name? ', (answer2) => {
    str = str.concat('. Your name is ', answer2);
    rl.question('What\'s an activity you like doing? ', (answer3) => {
      str = str.concat('. Your favourite activity is ', answer3);
      rl.question('What do you listen to while doing that? ', (answer4) => {
        str = str.concat('. You listen to ', answer4);
        rl.question('Which meal is your favourite? ', (answer5) => {
          str = str.concat('. Your favourite meal is ', answer5);
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer6) => {
            str = str.concat('. Your favourite thing to eat for that meal is ', answer6);
            rl.question('Which sport is your absolute favourite? ', (answer7) => {
              str = str.concat('. Your favourite sport is ', answer7);
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer8) => {
                str = str.concat('. Your superpower is ', answer8);
                console.log(str);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

//What is your superpower?