//grabbing HTML elements
let colOne = document.getElementsByClassName("col-1");
let colTwo = document.getElementsByClassName("col-2");
let colThree = document.getElementsByClassName("col-3");
let colFour = document.getElementsByClassName("col-4");
let colFive = document.getElementsByClassName("col-5");
let colSix = document.getElementsByClassName("col-6");
let categories = document.getElementsByClassName("category");
let playerTurn = document.getElementById("playerTurn");
let card = document.getElementsByClassName("clue-card");
let submit = document.getElementById("submit");
let passBtn = document.getElementById("pass");
let nextRound = document.getElementById("nextRound");
let submitBtn = document.getElementById("submitBtn");
let pOneScore = document.getElementById("pOneScore")
let pTwoScore = document.getElementById("pTwoScore")

let cardAnswer;
let initialValue;
let cardClicked;
let cardClickedStatus;

//creating player Objects
let playerOne = {
  points: "",
  questionAnswered: false,
  turn: false,
};

let playerTwo = {
  points: "",
  questionAnswered: false,
  turn: false,
};

//function for playing each round
async function playRound() {
  //import questions and categories
  let response = await fetch(`data/placeholder-questions.json`);
  let placeHolder = await response.json();
  placeHolder = placeHolder.placeholderQuestions;

  //Creating an array of categories
  let categoryArray = [];
  for (let i = 0; i < placeHolder.length; i++) {
    categoryArray.push(placeHolder[i].category);
  }

  //Converting catergory array into a Set to remove duplicates, then back to array
  let categorySet = new Set(categoryArray);
  categoryArray = [...categorySet];

  //looping through category array and assigning to textContent of category divs
  for (let i = 0; i < categories.length; i++) {
    categories[i].textContent = categoryArray[i];
  }

  //creating arrays of questions and answers from each category
  let nature = [];
  for (let i = 0; i < 10; i++) {
    nature.push(placeHolder[i].question + ":" + placeHolder[i].answer);
  }

  let animals = [];
  for (let i = 10; i < 20; i++) {
    animals.push(placeHolder[i].question + ":" + placeHolder[i].answer);
  }

  let computers = [];
  for (let i = 20; i < 30; i++) {
    computers.push(placeHolder[i].question + ":" + placeHolder[i].answer);
  }

  let mythology = [];
  for (let i = 30; i < 40; i++) {
    mythology.push(placeHolder[i].question + ":" + placeHolder[i].answer);
  }

  let history = [];
  for (let i = 40; i < 50; i++) {
    history.push(placeHolder[i].question + ":" + placeHolder[i].answer);
  }

  let general = [];
  for (let i = 50; i < 60; i++) {
    general.push(placeHolder[i].question + ":" + placeHolder[i].answer);
  }

  let natureQA = [];
  for (let i = 0; i < 1; i++) {
    nature.forEach((thing) => {
      thing = thing.toString();
      thing = thing.split(":");
      natureQA.push(thing);
    });
  }

  let animalsQA = [];
  for (let i = 0; i < 1; i++) {
    animals.forEach((thing) => {
      thing = thing.toString();
      thing = thing.split(":");
      animalsQA.push(thing);
    });
  }

  let computersQA = [];
  for (let i = 0; i < 1; i++) {
    computers.forEach((thing) => {
      thing = thing.toString();
      thing = thing.split(":");
      computersQA.push(thing);
    });
  }

  let mythologyQA = [];
  for (let i = 0; i < 1; i++) {
    mythology.forEach((thing) => {
      thing = thing.toString();
      thing = thing.split(":");
      mythologyQA.push(thing);
    });
  }

  let historyQA = [];
  for (let i = 0; i < 1; i++) {
    history.forEach((thing) => {
      thing = thing.toString();
      thing = thing.split(":");
      historyQA.push(thing);
    });
  }

  let generalQA = [];
  for (let i = 0; i < 1; i++) {
    general.forEach((thing) => {
      thing = thing.toString();
      thing = thing.split(":");
      generalQA.push(thing);
    });
  }

  //pass, submit, and next round buttons disabled at start of game
  //"turning on" player one's turn, and "turning off" player two's turn
  submitBtn.disabled = true;
  passBtn.disabled = true;
  nextRound.disabled = true;
  playerOne.turn = true;
  playerTwo.turn = false;

  //displaying which players turn it is
  if (playerOne.turn === true) {
    playerTurn.textContent = "Players Turn: Player 1";
  } else if (playerTwo.turn === true) {
    playerTurn.textContent = "Players Turn: Player 2";
  }
  //creating click event for each column in grid to change text to a question
  for (let i = 0; i < card.length; i++) {
    if (colOne[i]) {
      colOne[i].addEventListener("click", (e) => {
        e.preventDefault();
        cardClicked = e.target
        cardClickedStatus = true
        initialValue = colOne[i].textContent
        colOne[i].textContent = natureQA[i][0];
        submitBtn.disabled = false;
        passBtn.disabled = false;
        cardAnswer = natureQA[i][1].toLowerCase();
        guessing();
      });
    }
    if (colTwo[i]) {
      colTwo[i].addEventListener("click", (e) => {
        e.preventDefault();
        cardClicked = e.target
        initialValue = colTwo[i].textContent
        colTwo[i].textContent = animalsQA[i][0];
        submitBtn.disabled = false;
        passBtn.disabled = false;
        cardAnswer = animalsQA[i][1].toLowerCase();
        guessing();
      });
    }
    if (colThree[i]) {
      colThree[i].addEventListener("click", (e) => {
        e.preventDefault();
        cardClicked = e.target
        initialValue = colThree[i].textContent
        colThree[i].textContent = computersQA[i][0];
        submitBtn.disabled = false;
        passBtn.disabled = false;
        cardAnswer = computersQA[i][1].toLowerCase();
        guessing();
      });
    }
    if (colFour[i]) {
      colFour[i].addEventListener("click", (e) => {
        e.preventDefault();
        cardClicked = e.target
        initialValue = colFour[i].textContent
        colFour[i].textContent = mythologyQA[i][0];
        submitBtn.disabled = false;
        passBtn.disabled = false;
        cardAnswer = mythologyQA[i][1].toLowerCase();
        guessing();
      });
    }
    if (colFive[i]) {
      colFive[i].addEventListener("click", (e) => {
        e.preventDefault();
        cardClicked = e.target
        initialValue = colFive[i].textContent
        colFive[i].textContent = historyQA[i][0];
        submitBtn.disabled = false;
        passBtn.disabled = false;
        cardAnswer = historyQA[i][1].toLowerCase();
        guessing();
      });
    }
    if (colSix[i]) {
      colSix[i].addEventListener("click", (e) => {
        e.preventDefault();
        cardClicked = e.target
        initialValue = colSix[i].textContent
        colSix[i].textContent = generalQA[i][0];
        submitBtn.disabled = false;
        passBtn.disabled = false;
        cardAnswer = generalQA[i][1].toLowerCase();
        guessing();
      });
    }
  }

  passBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (playerOne.turn === true) {
      playerOne.turn = false;
      playerTwo.turn = true;
      alert("Player 2 now has the option to answer this question");
    } else if (playerTwo.turn === true) {
      playerOne.turn = true;
      playerTwo.turn = false;
      alert("Player 1 now has the option to answer this question");
    }
  });

  function guessing() {
    submit.addEventListener("submit", (e) => {
      e.preventDefault();
      if (playerOne.turn === true && submit.guess.value === cardAnswer) {
          playerOne.points += initialValue
          pOneScore.textContent = `Player 1 Score: ${playerOne.points}`
        alert(`Correct! ${initialValue} has been added to your score`);
        closeCard()
      } else {
        alert("WRONG");
      } 
      if (playerTwo.turn === true && submit.guess.value === cardAnswer) {
          playerTwo.points += initialValue
          pTwoScore.textContent = `Player 2 Score: ${playerTwo.points}`
          alert(`Correct! ${initialValue} has been added to your score`)
      }
    });
  }

  function closeCard(){
    submit.guess.value = ""
    cardClicked.textContent = ""
  }
}
playRound();
