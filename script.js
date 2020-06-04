class AudioController {
    constructor() {
        this.bgMusic = new Audio("assests/audio/Firebending.mp3");
        this.victorySound = new Audio("assests/audio/Aang.mp3");
        this.gameOverSound = new Audio("assets/audio/Korra.mp3");
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    };
    startMusic() {
        this.bgMusic.play()
    };
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    };
    victory() {
        this.victorySound.play();
    };
    gameOver() {
        this.gameOverSound.play();
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));

    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove('visible');
            //game.startGame();
//             let audioController = new AudioController();
// audioController.startMusic();
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => {
            //game.flipCard(card);
        });
    });
}

if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ready());
}
else{ 
    ready();
};

