const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let buttonEl = document.querySelector("button")

let field1 = document.querySelector(".pwd-field-1")
let field2 = document.querySelector(".pwd-field-2")


buttonEl.addEventListener("click", function() {
    generatePwd()
})

function generatePwd() {
    field1.textContent = ""
    field2.textContent = ""
    for(let i = 0; i < 16; i++) {
        let index1 = Math.floor(Math.random() * characters.length)
        let index2 = Math.floor(Math.random() * characters.length)
        field1.textContent += characters[index1]
        field2.textContent += characters[index2]
    }   
}  






