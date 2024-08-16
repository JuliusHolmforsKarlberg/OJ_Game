import "./style.css";
import Phaser from "phaser";

const sizes = {
  width: 720,
  height: 1280,
};

const speedDown = 300

class GameScene extends Phaser.Scene {
  constructor() {
    super("scene-game");
  }

  preload() {
    this.load.image("bg", "/assets/sky.png")
  }
  

  create() {
  // Get the width and height of the game screen
  const { width, height } = this.scale;

  // Add the background image and position it at the top-left corner
  const bg = this.add.image(0, 0, "bg");

  // Set the origin to the top-left corner
  bg.setOrigin(0, 0);

  // Scale the image to fill the entire screen
  bg.setDisplaySize(width, height);
  }

  update() {
  }

}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  scene: [GameScene],
};

const game = new Phaser.Game(config);