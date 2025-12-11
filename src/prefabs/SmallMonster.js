import Phaser from "phaser";

export default class SmallMonster extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, "monster");

        scene.add.existing(this);

        scene.physics.add.existing(this);

        this.setScale(0.18);     
        this.setDepth(12);

        this.setVelocityY(Phaser.Math.Between(200, 300));

        this.sceneRef = scene;
    }

    update() {
        if (this.y > this.sceneRef.scale.height + 50) {
            this.destroy();
        }
    }
}
