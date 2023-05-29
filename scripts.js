const value = document.getElementById('value')
const plusButton = document.getElementById('plus')
const minButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

minButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
});

resetButton.addEventListener('click', () => {
    count = 0
    updateValue();
});


document.addEventListener('mouseup', () => clearInterval(intervalId));


