import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene {

    constructor() {
        super("GameOverScene");
    }

    create() {
        const { width, height } = this.scale;

        const score = localStorage.getItem("lastScore") || 0;

        this.add.image(width / 2, height * 0.35, "gameover")
            .setOrigin(0.5)
            .setScale(0.9);

        this.add.text(width / 2, height * 0.55, `Score: ${score}`, {
            fontSize: "60px",
            fontFamily: "Arial",
            color: "#ffffff"
        }).setOrigin(0.5);

        this.add.text(width / 2, height * 0.75, "Toca para regresar al menú", {
            fontSize: "32px",
            fontFamily: "Arial",
            color: "#ffcc00"
        }).setOrigin(0.5);

        this.input.once("pointerdown", () => {
            this.scene.start("MenuScene");
        });
    }
}
