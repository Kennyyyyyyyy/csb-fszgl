/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Magica extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Magica/costumes/Kostüm1.png", {
        x: 384,
        y: 34
      }),
      new Costume("Kostüm2", "./Magica/costumes/Kostüm2.png", { x: 384, y: 34 })
    ];

    this.sounds = [new Sound("Plopp", "./Magica/sounds/Plopp.wav")];

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
    this.moveAhead();
    while (true) {
      this.goto(-380 + this.stage.vars.magicaadventurer * 2, -152.5);
      yield;
    }
  }

  *whenIReceiveTeststart2() {
    while (true) {
      if (this.stage.vars.bHnenbild == 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }
}
