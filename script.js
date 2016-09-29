document.addEventListener('DOMContentLoaded', init)

function init() {

  var currentPlayer = 1
    var conditions = false
    var clickCount = 0


    var box1 = document.querySelector('#one')
    var box2 = document.querySelector('#two')
    var box3 = document.querySelector('#three')
    var box4 = document.querySelector('#four')
    var box5 = document.querySelector('#five')
    var box6 = document.querySelector('#six')
    var box7 = document.querySelector('#seven')
    var box8 = document.querySelector('#eight')
    var box9 = document.querySelector('#nine')

    var start = document.querySelector('#newButton')

    box1.addEventListener('click', boxClick)
    box2.addEventListener('click', boxClick)
    box3.addEventListener('click', boxClick)
    box4.addEventListener('click', boxClick)
    box5.addEventListener('click', boxClick)
    box6.addEventListener('click', boxClick)
    box7.addEventListener('click', boxClick)
    box8.addEventListener('click', boxClick)
    box9.addEventListener('click', boxClick)

    function boxClick () {
      clickCount++

      if (currentPlayer === 1) {
        this.classList.add('clickX')
      } else {
        this.classList.add('clickO')
      }
      if(clickCount >= 9) {
        conditions = true
      }
      else {
      // alert('Draw Game')
      }
      checkWin()
      resetGame()

      if(clickCount <= 9) {
        checkdraw()
      }
      checkDraw()
     console.log(box1.className)
    }


    box1.addEventListener('click', switchPlayer)
    box2.addEventListener('click', switchPlayer)
    box3.addEventListener('click', switchPlayer)
    box4.addEventListener('click', switchPlayer)
    box5.addEventListener('click', switchPlayer)
    box6.addEventListener('click', switchPlayer)
    box7.addEventListener('click', switchPlayer)
    box8.addEventListener('click', switchPlayer)
    box9.addEventListener('click', switchPlayer)

    function switchPlayer () {
      if (currentPlayer === 1) {
        currentPlayer = 2
      } else {
        currentPlayer = 1
      }
    }

    function checkWin () {
      if ((box1.classList.contains('clickX') && box2.classList.contains('clickX') && box3.classList.contains('clickX')) ||
         (box4.classList.contains('clickX') && box5.classList.contains('clickX') && box6.classList.contains('clickX')) ||
         (box7.classList.contains('clickX') && box8.classList.contains('clickX') && box9.classList.contains('clickX')) ||
         (box1.classList.contains('clickX') && box4.classList.contains('clickX') && box7.classList.contains('clickX')) ||
         (box2.classList.contains('clickX') && box5.classList.contains('clickX') && box8.classList.contains('clickX')) ||
         (box3.classList.contains('clickX') && box6.classList.contains('clickX') && box9.classList.contains('clickX')) ||
         (box1.classList.contains('clickX') && box5.classList.contains('clickX') && box9.classList.contains('clickX')) ||
         (box3.classList.contains('clickX') && box5.classList.contains('clickX') && box7.classList.contains('clickX'))) {
           alert('X wins!')
           conditions = true
      }
      else if ((box1.classList.contains('clickO') && box2.classList.contains('clickO') && box3.classList.contains('clickO')) ||
         (box4.classList.contains('clickO') && box5.classList.contains('clickO') && box6.classList.contains('clickO')) ||
         (box7.classList.contains('clickO') && box8.classList.contains('clickO') && box9.classList.contains('clickO')) ||
         (box1.classList.contains('clickO') && box4.classList.contains('clickO') && box7.classList.contains('clickO')) ||
         (box2.classList.contains('clickO') && box5.classList.contains('clickO') && box8.classList.contains('clickO')) ||
         (box3.classList.contains('clickO') && box6.classList.contains('clickO') && box9.classList.contains('clickO')) ||
         (box1.classList.contains('clickO') && box5.classList.contains('clickO') && box9.classList.contains('clickO')) ||
         (box3.classList.contains('clickO') && box5.classList.contains('clickO') && box7.classList.contains('clickO'))) {
                 alert('O wins!')
                 conditions = true
      } else {

      }
    }

    // start.addEventListener('click', resetButton)
    //
    // function resetButton () {
    //   location.reload()
    // }
    //
    // function resetGame () {
    //   if (conditions === true) {
    //     location.reload()
    //   }
    // }


    function checkDraw () {
        if ((box1.classList.contains('x') || box1.classList.contains('o')) &&
            (box2.classList.contains('x') || box2.classList.contains('o')) &&
            (box3.classList.contains('x') || box3.classList.contains('o')) &&
            (box4.classList.contains('x') || box4.classList.contains('o')) &&
            (box5.classList.contains('x') || box5.classlist.contains('o')) &&
            (box6.classList.contains('x') || box6.classList.contains('o')) &&
            (box7.classList.contains('x') || box7.classList.contains('o')) &&
            (box8.classList.contains('x') || box8.classList.contains('o')) &&
            (box9.classList.contains('x') || box9.classList.contains('o'))) {
            alert('It is a Draw!')
            conditions = true
          }
    }
    // document.getElementById('#newbutton').addEventListener('click' , fnNewGame);
    //  function fnNewGame() {
    //    location.reload(true);

  }



//   var numPlayer = 2;
//   var clickCount = 0;
//   var currentPlayer = 1;
//   var player1 = [];
//   var player2 = [];
//
//   //var winningCombi = [[], [], []]
//   var boxes = document.querySelectorAll('.box')
//
//   for (var i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener('click', boxClick)
//     // alert(this.boxClick)
//   }
//
//   function boxClick() {
//     if (currentPlayer === 1) {
//       this.classList.add('clickX');
//       player1.push(this.id)
//      alert("player1 = " + player1)
//     } else {
//       this.classList.add('clickO');
//       player2.push(this.id)
//     //  alert("player2 = " + player1)
//     }
//     switchPlayer()
//       alert('box is clicked');
//   }
//   // switchPlayer()
//
//   function switchPlayer() {
//     if (currentPlayer === 1) {
//       currentPlayer = 2
//     } else {
//       currentPlayer = 1
//     }
//   }
//   var winningCombi = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//
//
//
//   function winningCombi() {
//     for (var j = 0; j < winningCombi.length; j++) {
// if (true) {
//
// } else {
//
// }
//     }
//
//   }
//
//   document.getElementById('newbutton').addEventListener('click' , fnNewGame);
//
//   function fnNewGame() {
//     location.reload(true);
//
//   }
//
//
//
// }
