import Phaser from "phaser";

export default class Candy extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {

        const frame = Phaser.Math.Between(0, 4);

        super(scene, x, y, "candies", frame);

        scene.add.existing(this);

        scene.physics.add.existing(this);

        this.setScale(0.6);
        this.setDepth(10);

        this.setVelocityY(Phaser.Math.Between(200, 350));
        this.setGravityY(0);

        this.sceneRef = scene;
    }

    update() {
        if (this.y > this.sceneRef.scale.height + 100) {
            this.destroy();
        }
    }
}
