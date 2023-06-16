const boxes = document.querySelectorAll(".box");
const player_no = document.querySelector(".Player-no");
const newGameBtn = document.querySelector(".btn");

 
 
let currentPlayer;
let gameGrid;
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
 
function initGame() {                                          
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];                       
      
    boxes.forEach((box, index) => {                                //UI pr empty bhi karna padega boxes ko
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";                  // this means that cursor pointer appear on all boxes;
        boxes[index].classList.remove("win");                     
    });
    player_no.innerText = `Current Player - ${currentPlayer}`;
}

initGame();
newGameBtn.addEventListener("click", initGame);

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

function handleClick(index){
    if(gameGrid[index] === "" ){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";                    //now boxes[index] par cursor pointer nhi banega;
        swapTurn();  
        checkGameOver();                                              // check koi jeet toh nahi gya
                                                   
    }
}

function swapTurn() {
    if(currentPlayer === "X") currentPlayer = "O";
    else  currentPlayer = "X";
    player_no.innerText = `Current Player - ${currentPlayer}`;        //UI Update
}


function checkGameOver(){
    let answer = "";

    winningPositions.forEach((position) => {                          //all 3 boxes should be non-empty and exactly same in value
       
        if((gameGrid[position[0]] !== "" ) && (gameGrid[position[0]] === gameGrid[position[1]] ) && (gameGrid[position[1]] === gameGrid[position[2]])){

                answer = gameGrid[position[0]];
               
                boxes.forEach((box) => {                            //disable cursor pointer appearness on each boxes;
                    box.style.pointerEvents = "none";
                })
                                                                    
                boxes[position[0]].classList.add("win");            //now we know X/O is a winner so add .win class and make that class green;
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
             }
        });

                if(answer !== "" ) player_no.innerText = `Winner Player - ${answer}`;    
                else{                                             
                  
                    let fillCount = 0;                            //We know, NO Winner Found, let's check whether there is tie
                    gameGrid.forEach((box) => {
                        if(box !== "" )
                            fillCount++;
                    });
             
                if(fillCount === 9) player_no.innerText = "Game Tied !";       //board is Filled, game is TIE
              }
                         
}

 

 

 