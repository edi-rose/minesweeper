document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
}

board.cells= [
  {hidden: true, isMine:false, isMarked: false, row:0, col:0},
  {hidden: true, isMine:true, isMarked: false, row:0, col:1},
  {hidden: true, isMine:false, isMarked: false, row:0, col:2},
  {hidden: true, isMine:false, isMarked: false, row:1, col:0},
  {hidden: true, isMine:true, isMarked: false, row:1, col:1},
  {hidden: true, isMine:false, isMarked: false, row:1, col:2},
  {hidden: true, isMine:true, isMarked: false, row:3, col:0},
  {hidden: true, isMine:false, isMarked: false, row:3, col:1},
  {hidden: true, isMine:false, isMarked: false, row:3, col:2}];



function startGame () {
  // Don't remove this function call: it makes the game work!
   document.addEventListener("click", checkForWin);
   document.addEventListener("control", checkForWin);
  //
   for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
   }
  lib.initBoard()
}
function checkForWin () {
   for (var i = 0; i < board.cells.length; i++) {
     if (board.cells[i].hidden) {
       if (!board.cells[i].isMine) {
         return
       }
     }
     if (board.cells[i].isMine) {
       if (!board.cells[i].isMarked) {
         return
       }
     }
   }
 }
// function checkForWin () {
//  //var cell = board.cells[i];
//  for (var i = 0; i < board.cells.length; i++) {
//    if ((board.cells.isMine) && (!board.cells.isMarked)) {
//      return;
//    }
//    if ((!board.cells.isMine) && (board.cells.isMarked)) {
//      return;
//    } else if (!board.cells.hidden) {
//      lib.displayMessage('You win!')
//    } else {
//      return;
//    }
//  }
// }

//REAL SOLUTION
//  function checkForWin () {
//
// var markedMines = 0;
//  for(i = 0; i< board.cells.length; i++) {
//
//    var isMine = board.cells[i].isMine;
//    var isMarked = board.cells[i].isMarked;
//
//    if ((isMine === true) && (isMarked === true)) {
//      markedMines++;
//    }
//  }
//
//  var uncoveredSafe= 0;
//
//
//  for ( var i = 0; i <board.cells.length; i++) {
//
//    var isMine = board.cells[i].isMine;
//    var isHidden = board.cells[i].hidden;
//
//        if ((isMine === false) && (isHidden === false)){
//          uncoveredSafe++;
//   }
//  }
//  if ((markedMines === 3) || (uncoveredSafe===6)) {
//    lib.displayMessage('You win!');
// }
// }


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //  lib.displayMessage('You win!');
  // }

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
// var surroundingMines = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);

  var count = 0;

  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine){
       count++;
  }
 }
 return count;
}
