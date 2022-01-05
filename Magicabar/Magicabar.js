/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Magicabar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Magicabar/costumes/Kostüm1.png", {
        x: 388,
        y: 38
      })
    ];

    this.sounds = [new Sound("Plopp", "./Magicabar/sounds/Plopp.wav")];

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
      if (this.stage.vars.bHnenbild == 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }
}
