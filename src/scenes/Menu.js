import Phaser from "phaser";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    create() {
        const { width, height } = this.scale;

        const bg = this.add.image(width / 2, height / 2, "background");
        bg.setOrigin(0.5, 0.5);
        bg.setDisplaySize(width, height);

        this.add.image(width / 2, height * 0.20, "title")
            .setOrigin(0.5, 0.5)
            .setScale(0.9);

        this.add.image(width / 2, height * 0.53, "monster")
            .setOrigin(0.5, 0.5)
            .setScale(0.9);

        const startBtn = this.add.image(width / 2, height * 0.78, "startBtn", 0)
            .setOrigin(0.5)
            .setScale(1);

        startBtn.setInteractive();

        startBtn.on("pointerover", () => {
            startBtn.setFrame(1);
        });

        startBtn.on("pointerout", () => {
            startBtn.setFrame(0);
        });

        startBtn.on("pointerdown", () => {
            startBtn.setFrame(2);
            this.time.delayedCall(120, () => {
                this.scene.start("GameScene");
            });
        });
    }
}
