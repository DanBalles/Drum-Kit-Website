// document.querySelectorAll('.drum').forEach(addEventListener('click', handleButton))

// function handleButton () {
//     alert('I got clicked!')
// }


//  Detecting button press
const numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting key press
document.addEventListener('keydown', function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
            case 'w':
                let tom1 = new Audio('sounds/tom-1.mp3')
                tom1.play();
                break;
            
            case 'a':
                let tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play();
                break;
            
            case 's':
                let tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play();
                break;
            
            case 'd':
                let tom4 = new Audio('sounds/tom-4.mp3')
                tom4.play();
                break;
            
            case 'j':
                let snare = new Audio('sounds/snare.mp3')
                snare.play();
                break;
            
            case 'k':
                let crash = new Audio('sounds/crash.mp3')
                crash.play();
                break;
            
            case 'l':
                let kick = new Audio('sounds/kick-bass.mp3')
                kick.play();
                break;
            
            default: console.log(key);
                break;
        }
};

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100);
}

        // let audio = new Audio('./sounds/crash.mp3');
        // audio.play();
// calculator
        // function add(num1, numb2) {
        //     return num1 + numb2;
        // };

        // function multiply(num1, numb2){
        //     return num1 * numb2;
        // };

        // function subtract(num1, numb2) {
        //     return num1 - numb2;
        // };

        // function divide(num1, numb2) {
        //     return num1 / numb2;
        // };

        // function calculator(num1, numb2, operator) {
        //     return operator(num1, numb2)
        // };

