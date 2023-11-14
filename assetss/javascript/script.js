const tilesContainer = document.querySelector(".tiles");    // variable targeting div with class .tiles
const emojis = ["&#x1F412", "&#x1F41E", "&#x1F427", "&#x1F438", "&#x1F980", "&#x1F984", "&#x1F98B", "&#x1F99E", "&#x1F9A9", "&#x1F436", "&#x1F680", "&#x1F681", "&#x1F682", "&#x1F692", "&#x1F693", "&#x1F69C", "&#x1F6A2", "&#x1F60D", "&#x1F621", "&#x1F608"];    // array list with 20 emoji's
const emojiPicklist = [...emojis, ...emojis];   // variable doubling the emoji count as each emoji is needed twice
const tileCount = emojiPicklist.length;    //defining number of tiles for the game
const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");

//Initial Time
let seconds = 0,
    minutes = 0;
//Initial moves and win count
let movesCount = 0,
    winCount = 0;
//For timer
const timeGenerator = () => {
    seconds += 1;
    //minutes logic
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    //format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

//For calculating moves
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};



// Variables indicating current state of the game

let revealedCount = 0;     // Number of revealed tiles is zero when starting the game
let activeTile = null;     // Refers to the active tile user clicked on and thinking to  which second tile to click
let awaitingEndOfMove = false;     // Refers to player waiting for tiles to flip back over again when false 

function buildTile(emoji) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-emoji", emoji);
    element.setAttribute("data-revealed" , "false")
    

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
                alert (" You win! Refresh to play again")
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


// Build up tiles 

for (let i = 0; i < tileCount; i++) {

    const randomIndex = Math.floor(Math.random() * emojiPicklist.length);
    const emoji = emojiPicklist[randomIndex];
    const tile = buildTile(emoji);

    emojiPicklist.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);


}

interval = setInterval(timeGenerator, 1000);
//initial moves
moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
initializer();