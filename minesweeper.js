document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
}

board.cells= [
  {hidden: true, isMine, row:0, col:0}, {hidden: true, isMine, row:0, col:1}, {hidden: true, isMine, row:0, col:2}, {hidden: true, isMine, row:1, col:0}, {hidden: true, isMine, row:1, col:1},
  {hidden: true, isMine, row:1, col:2},
  {hidden: true, isMine, row:3, col:0},
  {hidden: true, isMine, row:3, col:1},
  {hidden: true, isMine, row:3, col:2}];

var isMine = {

}

var hidden = {

}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i=0; i<board.cells.length; i++) {
    var countSurroundingMines(cell:i);
    return countSurroundingMines=surroundingMines;
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
var count= 0;
function countSurroundingMines (cell) {
  for(i=0; i<9; i++) {
    if (cell.isMine===true) {
      var count = count+1;
    }
  }
}
