import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        this.load.image('monster', '../imgs/monster-cover.png');

        this.load.image('title', '../imgs/title.png');

        this.load.image('background', '../imgs/background.png');
        this.load.image('pauseBtn', '../imgs/button-pause.png');

        this.load.spritesheet('startBtn', '../imgs/button-start.png', {
            frameWidth: 400,
            frameHeight: 140
        });

        this.load.spritesheet('candies', '../imgs/candy.png', {
            frameWidth: 90,
            frameHeight: 90
        });

        this.load.image('floor', '../imgs/floor.png');

        this.load.image('gameover', '../imgs/gameover.png');
    }

    create() {
        this.scene.start("MenuScene");
    }
}

