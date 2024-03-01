
//board
let board;
let boardWidht = 360;
let boardHeight = 640;
let context;

//bird
let birdWidht = 34;
let birdHeight = 24;
let birdX = boardWidht/8;
let birdY = boardHeight/2;

let bird = {
    x : birdX,
    y : birdY,
    widht : birdWidht,
    height : birdHeight
}

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.widht = boardWidht;
    context = board.getContext("2d"); //use for draw
}