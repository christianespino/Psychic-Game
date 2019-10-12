console.log("")

var letters = ["a", "b", "c", "d"]
var 
var randomLetter = letters[Math.floor((Math.random() * letters.length))]
console.log (randomLetter)

document.addEventListener("keydown", function(event) {
 var userGuess = event.key 

 if (userGuess === randomLetter){
     console.log ("correctGuess")
     
 } else {
     
 }
})
 
