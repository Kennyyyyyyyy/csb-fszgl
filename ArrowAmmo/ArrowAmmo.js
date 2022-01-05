/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ArrowAmmo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./ArrowAmmo/costumes/Kostüm1.png", {
        x: 20,
        y: 6
      })
    ];

    this.sounds = [new Sound("Plopp", "./ArrowAmmo/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "bowinventory" },
        this.whenIReceiveBowinventory
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart
      )
    ];
  }

  *whenIReceiveBowinventory() {
    this.direction = -48;
    this.goto(-213, -169);
    this.visible = true;
    while (true) {
      if (this.stage.vars.pfeilanzahl < 1) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTeststart() {
    while (true) {
      if (this.stage.vars.bowinventory == 1) {
        this.broadcast("bowinventory");
      }
      yield;
    }
  }
}
