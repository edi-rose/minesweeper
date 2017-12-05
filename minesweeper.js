document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
}

board.cells= [
  {hidden: true, isMine:false, row:0, col:0},
  {hidden: true, isMine:true, row:0, col:1},
  {hidden: true, isMine:false, row:0, col:2},
  {hidden: true, isMine:false, row:1, col:0},
  {hidden: true, isMine:true, row:1, col:1},
  {hidden: true, isMine:false, row:1, col:2},
  {hidden: true, isMine:true, row:3, col:0},
  {hidden: true, isMine:false, row:3, col:1},
  {hidden: true, isMine:false, row:3, col:2}];



function startGame () {
  // Don't remove this function call: it makes the game work!
  document.addEventListener("left-click", checkForWin);
  document.addEventListener("right-click", checkForWin);

  for (var i = 0; i < board.cells.length; i++) {
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i];
  }
  lib.initBoard();

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
    for( var x = 0; x <board.cells.length; x++) {
      if (.isMine === true || .isMarked === true){
        for(var y= 0; y < board.cells.length; y++) {
          if (.hidden === false) {
            displayMessage;
          }
          else {
            return;
          }
        }
      }
    }

  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
var surroundingMines = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
countSurroundingMines(cell) {
  surroundingCells = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) count++;
  }
  return count;
}
