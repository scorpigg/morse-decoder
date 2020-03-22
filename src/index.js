const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {
    let arr =[];
    let morseArr = [];
    let decodedArr = [];

    for (let i = 0; i < str.length; i = i + 10) {
    arr.push(str.slice(i, i + 10));
    }

    arr.forEach(el => {
        morseArr.push(el.replace(/00+/, '').replace(/10/g, '.').replace(/11/g, '-').replace('**********', ' '));
    });

    morseArr.forEach(el => {
        if(el === ' '){
            decodedArr.push(' ');
        }else{
            decodedArr.push(MORSE_TABLE[el]);
        }
    })
    return decodedArr.join('');
}

module.exports = {
    decode
}