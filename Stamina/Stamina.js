/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stamina extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Stamina/costumes/Kostüm1.png", {
        x: 384,
        y: 34
      }),
      new Costume("Kostüm2", "./Stamina/costumes/Kostüm2.png", {
        x: 384,
        y: 34
      })
    ];

    this.sounds = [new Sound("Plopp", "./Stamina/sounds/Plopp.wav")];

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
      if (this.stage.vars.sliden == 2) {
        this.goto(-300, -170);
      }
      if (this.stage.vars.sliden == 1) {
        this.goto(-340, -170);
      }
      if (this.stage.vars.sliden == 0) {
        this.goto(-380, -170);
      }
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
