const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let genPassOne = "";
let genPassTwo = "";
let passElOne = document.querySelector("#pass-one");
let passElTwo = document.querySelector("#pass-two");

function genPasswords() {
  passElOne.textContent = genPassOne;
  passElTwo.textContent = genPassTwo;
  for (let i = 0; i < 15; i++) {
    genPassOne = [Math.floor(Math.random() * characters.length) + 1];
    genPassTwo = [Math.floor(Math.random() * characters.length) + 1];
    passElOne.textContent += characters[genPassOne];
    passElTwo.textContent += characters[genPassTwo];
  }
}

// Scrimba solution for generating a single password

// let passwordLength = 12;

// function getRandomCharacter() {
//   let randomChar = Math.floor(Math.random() * characters.length);
//   return characters[randomChar];
// }

// function generateRandomPassword() {
//   let randomPassword = "";
//   for (let i = 0; i < passwordLength; i++) {
//     randomPassword += getRandomCharacter();
//   }
//   return randomPassword;
// }

// const generatedPasswordOne = generateRandomPassword();

// console.log("Here is a random password: ", generatedPasswordOne);