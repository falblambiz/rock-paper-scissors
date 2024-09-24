function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.3333) {
        return "Rock";
    } else if (randomNumber < 0.6666) {
        return "Paper";
    } else if (randomNumber <= 1) {
        return "Scissors";
    }
}
