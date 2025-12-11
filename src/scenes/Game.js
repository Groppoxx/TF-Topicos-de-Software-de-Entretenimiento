import Phaser from "phaser";
import Player from "../prefabs/Player.js";
import Floor from "../prefabs/Floor.js";
import HUD from "../prefabs/HUD.js";
import Candy from "../prefabs/Candy.js";
import SmallMonster from "../prefabs/SmallMonster.js";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {
        this.score = 0;

        const lastScore = localStorage.getItem("lastScore");

        if (lastScore !== null) {
            this.lastScoreText = this.add.text(
                20,
                20,
                `Last Score: ${lastScore}`,
                {
                    fontSize: "38px",
                    color: "#ffffff",
                    fontFamily: "Arial",
                }
            )
            .setScrollFactor(0)
            .setDepth(1000);
        }

        const { width, height } = this.scale;

        const bg = this.add.image(width / 2, height / 2, "background");
        bg.setOrigin(0.5);
        bg.setDisplaySize(width, height);

        this.lifes = 3;

        this.floor = new Floor(this, width / 2, height);
        this.player = new Player(this, width * 0.5, height * 0.70);

        this.input.on("pointerdown", (pointer) => {
            if (pointer.x < width / 2) {
                this.player.moveLeft();
            } else {
                this.player.moveRight();
            }
        });

        this.input.on("pointerup", () => {
            this.player.stop();
        });

        this.physics.add.collider(this.player, this.floor);

        this.candies = this.add.group();
        this.smallMonsters = this.add.group();

        this.time.addEvent({
            delay: 700,
            callback: () => this.spawnCandy(),
            loop: true
        });

        this.time.addEvent({
            delay: 3500,
            callback: () => this.spawnSmallMonster(),
            loop: true
        });

        this.hud = new HUD(this, this.lifes);

        this.keyA = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.A
        );

        this.physics.add.overlap(
            this.player,
            this.smallMonsters,
            this.handleSmallMonsterCollision,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.candies,
            this.handleCandyCollision,
            null,
            this
        );
    }

    handleSmallMonsterCollision(player, smallMonster) {
        smallMonster.destroy();

        if (this.lifes < 3) {
            this.hud.addLife();
            this.lifes++;
        }
    }

    handleCandyCollision(player, candy) {
        if (this.keyA.isDown) {
            this.addPoints(10);
            candy.destroy();
        } else {
            this.lifes--;
            this.hud.removeLife();
            candy.destroy();

            if (this.lifes <= 0) {
                this.handleGameOver();
            }
        }
    }

    addPoints(amount) {
        this.score += amount;
        console.log("Puntos:", this.score);
    }

    handleGameOver() {
        localStorage.setItem("lastScore", this.score);
        this.physics.pause();
        this.scene.start("GameOverScene");
    }

    spawnSmallMonster() {
        const { width } = this.scale;

        const x = Phaser.Math.Between(50, width - 50);
        const m = new SmallMonster(this, x, -50);

        this.smallMonsters.add(m);
    }

    spawnCandy() {
        const { width } = this.scale;

        const x = Phaser.Math.Between(50, width - 50);
        const candy = new Candy(this, x, -50);

        this.candies.add(candy);
    }
}
