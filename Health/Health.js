/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Health extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Health/costumes/Kostüm1.png", {
        x: 384,
        y: 34
      }),
      new Costume("Kostüm2", "./Health/costumes/Kostüm2.png", { x: 384, y: 34 })
    ];

    this.sounds = [new Sound("Plopp", "./Health/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTeststart() {
    while (true) {
      if (this.stage.vars.bHnenbild == 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }

  *whenIReceiveTeststart2() {
    this.moveAhead();
    while (true) {
      this.goto(-380 + this.stage.vars.lebenadventurer * 2, -135);
      yield;
    }
  }
}
