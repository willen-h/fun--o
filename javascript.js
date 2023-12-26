const result = document.querySelector(".result")
const scoreHuman = document.getElementById("score-human")
const scoreMaquina = document.getElementById("score-maquina")

let scoreHumanNumber = 0
let scoreMaquinanNumber = 0



const playHuman = (humanChoice) => {
    playGame(humanChoice, playMaquina())

}

const playMaquina = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}
const playGame = (human, maquina) => {

    
    if (human === maquina) {
        result.innerHTML = "Empate \uD83E\uDD37"
    }
    else if ((human === "paper" && maquina === "rock") ||
        (human === "rock" && maquina === "scissors") ||
        (human === "scissors" && maquina === "paper")
    ) {
        result.innerHTML = "Você Ganhou \uD83E\uDD11"
        scoreHumanNumber++
        scoreHuman.innerHTML = scoreHumanNumber
    }
    else {
        result.innerHTML = "Perdeu \uD83D\uDE2D"
        scoreMaquinanNumber++
        scoreMaquina.innerHTML = scoreMaquinanNumber

    }

}