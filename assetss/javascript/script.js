const tileContainer = document.querySelector(".tiles") ; // variable targeting div with class .tiles
const emoji = ["&#x1F412", "&#x1F41E", "&#x1F427", "&#x1F438", "&#x1F980", "&#x1F984", "&#x1F98B", "&#x1F99E", "&#x1F9A9", "&#x1F436", "&#x1F680", "&#x1F681", "&#x1F682", "&#x1F692", "&#x1F693", "&#x1F69C", "&#x1F6A2", "&#x1F60D", "&#x1F621", "&#x1F608"] ; // array list with 20 emoji's
const emojiPicklist = [...emoji , ...emoji] ; // variable doubling the emoji count as each emoji is needed twice
const tileCount = emojiPicklist.length ; //defining number of tiles for the game

// Variables indicating current state of the game

