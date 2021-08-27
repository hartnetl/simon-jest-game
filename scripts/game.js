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
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = {game, newGame, showScore};