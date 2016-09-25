var Xturn = true;
        var nummoves = 0;
        var cat;
        function tictactoe(square) {
            var value = square.value;
            var doc1 = document.getElementById("k1").value;
            var doc2 = document.getElementById("k2").value;
            var doc3 = document.getElementById("k3").value;
            var doc4 = document.getElementById("k4").value;
            var doc5 = document.getElementById("k5").value;
            var doc6 = document.getElementById("k6").value;
            var doc7 = document.getElementById("k7").value;
            var doc8 = document.getElementById("k8").value;
            var doc9 = document.getElementById("k9").value;

            for (nummoves = 0; nummoves < 2; nummoves++) {

                if (doc1 == "X") {
                    cat = document.getElementById("k2").value = "O";
                    Xturn = true;
                }

                if (doc2 = "X") {
                    cat = document.getElementById("k4").value = "O";
                    Xturn = true;
                }

                if (doc3 == "X") {
                    cat = document.getElementById("k5").value = "O";
                    Xturn = true;
                }

                if (doc4 == "X") {
                    car = document.getElementById("k9").value = "O";
                }
            }

            for (nummoves = 2; nummoves < 3; nummoves++) {

                if (doc1 == "X") {
                    cat = document.getElementById("k7").value = "O";
                    Xturn = true;
                }

            }

            if (value != "X" && value != "O") {
                if (Xturn == true) {
                    square.value = "X";
                    return Xturn = false;
                    nummoves++;
                } else if (Xturn == false) {
                    square.value = "O";
                    return Xturn = true;
                    nummoves++;
                }
            } else {
                alert("That square has been clicked.");
            }
        }
