document.addEventListener('DOMContentLoaded', init)

function init() {

  var numPlayer = 2;
  var clickCount = 0;
  var currentPlayer = 1;
  var player1 = [];
  var player2 = [];

  //var winningCombi = [[], [], []]
  var boxes = document.querySelectorAll('.box')

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClick)
    //alert(this.boxClick)
  }

  function boxClick() {
    if (currentPlayer === 1) {
      this.classList.add('clickX');
      player1.push(this.id)
    //  alert("player1 = " + player1)
    } else {
      this.classList.add('clickO');
      player2.push(this.id)
    //  alert("player2 = " + player1)
    }
    switchPlayer()
      // alert('box is clicked');
  }
  // switchPlayer()

  function switchPlayer() {
    if (currentPlayer === 1) {
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
  }
  var winningCombi = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];



  function winningCombi() {
    for (var j = 0; j < winningCombi.length; j++) {
if (true) {

} else {

}
    }

  }

  document.getElementById('newbutton').addEventListener('click' , fnNewGame);

  function fnNewGame() {
    location.reload(true);

  }



}
