//Find the 3 card elements
const CARD1 = document.querySelector("#card1");
const CARD2 = document.querySelector("#card2");
const CARD3 = document.querySelector("#card3");

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

//Compute the paths for the images - convert to lower case to account for possible browser gotchas
var back1 = "cardb1.png" ;
var back2 = "cardb2.png" ;


function Flip(e) {

    var card = document.querySelector("#"+e.currentTarget.id) ;
    var back = e.srcElement.src.substring (e.srcElement.src.lastIndexOf("/")+1) ;

    if (card.classList.contains("flipped") &&  back== back1) {
        e.srcElement.src = back2 ;
    } else {
        if (card.classList.contains("flipped") && back == back2)
            e.srcElement.src = back1 ;
    }
         
    card.classList.toggle("flipped");
}

//Use more modern Eventlistener approach for Events

CARD1.addEventListener ("click", Flip)
CARD2.addEventListener ("click", Flip)
CARD3.addEventListener ("click", Flip)

//End of script