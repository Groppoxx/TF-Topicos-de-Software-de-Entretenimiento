import Phaser from "phaser";

export default class Floor extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, "floor");

        scene.add.existing(this);

        scene.physics.add.existing(this);

        this.setImmovable(true);
        this.body.allowGravity = false;

        this.setOrigin(0.5, 1);
        this.setScale(1.1);

        const hitboxHeight = 70;
        const hitboxWidth = this.width * 1.1;

        this.body.setSize(hitboxWidth, hitboxHeight);
        this.body.setOffset(
            (this.width - hitboxWidth) / 2,
            this.height - hitboxHeight
        );

        this.refreshBody();
    }
}
