/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Figur2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Figur2/costumes/Kostüm1.png", {
        x: 143,
        y: 146
      })
    ];

    this.sounds = [new Sound("Plopp", "./Figur2/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveNachricht1() {
    yield* this.wait(0.1);
    while (true) {
      if (
        this.touching(this.sprites["Adventurer"].andClones()) &&
        this.keyPressed("u")
      ) {
        this.broadcast("bowinventory");
        this.stage.vars.bowinventory = 1;
        yield* this.wait(0.1);
        return;
      }
      yield;
    }
  }

  *whenIReceiveNachricht2() {
    yield* this.wait(0.1);
    this.goto(-78, -83);
    this.size = 30;
    while (true) {
      if (this.stage.vars.bowinventory == 0) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.sound = 1;
    this.stage.vars.bowinventory = 0;
    this.stage.vars.ok = 0;
    this.stage.vars.settings = 0;
    this.visible = false;
  }
}
