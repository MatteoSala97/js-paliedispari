//*************Esercizio 1**************

document.getElementById("btnResult").addEventListener("click", function (){
    let inputText = document.getElementById("textbox").value

    let isPalindrome = checkPalindrome(inputText)

    displayResult(isPalindrome)
})

function checkPalindrome(word){

    //this makes the function case-insenstive
    word = word.toLowerCase()

    let length = word.length

    for (let i = 0; i < Math.floor(length / 2); i++) {
        
        if (word[i] !== word[length - 1 - i]) {
            return false
        }
    }

    return true
}

function displayResult(isPalindrome) {
    let resultElement = document.getElementById("result")
    if (isPalindrome) {
        resultElement.textContent = "The word is a palindrome!"
    } else {
        resultElement.textContent = "The word is not a palindrome."
    }
}
