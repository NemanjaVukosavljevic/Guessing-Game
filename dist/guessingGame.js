let computerNumber, numberOfAttempts = 0;
const userInput = document.getElementById(`userInput`);
const resetButton = document.getElementById(`resetButton`);
const submitButton = document.getElementById(`submitButton`);

computerNumber = Math.floor(Math.random() * 10 + 1);

submitButton.addEventListener(`click`, () => {
    userValue = userInput.value;

    if ((userValue.length > 1 && userValue != 10) || !userValue.length){
        const createdDiv = document.createElement(`div`);
        createdDiv.className = `fixed top-[5rem] left-1/2 transform -translate-x-1/2 bg-red-500 p-5 text-white font-bold`;
        createdDiv.innerText = `YOU CAN PROCEED ONLY IF YOU TYPE IN 1 NUMBER AT THE TIME`;

        document.body.append(createdDiv);

        setTimeout(() => {
            createdDiv.classList.add(`hidden`);
        }, [5000]);
    } else {
        if (userValue > computerNumber || userValue < computerNumber){
            document.getElementById(`finalResult`).innerHTML = `YOU DIDN'T GUESS. THIS IS YOUR ATTEMPT NUMBER ${numberOfAttempts + 1} ! TRY AGAIN`;
            userInput.value = ``;
            numberOfAttempts++;
        }
        else {
            document.getElementById(`finalResult`).innerHTML = `CONGRATULATIONS! YOU GUESSED IT IN ${numberOfAttempts + 1} TRIES!`;
            submitButton.classList.add(`hidden`);
            resetButton.classList.remove(`hidden`);
        }
    }
});

resetButton.addEventListener(`click`, () => {
    computerNumber = Math.floor(Math.random() * 10 + 1);
    userInput.value = ``;
    document.getElementById(`finalResult`).innerHTML = ``;

    resetButton.classList.add(`hidden`);
    submitButton.classList.remove(`hidden`);
});
