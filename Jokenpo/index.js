const $buttonS1 = document.querySelector('.button-stone-1')
const $buttonP1 = document.querySelector('.button-paper-1')
const $buttonSC1 = document.querySelector('.button-scissors-1')

const $buttonS2 = document.querySelector('.button-stone-2')
const $buttonP2 = document.querySelector('.button-paper-2')
const $buttonSC2 = document.querySelector('.button-scissors-2')

const $buttonStart = document.querySelector('.button-start')

const $buttonReset = document.querySelector('.button-reset')

const $field1 = document.querySelector('.field-1')
const $field2 = document.querySelector('.field-2')

const $winnerTitle = document.querySelector('.winner-title')

const $scoreBoard1 = document.querySelector('.scoreboard-1')
const $scoreBoard2 = document.querySelector('.scoreboard-2')

let movePlayer1 = ''
let movePlayer2 = ''
let winner = null
let scorePlayer1 = 0
let scorePlayer2 = 0
let gameStart = false



function verifyWinner(){
    console.log(movePlayer1, movePlayer2)
    if (movePlayer1 == 'stone' && movePlayer2 == 'paper') {
       
        winner = 2
    } else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors' ) {
        
        winner = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'stone' ){
        
        winner = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors' ){
        
        winner = 2
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone' ){
       
        winner = 2
    }else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper' ){
        
        winner = 1
    }else if (movePlayer1 ==  movePlayer2 ){
     winner = 0
    }

}

function printWinnerName(winner){
    if (winner == 1){
        $winnerTitle.innerHTML='jogador 1 ganhou'
    } else if (winner == 2) {
        $winnerTitle.innerHTML='jogador 2 ganhou'
    } else{
        $winnerTitle.innerHTML='empate'

    }

}

function givePoint(winner){
    if (winner == 1){
        scorePlayer1 = scorePlayer1 + 1
    } else if (winner == 2) {
        scorePlayer2 = scorePlayer2 + 1
    } 
}

function printPoint(){
    $scoreBoard1.innerHTML = scorePlayer1
    $scoreBoard2.innerHTML = scorePlayer2
}

function resetBoards(){
    $field1.innerHTML = '' 
    $field2.innerHTML = '' 
}

function resetVariables(){
 movePlayer1 =''
 movePlayer2 =''
 winner = null
}

function resetWinnerTitle(){
    $winnerTitle.innerHTML = 'vencedor'
}

function resetScore(){
    $scoreBoard1.innerHTML = '0'  
    $scoreBoard2.innerHTML = '0'  
}

function resetScorePlayerVariables(){
    scorePlayer1 = 0
    scorePlayer2 = 0
}

function resetAll(){
    resetVariables()
    resetBoards()
    resetScore()
    resetWinnerTitle()
    resetScorePlayerVariables()
}



$buttonS1.addEventListener('click', function(){
    if (gameStart == false) return
    $field1.innerHTML = "<img class='image-move' src='./styles/imagens/stone.png' />"
    movePlayer1 = 'stone'
    verifyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBoards, 1000)
        resetVariables()
    }
})

$buttonP1.addEventListener('click', function(){
    if (gameStart == false) return
    $field1.innerHTML = "<img class='image-move' src='./styles/imagens/paper.png' />"
    movePlayer1 = 'paper'
    verifyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBoards, 1000)
        resetVariables()
    }
})

$buttonSC1.addEventListener('click', function(){
    if (gameStart == false) return
    $field1.innerHTML = "<img class='image-move' src='./styles/imagens/scissors.png' />"
    movePlayer1 = 'scissors'
    verifyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBoards, 1000)
        resetVariables()
    }

})

$buttonS2.addEventListener('click', function(){
    if (gameStart == false) return
    $field2.innerHTML = "<img class='image-move' src='./styles/imagens/stone.png' />"
    movePlayer2 = 'stone'
    verifyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
       setTimeout(resetBoards, 1000)
        resetVariables()
    }
})

$buttonP2.addEventListener('click', function(){
    if (gameStart == false) return
    $field2.innerHTML = "<img class='image-move' src='./styles/imagens/paper.png' />"
    movePlayer2 = 'paper'
    verifyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBoards, 1000)
        resetVariables()
    }
})

$buttonSC2.addEventListener('click', function(){
    if (gameStart == false) return
    $field2.innerHTML = "<img class='image-move' src='./styles/imagens/scissors.png' />"
    movePlayer2 = 'scissors'
    verifyWinner()
    if (winner != null){
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        setTimeout(resetBoards, 1000)
        resetVariables()
    }
})

$buttonReset.addEventListener('click', resetAll)

$buttonStart.addEventListener('click', function(){
    if (gameStart == false) {
        gameStart = true
        $buttonStart.classList.add('button-active') 
        $buttonStart.innerHTML = 'parar'
    } else {
        gameStart = false  
        $buttonStart.classList.remove('button-active') 
        $buttonStart.innerHTML = 'Iniciar'
    }

  
})
