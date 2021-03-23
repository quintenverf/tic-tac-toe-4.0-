let keuze = true;
let keuze1 = true;

let turn = 0

const winnerDinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function getBoard() {
    return [[
        document.getElementById("output"+1).innerText,
        document.getElementById("output"+4).innerText,
        document.getElementById("output"+7).innerText]
    , [
        document.getElementById("output"+2).innerText,
        document.getElementById("output"+5).innerText,
        document.getElementById("output"+8).innerText]
    , [
        document.getElementById("output"+3).innerText,
        document.getElementById("output"+6).innerText,
        document.getElementById("output"+9).innerText]]
}

function tick () {
    target = document.getElementById("turn")
    target.innerText = turn
}



for (i=1; i<=9;i++) {
    klikTarget = "klik"+i
    console.log(klikTarget)

    f = function (i) {
        return () => {
            elemTarget = "output" + (i);

            elem = document.getElementById(elemTarget);
            player = (turn % 2 == 0) ? 1 : 2

            if (elem.innerText == "*") {
                switch (player) {
                    case 1:
                        elem.innerText = "O"
                        break;
                    case 2:
                        elem.innerText = "X"
                        break;
                }
                turn++
            } else {
                console.log("Click another cell")
            }
            console.log(elemTarget + " " + i)
            tick()
        }
    }

    document.getElementById(klikTarget).addEventListener("click", f(i));
}


tick()