let randomGuess = Math.floor(Math.random()*5)+1;

console.log("the correct guess is : " + randomGuess);

let chances = 0;

console.log("times tried : " + chances);


function clickAction(){

    let message = document.getElementById("h2Lbl"); 

    let image = document.getElementById("imgLbl");

    let inputText = document.getElementById("txtInput");   
    let inputTextNum = parseInt(inputText.value);

    let win = "YOU WIN!";
    let loose = "YOU LOOSE";
    
    if (chances != 3){
        if(inputTextNum == randomGuess){
            message.innerText = win;
            image.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWEzbHl4dnl4cGFteGVkaHdtMzZxd3BsdzFpemtsMGNzZ3VseWJqZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lnlAifQdenMxW/giphy.gif";
            return;
        }
        else if (inputTextNum != randomGuess){
            message.innerText = "You have " + (2 - chances) + " chances left. Try again.";
            image.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemczeGljMmxycmVrMXJ0ZWcycWxqbHA1d2M5YTF3NjVwcmYyMm44OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VL48WGMDjD64umCEkv/giphy.gif";
            chances += 1;
            console.log("Chances remaining : " +  (3 - chances));
        }
    }

    if (chances == 3){
        message.innerText = loose;
        image.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWkyNjE3dWd4dGM0N3hxODhmcmVzcmkzbTRxNzQ3NWR1ODE3NmFrMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eJ4j2VnYOZU8qJU3Py/giphy.gif";
        console.log("Chances remaining : " + (3 - chances));
        return;
    }
}