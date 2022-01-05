/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ammobox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Ammobox/costumes/Kostüm1.png", {
        x: 26,
        y: 106
      })
    ];

    this.sounds = [new Sound("Plopp", "./Ammobox/sounds/Plopp.wav")];

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
    this.goto(-230, -73);
    this.moveAhead();
    this.size = 40;
    this.visible = true;
    while (true) {
      if (this.stage.vars.tatakae == 0) {
        if (this.touching(this.sprites["Adventurer"].andClones())) {
          this.stage.vars.magicaadventurer = 45;
          this.stage.vars.pfeilanzahl = 5;
          this.visible = false;
          yield* this.playSoundUntilDone("Plopp");
          yield* this.wait(4);
        }
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
