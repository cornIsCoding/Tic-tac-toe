var turn = 0
var notOver = true

function clicked(id){
    switchPlayer(id)
}

function switchPlayer(id){
    var innerHTMLisEmpty = document.querySelector(id).innerHTML == ''
    if(turn % 2 == 0 && innerHTMLisEmpty && notOver){
        document.querySelector(id).innerHTML = 'X'
        turn = turn + 1
    }else if(innerHTMLisEmpty && notOver){
        document.querySelector(id).innerHTML = '0'   
        turn = turn + 1
    } 
    gameWon(id)
}

function gameWon(){
    var tl = document.querySelector('#tl').innerText
    var tc = document.querySelector('#tc').innerText
    var tr = document.querySelector('#tr').innerText
    var ml = document.querySelector('#ml').innerText
    var mc = document.querySelector('#mc').innerText
    var mr = document.querySelector('#mr').innerText
    var bl = document.querySelector('#bl').innerText
    var bc = document.querySelector('#bc').innerText
    var br = document.querySelector('#br').innerText

    var xWon = false
    var oWon = false

    if(tl == 'X' && tc == 'X' && tr == 'X' || ml == 'X' && mc == 'X' && mr == 'X'
        || bl == 'X' && bc == 'X' && br == 'X' || tl == 'X' && ml == 'X' && bl == 'X'
        || tc == 'X' && mc == 'X' && bc == 'X' || tr == 'X' && mr == 'X' && br == 'X'
        || tl == 'X' && mc == 'X' && br == 'X' || bl == 'X' && mc == 'X' && tr == 'X'){
            xWon = true
    }
    if(tl == '0' && tc == '0' && tr == '0' || ml == '0' && mc == '0' && mr == '0'
        || bl == '0' && bc == '0' && br == '0' || tl == '0' && ml == '0' && bl == '0'
        || tc == '0' && mc == '0' && bc == '0' || tr == '0' && mr == '0' && br == '0'
        || tl == '0' && mc == '0' && br == '0' || bl == '0' && mc == '0' && tr == '0'){
            oWon = true
    }

    if(xWon && notOver){
        document.querySelector('#gameField').insertAdjacentHTML('afterend', '<h1 id="win">X wins!</h1>')
        notOver = false
    }
    if(oWon && notOver){
        document.querySelector('#gameField').insertAdjacentHTML('afterend', '<h1 id="win">0 wins!</h1>')
        notOver = false
    }
    if(turn == 9 && (!xWon || !oWon) && notOver){
        document.querySelector('#gameField').insertAdjacentHTML('afterend', '<h1 id="draw">Draw!</h1>')
        notOver = false
    }
}