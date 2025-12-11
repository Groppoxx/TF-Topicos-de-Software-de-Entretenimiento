import Phaser from "phaser";
import HUDLife from "../prefabs/HUDLife.js";

export default class HUD extends Phaser.GameObjects.Group {

    constructor(scene, defaultLives = 3) {
        super(scene);

        this.scene = scene;
        this.lives = defaultLives;
        this.maxLives = defaultLives;

        this.createLives();
    }

    addLife() {

        if (this.lives >= this.maxLives) {
            return this.lives; 
        }

        this.lives++;

        const { width } = this.scene.scale;


        const x = width - 180 + ((this.lives - 1) * 60);
        const y = 80;

        const newLife = new HUDLife(this.scene, x, y);
        this.add(newLife);

        return this.lives;
    }

    createLives() {
        const { width } = this.scene.scale;

        let startX = width - 180;
        let y = 80;

        this.clear(true);

        for (let i = 0; i < this.lives; i++) {
            const life = new HUDLife(this.scene, startX + (i * 60), y);
            this.add(life);
        }
    }

    removeLife() {
        if (this.lives <= 0) return;

        this.lives--;

    
        const last = this.getChildren()[this.getChildren().length - 1];
        last.destroy();

        if (this.lives <= 0) {
            this.scene.events.emit("playerDead");
        }
    }

    reset() {
        this.lives = this.maxLives;
        this.createLives();
    }
}
