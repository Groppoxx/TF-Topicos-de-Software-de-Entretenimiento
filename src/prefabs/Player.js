import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, "monster");

        scene.add.existing(this);

        scene.physics.add.existing(this);

        this.setScale(0.4);
        this.setCollideWorldBounds(true);

        this.body.setSize(this.width * 0.35, this.height * 0.45);
        this.body.setOffset(this.width * 0.32, this.height * 0.55);
    }

    moveLeft() {
        this.setVelocityX(-200);
        this.flipX = true;
    }

    moveRight() {
        this.setVelocityX(200);
        this.flipX = false;
    }

    stop() {
        this.setVelocityX(0);
    }
}
