import Phaser from "phaser";

export default class HUDLife extends Phaser.GameObjects.Image {

    constructor(scene, x, y) {
        super(scene, x, y, "monster");

        scene.add.existing(this);

        this.setScale(0.15);
        this.setDepth(1000); 
    }
}
