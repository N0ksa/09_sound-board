const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound => {
    const button = document.createElement("button");
    button.classList.add("btn");

    button.innerText = sound;

    document.getElementById("buttons").appendChild(button);

    button.addEventListener("click", function(){
        stopSongs();
        document.getElementById(sound).play();
    })

})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}