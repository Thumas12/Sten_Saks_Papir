const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'sten'||userInput =='papir'|| userInput == 'saks'){
        return userInput;
    } else {
        console.log("Fejl");
    }
}
const getComputerChoice = () =>{
    const randomNumber =          Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return 'sten';
        case 1:
            return 'papir';
        case 2:
            return 'saks';
    }
}
const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
        return "Uafgjort"
    } if (userChoice === 'sten' && computerChoice === 'papir') {
            return "Computeren vandt"
        }  else {
            return "du vandt"}
     if (userChoice === 'saks' && computerChoice === 'sten'){
            return "Computeren vinder"
        } else{
            return "Du vandt"}
        if (userChoice === 'papir' && computerChoice === 'saks') {
            return 'computeren vandt'
        } else {
            return 'Du vandt'}
}
const playGame = () => {
    const userChoice = getUserChoice('sten');
    const computerChoice = getComputerChoice();
    console.log(`Du valgte: ${userChoice}`)
    console.log(`Computeren valgte : ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
}
playGame()