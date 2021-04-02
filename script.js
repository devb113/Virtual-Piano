let pianoKeys = new Set('ASDFGHJWETYU');

document.addEventListener("keypress", function (e) {
    if (pianoKeys.has(e.key.toUpperCase())) {
        new Audio(e.key.toUpperCase() + ".mp3").play();
    } else{
        console.warn("Wrong key is pressed")
    }
})
