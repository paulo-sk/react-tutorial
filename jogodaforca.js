console.log("Jogo da forca");

const areas = {
    tecnologia: ['javascript', 'blockchain'],
    signos: ['aries','touro','gemeos','cancer']
}
const keys = Object.keys(areas)
const prop = keys[Math.floor(Math.random() * keys.length)]

let randomWords = function (prop){
    const words = areas[prop]
    return words[Math.floor(Math.random() * words.length)]
}
let word = randomWords(prop)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Palavra pertence a area de "${prop}":
digite sua resposta`, function (prop,word, answer) {
    
  rl.close();
});
