// Our game object
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    lastButton: "",
    turnInProgress: false,
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    /*
        This needs to: 
            Reset score to zero
            Empty the playerMoves array
            Empty the currentGame array
    */
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMoves.push(move);
                    playerTurn();
                };
            });
            circle.setAttribute("data-listener", "true");
        };
    };
    showScore();
    addTurn();
}

function addTurn() {
    /* This function needs to 
        Clear the playerMoves array
        Randomly add a button ID to the currentGame array
        Call showTurns() function
    */
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // The above calculates a number between 0 and 3, to choose from the choices array which has 4 buttons
    showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

function showTurns() {
    /* This is setting this interval turning the lightsOn,  
incrementing the game turnNumber,  and then turning them off again. */
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
};

function playerTurn() {
    /* This function should:
        Check if the player move matches the computer's move
        If we're at the end of a sequence then increment the score and add another turn
        If the moves don't match then display an alert and start a new game */
    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length == game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert("Wrong move!");
        newGame();
    }
}

module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn,
    showTurns,
    playerTurn
};