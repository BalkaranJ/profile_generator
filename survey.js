const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable! \:\) ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? What are you amazing at? ', (answer7) => {
              console.log(`My name is ${answer1}. An activity I like doing is ${answer2}. When I am ${answer2}, I like to listen to ${answer3}! My favourite meal of the day is ${answer4}. I usually like to eat ${answer5} during ${answer4}. ${answer6} is my favourite sport. ${answer7}.`);
            
              rl.close();
              });
            });
          });
        });
    });
  });
});


