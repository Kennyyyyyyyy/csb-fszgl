/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sword extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Sword/costumes/Kostüm1.png", { x: 87, y: 48 })
    ];

    this.sounds = [new Sound("Plopp", "./Sword/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveNachricht1() {
    yield* this.wait(0.1);
    while (true) {
      if (
        this.touching(this.sprites["Adventurer"].andClones()) &&
        this.keyPressed("u")
      ) {
        this.stage.vars.swordinventory = 1;
        yield* this.wait(0.1);
        return;
      }
      yield;
    }
  }

  *whenIReceiveNachricht2() {
    yield* this.wait(0.1);
    this.goto(0, -60);
    this.direction = 165;
    this.size = 15;
    while (true) {
      if (this.stage.vars.swordinventory == 0) {
        this.visible = true;
      } else {
        this.visible = false;
        return;
      }
      yield;
    }
  }
}
