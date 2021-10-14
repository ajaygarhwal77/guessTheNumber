let randomNumber;
let limit = 3;
const NewGameButton = document.querySelector(`.newgame`);
const randomNumberDisplay = document.querySelector(`.randomnumberdisplay`);
const limits = document.querySelector(`.limitdisplay`);
const guessedNumberInput = document.querySelector(`.guessednumberdisplay`);
const checkButton = document.querySelector(`.check`);
const newNumberButton = document.querySelector(`.newnumber`);
const hints = document.querySelector(`.hints`);
const triesLeft = document.querySelector(`.numberoftriesnumber`);
const totalScore = document.querySelector(`.totalscorenumber`);


newNumberButton.disabled = true;
NewGameButton.addEventListener(`click`, function () {
    document.body.classList.remove(`rightanswer`);
    document.body.classList.remove(`wronganswer`);
    totalScore.textContent = 0;
    triesLeft.textContent = 5;
    guessedNumberInput.value = ``;
    limits.textContent = `Click on "Get New Number" button`;
    newNumberButton.disabled = false;
    randomNumberDisplay.textContent = `?`;
    limit = 3;
    hints.textContent = `Start guessing`;
})


newNumberButton.addEventListener(`click`, function () {
    randomNumber = Math.trunc(Math.random() * limit) + 1;
    console.log(randomNumber);
    newNumberButton.disabled = true;
    checkButton.disabled = false;
    hints.textContent = `Start guessing...`;
    guessedNumberInput.value = ``;
    randomNumberDisplay.textContent = `?`;
    document.body.classList.remove(`rightanswer`);
    document.body.classList.remove(`wronganswer`);
    limits.textContent = `Guess Between 1 and ${limit}`;
});
document.querySelector(`.check`).addEventListener(`click`, function () {
    const guessedNumber = Number(document.querySelector(`.guessednumberdisplay`).value);
    if (guessedNumber === randomNumber) {
        document.body.classList.add(`rightanswer`);
        triesLeft.textContent = Number(triesLeft.textContent) + 2;
        totalScore.textContent = Number(totalScore.textContent) + (Number(triesLeft.textContent) * 1.5);
        hints.textContent = `You are right`;
        checkButton.disabled = true;
        newNumberButton.disabled = false;
        randomNumberDisplay.textContent = guessedNumber;
        document.body.classList.remove(`wronganswer`);
        limits.textContent = `Click on "Get New Number" button to get new number`;
        limit += 2;
    } else if (guessedNumber > randomNumber) {
        document.body.classList.add(`wronganswer`);
        triesLeft.textContent = Number(triesLeft.textContent) - 1;
        hints.textContent = `Decrease the number`;
    } else if (guessedNumber < randomNumber) {
        document.body.classList.add(`wronganswer`);
        triesLeft.textContent = Number(triesLeft.textContent) - 1;
        hints.textContent = `increase the number`;
    } else if (!guessedNumber) {
        hints.textContent = `Type a number please`;
    };


    // Loose or win
    if (Number(triesLeft.textContent) === 0) {
        newNumberButton.disabled = true;
        checkButton.disabled = true;
        hints.textContent = `😭 You lost`;
        limits.textContent = `😭 You lost`;
        document.querySelector(`.afterlossing`).classList.remove(`hidden`);
    };
});
document.querySelector(`.close`).addEventListener(`click`, function () {
    document.querySelector(`.afterlossing`).classList.add(`hidden`);
});
