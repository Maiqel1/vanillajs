let numStorage = [];
let display = document.querySelector('.color-display');
let userInput = document.querySelector('input');
let generatorBtn = document.querySelector('button');
let warningDisplay = document.querySelector('.warning');


function colorGenerator() {
    for (i = 0; i < 3; i++) {
        let randomNum = (function() {
            return Math.floor(Math.random() * userInput.value)
        })();
        numStorage.push(randomNum);
    }
    if (userInput.value < 0 || userInput.value > 255) {
        display.style.backgroundColor = "";
        warningDisplay.style.color = `red`;
        warningDisplay.textContent = `Enter a number between 0 and 255`
    } else{
        display.style.backgroundColor = `rgb(${numStorage[0]}, ${numStorage[1]}, ${numStorage[2]})`;
        warningDisplay.textContent = '';
    }
};
generatorBtn.addEventListener('click', colorGenerator);
generatorBtn.addEventListener('click', function(e) {
    e.preventDefault();
    numStorage = [];
    console.log(numStorage);
});
