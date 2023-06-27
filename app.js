    // turn counter
let turn = 0
    // boolean flag to check if the game is over
let gameOver = false

    // takes the HTML id as parameter
function main(id){
        // check IF game is over
    if(gameOver){
            // return the function because the game is over
        return
    }    
        // select the clicked box IF the innerHTML is ''
        // this prevents from over writing other values like 'X' or 'O'
    let innerHTMLisEmpty = document.querySelector(id).innerHTML == ''
        // checks is innerHTMLisEmpty AND 
        // IF the current turn is divideble by 2 without a reminder
        // to determine which player is currently allowed to play
    if(turn % 2 == 0 && innerHTMLisEmpty){
            // select the clicked box and set innerHTML to 'X'
        document.querySelector(id).innerHTML = 'X'
            // increase turn counter by 1
        turn++
        // checks IF innerHTMLisEmpty
    }else if(innerHTMLisEmpty){
            // select the clicked box and set innerHTML to '0'
        document.querySelector(id).innerHTML = '0'   
            // increase turn counter by 1
        turn++
    }
        // invoke the gameWon Function with the HTML id
    gameWon(id)
}

    // game logic
function gameWon(){
        // select the innerText of all game boxes
        // name sheme is a concatination of rows + columns
        // rows
        // t == top     m == middle     b == bottom
        // columns
        // l == left    c == center     r == right
    let tl = document.querySelector('#tl').innerText
    let tc = document.querySelector('#tc').innerText
    let tr = document.querySelector('#tr').innerText
    let ml = document.querySelector('#ml').innerText
    let mc = document.querySelector('#mc').innerText
    let mr = document.querySelector('#mr').innerText
    let bl = document.querySelector('#bl').innerText
    let bc = document.querySelector('#bc').innerText
    let br = document.querySelector('#br').innerText

        // boolean flag to check if xWon
    let xWon = false
        // boolean flag to check if oWon
    let oWon = false

        // check all 8 winning conditions for 'X'
    if(tl == 'X' && tc == 'X' && tr == 'X' || ml == 'X' && mc == 'X' && mr == 'X'
        || bl == 'X' && bc == 'X' && br == 'X' || tl == 'X' && ml == 'X' && bl == 'X'
        || tc == 'X' && mc == 'X' && bc == 'X' || tr == 'X' && mr == 'X' && br == 'X'
        || tl == 'X' && mc == 'X' && br == 'X' || bl == 'X' && mc == 'X' && tr == 'X'){
                // set xWon to true
            xWon = true
    }
        // check all 8 winnig conditions for 'O'
    if(tl == '0' && tc == '0' && tr == '0' || ml == '0' && mc == '0' && mr == '0'
        || bl == '0' && bc == '0' && br == '0' || tl == '0' && ml == '0' && bl == '0'
        || tc == '0' && mc == '0' && bc == '0' || tr == '0' && mr == '0' && br == '0'
        || tl == '0' && mc == '0' && br == '0' || bl == '0' && mc == '0' && tr == '0'){
                // set oWon to true
            oWon = true
    }

        // check IF xWon
    if(xWon){
            // select gameField and display 'X wins!' under it
        document.querySelector('#gameField').insertAdjacentHTML('afterend', '<h1 id="win">X wins!</h1>')
            // set gameOver to true
        gameOver = true
            // IF xWon is NOT TRUE check IF oWon
    }else if(oWon){
            // select gameField and display 'O wins!' under it
        document.querySelector('#gameField').insertAdjacentHTML('afterend', '<h1 id="win">0 wins!</h1>')
            // set gameOver to true
        gameOver = true
    }
        // if xWon or oWon are not true we need to check if 
        // turn counter == 9 because then the game is a draw
    else if(turn == 9){
            // select gameField and display 'Draw!' under it
        document.querySelector('#gameField').insertAdjacentHTML('afterend', '<h1 id="draw">Draw!</h1>')
            // set gameOver to true
        gameOver = true
    }
}