// variable targeting div with class .tiles
const tilesContainer = document.querySelector(".tiles");

// array list with 20 emoji's
const emojis = ["&#x1F412", "&#x1F41E", "&#x1F427", "&#x1F438", "&#x1F980", "&#x1F984", "&#x1F98B", "&#x1F99E", "&#x1F9A9", "&#x1F436", "&#x1F680", "&#x1F681", "&#x1F682", "&#x1F692", "&#x1F693", "&#x1F69C", "&#x1F6A2", "&#x1F60D", "&#x1F621", "&#x1F608"];

// variable doubling the emoji count as each emoji is needed twice
const emojiPicklist = [...emojis, ...emojis];

//defining number of tiles for the game
const tileCount = emojiPicklist.length;

const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("timer");
const resetButton = document.getElementById("reset");
const backButton = document.getElementById("back");

//Initial Time
let seconds = 0;
    minutes = 0;

//Initial moves
let movesCount = 0;

//For timer
const timeGenerator = () => {
    seconds += 1;
    //Minutes logic
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    //Format time before displaying
    let secondsValue = (seconds < 10 ? `0${seconds}` : seconds);
    let minutesValue = (minutes < 10 ? `0${minutes}` : minutes);
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

//For calculating moves
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

// Variables indicating current state of the game
// Number of revealed tiles is zero when starting the game
let revealedCount = 0;

// Refers to the active tile user clicked on and thinking to  which second tile to click
let activeTile = null;
// Refers to player waiting for tiles to flip back over again when false
let awaitingEndOfMove = false;

function buildTile(emoji) {
    
    //Creates div in document body
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-emoji", emoji);
    element.setAttribute("data-revealed" , "false");
    
    //Adds logic to the game
    element.addEventListener("click", () => {

        const revealed = element.getAttribute("data-revealed") ;

        if (
            awaitingEndOfMove
            || revealed === "true"
            || element === activeTile
        ) {
            return;
        }

        element.innerHTML = emoji;

        if (!activeTile) {
            activeTile = element ;
            movesCounter() ;

            console.log(activeTile)

            return ;
        }

        const emojiToMach = activeTile.getAttribute("data-emoji") ;

        if (emojiToMach === emoji) {

            activeTile.setAttribute("data-revealed" , "true") ;
            element.setAttribute("data-revealed" , "true") ;

            awaitingEndOfMove = false ;
            activeTile = null ;
            revealedCount += 2 ;

            if(revealedCount === tileCount) {
                alert (" You have found them all!! Congratulations! Refresh page or click reset button to play again :)");
                window.location.replace("https://biecho88.github.io/memory-game/")
            }

            return ;
        }

        awaitingEndOfMove = true ;

        setTimeout(() => {
            element.innerHTML = null ;
            activeTile.innerHTML = null ;

            awaitingEndOfMove = false ;
            activeTile = false ;

        }, 1000);

    });

    return element;
}

startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    //Start timer
    interval = setInterval(timeGenerator, 1000);
    //initial moves count
    moves.innerHTML = `<span>Moves:</span> ${movesCount}`;

});

//Reset the game
resetButton.addEventListener("click", (stopGame = () => {

    location.reload(buildTile);

})
);

//Back to the start
backButton.addEventListener("click", (stopGame = () => {

    window.location.replace("https://biecho88.github.io/memory-game/");

})
);

// Build up tiles

for(let i = 0; i < tileCount; i++) {
    
    //Picks emoji randomly from emojiPicklist
    const randomIndex = Math.floor(Math.random() * emojiPicklist.length);
    const emoji = emojiPicklist[randomIndex];
    const tile = buildTile(emoji);

    //Avoids picking same emoji more than once
    emojiPicklist.splice(randomIndex, 1);

    //Adding tile class div in tiles class div in document body
    tilesContainer.appendChild(tile);

}

