// Our game object
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1","button2", "button3", "button4"],
}

// Our nameGame function
/*
    This needs to: 
        Reset score to zero
        Empty the playerMoves array
        Empty the currentGame array
*/

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
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
//    showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = {game, newGame, showScore, addTurn};