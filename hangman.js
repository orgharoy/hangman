const wordList = [
  "play",
  "pier",
  "heel",
  "steak",
  "joint",
  "flock",
  "spine",
  "home",
  "salad",
  "tank",
];

let wordHTML = "";
let usedHTML = "";

const userInput = document.getElementById("input");
const wordBox = document.querySelector(".word");
const manBody = document.querySelectorAll(".man-body");
const winBox = document.querySelector(".winner");
const looseBox = document.querySelector(".looser");
const notice = document.querySelector(".notice");
const used = document.querySelector(".used-items");
const looserWord = document.querySelector(".looser-word");

let index = Math.floor(Math.random() * 10);

let word = wordList[index];
let wordLetters = [];

let finalWordLetters = [];
let usedLetters = [];
let life = 4;
let done = 0;

for(let letter of word){
  if(wordLetters.indexOf(letter) === -1){
    wordLetters.push(letter);
  }
}


for (let i = 0; i < word.length; i++) {
  wordHTML += "<div class='guess-box'> <p class='guess-box-letter'></p> </div>";
}

wordBox.innerHTML = wordHTML;

const guessBoxLetter = document.querySelectorAll(".guess-box-letter");


const submit = () => {
  let input = userInput.value.toLowerCase();
  if(life === 13){
    notice.innerHTML = "Game Over!";
    looseBox.classList.add('show');
    looserWord.innerHTML = "Your word was: " + word;
  } else if(input.length < 1 || input.length > 1){
    notice.innerHTML = "Only 1 letter at a time brother";
  } else if(usedLetters.indexOf(input) !== -1){
    notice.innerHTML = "Already Used That!";
  } else {
    if(wordLetters.indexOf(input) === -1){
      notice.innerHTML = "Wrong Letter :(";
      for(let i = 0; i <= manBody.length; i++ ){
        manBody[life].classList.add('show');
      }
      life = life + 1;
    }
    else {
      for(let i=0; i<word.length; i++){
        if(word[i] === input){
          for(j=0; j<guessBoxLetter.length; j++){
            guessBoxLetter[i].innerHTML = word[i];
          }
        }
      }
      done = done + 1;
      if(done === wordLetters.length){
        notice.innerHTML = "You Win!";
        winBox.classList.add("show");
      }
    }
  }

  if(usedLetters.indexOf(input) === -1){
    usedLetters.push(input);
    usedHTML += `<h2 class="used-letters">${input}</h2>`;
  }

  
  used.innerHTML = usedHTML;
  userInput.value = "";

};


const reload = () => {
  location.reload(); 
}

console.log(word);
 