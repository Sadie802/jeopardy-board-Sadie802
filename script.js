//grabbing HTML elements
let colOne = document.getElementsByClassName("col-1")
let colTwo = document.getElementsByClassName("col-2")
let colThree = document.getElementsByClassName("col-3")
let colFour = document.getElementsByClassName("col-4")
let colFive = document.getElementsByClassName("col-5")
let colSix = document.getElementsByClassName("col-6")
let categories = document.getElementsByClassName("category")
let playerTurn = document.getElementById("playerTurn")
let card = document.getElementsByClassName("clue-card")
let submitBtn = document.getElementById("submit")
let passBtn = document.getElementById("pass")
let nextRound = document.getElementById("nextRound")
let userInput = document.getElementById("playerGuess")
let inputValue = userInput.value

//creating player Objects
let playerOne = {
    points: "",
    questionAnswered: false,
    turn: false
}

let playerTwo = {
    points: "",
    questionAnswered: false,
    turn: false
}


//function for playing each round
async function playRound (){
        //import questions and categories
    let response = await fetch(`data/placeholder-questions.json`);
    let placeHolder = await response.json();
    placeHolder = placeHolder.placeholderQuestions;

    //Creating an array of categories
    let categoryArray = []
    for (let i=0; i < placeHolder.length; i++){
        categoryArray.push(placeHolder[i].category)
    }

    //Converting catergory array into a Set to remove duplicates, then back to array
    let categorySet = new Set(categoryArray)
    categoryArray = [...categorySet]

    //looping through category array and assigning to textContent of category divs
    for (let i=0; i < categories.length; i++ ){
    categories[i].textContent = categoryArray[i]
    }

    //creating arrays of questions from each category
    let nature = []
    for (let i = 0; i < 10; i++){
        nature.push(placeHolder[i].question)
    }

    let animals = []
    for (let i = 10; i < 20; i++){
        animals.push(placeHolder[i].question)
    }
    
    let computers = []
    for (let i = 20; i < 30; i++){
        computers.push(placeHolder[i].question)
    }

    let mythology = []
    for (let i = 30; i < 40; i++){
        mythology.push(placeHolder[i].question)
    }

    let history = []
    for (let i = 40; i < 50; i++){
        history.push(placeHolder[i].question)
    }

    let general = []
    for (let i = 50; i < 60; i++){
        general.push(placeHolder[i].question)
    }

    //creating array of answers for each category
    let natureAnswers = []
    for (let i = 0; i < 10; i++){
        natureAnswers.push(placeHolder[i].answer)
    }

    let animalsAnswers = []
    for (let i = 10; i < 20; i++){
        animalsAnswers.push(placeHolder[i].question)
    }
    
    let computersAnswers = []
    for (let i = 20; i < 30; i++){
        computersAnswers.push(placeHolder[i].question)
    }

    let mythologyAnswers = []
    for (let i = 30; i < 40; i++){
        mythologyAnswers.push(placeHolder[i].question)
    }

    let historyAnswers = []
    for (let i = 40; i < 50; i++){
        historyAnswers.push(placeHolder[i].question)
    }

    let generalAnswers = []
    for (let i = 50; i < 60; i++){
        generalAnswers.push(placeHolder[i].question)
    }


    //pass, submit, and next round buttons disabled at start of game
    //"turning on" player one's turn, and "turning off" player two's turn
    submitBtn.disabled = true;
    passBtn.disabled = true;
    nextRound.disabled = true;
    playerOne.turn = true;
    playerTwo.turn = false;

    //displaying which players turn it is 
    if (playerOne.turn === true){
        playerTurn.textContent = 'Players Turn: Player 1';
    } else if (playerTwo.turn === true){
        playerTurn.textContent='Players Turn: Player 2';
    }
   
    //creating click event for each column in grid to change text to a question
    for (let i=0; i < card.length; i++){
        colOne[i].addEventListener('click', (e) => {
            e.preventDefault();
            colOne[i].textContent = nature[i]
            submitBtn.disabled = false;
            passBtn.disabled = false;
        })
        colTwo[i].addEventListener('click', (e) => {
            e.preventDefault();
            colTwo[i].textContent = animals[i];
            submitBtn.disabled = false;
            passBtn.disabled = false;
        })
        colThree[i].addEventListener('click', (e) => {
            e.preventDefault();
            colThree[i].textContent = computers[i];
            submitBtn.disabled = false;
            passBtn.disabled = false;
        })
        colFour[i].addEventListener('click', (e) => {
            e.preventDefault();
            colFour[i].textContent = mythology[i];
            submitBtn.disabled = false;
            passBtn.disabled = false;
        })
        colFive[i].addEventListener('click', (e) => {
            e.preventDefault();
            colFive[i].textContent = history[i];
            submitBtn.disabled = false;
            passBtn.disabled = false;
        })
        colSix[i].addEventListener('click', (e) => {
            e.preventDefault();
            colSix[i].textContent = general[i];
            submitBtn.disabled = false;
            passBtn.disabled = false;
        })
    }
    passBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (playerOne.turn === true){
            playerOne.turn = false;
            playerTwo.turn = true;
            window.alert('Player 2 now has the option to answer this question')
        }else if (playerTwo.turn === true){
            playerOne.turn = true;
            playerTwo.turn = false;
            window.alert('Player 1 now has the option to answer this question')
        }
    })

}
playRound()
