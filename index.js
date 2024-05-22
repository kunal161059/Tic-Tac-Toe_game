let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");


let counter = 0;

let turnO = true; //PlayerX or PlayerO

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;

        }
        else {
            box.innerText = "X";
            turnO = true;
            
        }
        box.disabled = true;//to stop button to be pressed twice


        checkWinner();
        counter++;
        checkCount();
    })
})

const checkCount = () => {
    if (counter == 9) {
        showDraw();
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    counter= 0;

}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for (let pattern of winPattern) {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 === box2 && box2 === box3) {
                console.log("Winner", box1)//box1=box2=box3 toh koi bhi print kra lo
                showWinner(box1);
            }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
