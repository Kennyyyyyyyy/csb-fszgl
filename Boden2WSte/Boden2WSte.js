/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Boden2WSte extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Boden2WSte/costumes/Kostüm1.png", {
        x: 480,
        y: -50
      })
    ];

    this.sounds = [new Sound("Plopp", "./Boden2WSte/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTeststart() {
    while (true) {
      if (this.stage.vars.bHnenbild == 2) {
        this.moveAhead();
        this.goto(0, -48);
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
