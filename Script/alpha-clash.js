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
    console.log('Your random alphabet', alphabet);

    //set ramdomly generated alphabet to the screen (show it)

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}



function handleKeybordButtonPress(event){
    const playerPressed = event.key;

    console.log('Player pressed', playerPressed);

    //get the expected t0 press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);


    //Check matched r not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    }
    else{
        console.log('you missed. you lost a life');
    }
}

document.addEventListener('keyup', handleKeybordButtonPress);





function play (){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
