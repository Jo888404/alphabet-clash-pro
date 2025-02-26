// function play (){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // console.log(homeScreen.classList);

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // console.log(playGround.classList);

// }


function continueGame(){
    // step -1: generate  a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    //set ramdomly generated alphabet to the screen (show it)

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}



function handleKeybordButtonPress(event){
    const playerPressed = event.key;

    console.log('Player pressed', playerPressed);

    // stop the game if pressed 'Esc' 
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected t0 press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);


    //Check matched r not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore +1;
        setTextElementValueById('current-score', updatedScore);






        //update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // console.log(currentScore);
    
        // // 2. Increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. show the update score
        // currentScoreElement.innerText = newScore;

        // console.log('you have pressed crrectly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }








        // Step-1: get the current life number 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // console.log(currentLife);

        // // step-2: reduce the life count 
        // const newLife = currentLife - 1;
        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;

    }
}

document.addEventListener('keyup', handleKeybordButtonPress);





function play (){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score 
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet hghlight 
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet);
}
