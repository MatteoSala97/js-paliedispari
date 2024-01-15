//declaring array of pari e dispari
let pariDispari = ["pari", "dispari"]

//making the function case-insensitive
let userChoice = prompt("Scegli pari o dispari")
userChoice = userChoice.toLowerCase()

//checks to see if the inserted value belongs to the array
if (!pariDispari.includes(userChoice)){
    console.log("Your selection is not correct. Please select `Pari` or `Dispari`")
    location.reload()

} else { //if its contained in the array -->
    let userNumber = prompt("Scegli un numero da 1 a 5");
    //converts to number
    userNumber = parseInt(userNumber)

    //checks if the number inserted is correct or is contained between 1 and 5 or if the input has been compiled

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        console.log("The number you selected is not valid. Please select a number between 1 and 5.")
        location.reload()
} else {
    let computerNumber = Math.floor(Math.random() *5 ) +1
    let sum = userNumber + computerNumber
    
    function isEven(num){
        return num % 2 === 0
    }
    let result = isEven(sum) ? "pari" : "dispari"

    if(result === userChoice){
        console.log(`You won! The sum is ${result}`)
    } else {
        console.log(`You lost! the sum is ${result}`)
    }
    }
}
