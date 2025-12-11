import Phaser from "phaser";

import PreloadScene from "./scenes/Preload.js";
import MenuScene from "./scenes/Menu.js";
import GameScene from "./scenes/Game.js";
import GameOverScene from "./scenes/GameOver.js";

const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    parent: "game-container",
    backgroundColor: "#000000",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 720,
        height: 1280
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 800 },
            debug: true
        }
    },

    scene: [
        PreloadScene,
        MenuScene,
        GameScene,
        GameOverScene
    ]
};

window.addEventListener("load", () => {
    new Phaser.Game(config);
});
