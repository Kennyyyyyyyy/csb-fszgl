/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Trainingdummy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Trainingdummy/costumes/Kostüm1.png", {
        x: 38,
        y: 165
      }),
      new Costume("Kostüm2", "./Trainingdummy/costumes/Kostüm2.png", {
        x: 88,
        y: 175
      })
    ];

    this.sounds = [new Sound("Plopp", "./Trainingdummy/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "ap3" }, this.whenIReceiveAp3),
      new Trigger(Trigger.BROADCAST, { name: "as2" }, this.whenIReceiveAs2),
      new Trigger(Trigger.BROADCAST, { name: "as3" }, this.whenIReceiveAs3),
      new Trigger(Trigger.BROADCAST, { name: "ap2" }, this.whenIReceiveAp2),
      new Trigger(Trigger.BROADCAST, { name: "ap1" }, this.whenIReceiveAp1),
      new Trigger(Trigger.BROADCAST, { name: "as1" }, this.whenIReceiveAs1),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dumdum" },
        this.whenIReceiveDumdum
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dumdum2" },
        this.whenIReceiveDumdum2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart
      )
    ];

    this.vars.lebendummy = 100;
  }

  *whenIReceiveAp3() {
    if (this.touching(Color.rgb(203, 219, 252))) {
      if (this.vars.lebendummy > 0) {
        this.vars.lebendummy += -15;
        this.direction -= 15;
        yield* this.wait(0.1);
        this.direction = 90;
      }
    }
  }

  *whenIReceiveAs2() {
    if (
      this.touching(Color.rgb(165, 174, 234)) ||
      this.touching(Color.rgb(194, 200, 240))
    ) {
      if (this.vars.lebendummy > 0) {
        this.vars.lebendummy += -15;
        this.direction -= 15;
        yield* this.wait(0.1);
        this.direction = 90;
      }
    }
  }

  *whenIReceiveAs3() {
    if (
      this.touching(Color.rgb(165, 174, 234)) ||
      this.touching(Color.rgb(194, 200, 240))
    ) {
      if (this.vars.lebendummy > 0) {
        this.vars.lebendummy += -20;
        this.direction -= 15;
        yield* this.wait(0.1);
        this.direction = 90;
      }
    }
  }

  *whenIReceiveAp2() {
    if (this.touching(Color.rgb(203, 219, 252))) {
      if (this.vars.lebendummy > 0) {
        this.vars.lebendummy += -10;
        this.direction -= 15;
        yield* this.wait(0.1);
        this.direction = 90;
      }
    }
  }

  *whenIReceiveAp1() {
    if (this.touching(Color.rgb(203, 219, 252))) {
      if (this.vars.lebendummy > 0) {
        this.vars.lebendummy += -5;
        this.direction -= 15;
        yield* this.wait(0.1);
        this.direction = 90;
      }
    }
  }

  *whenIReceiveAs1() {
    if (
      this.touching(Color.rgb(165, 174, 234)) ||
      this.touching(Color.rgb(194, 200, 240))
    ) {
      if (this.vars.lebendummy > 0) {
        this.vars.lebendummy += -10;
        this.direction -= 15;
        yield* this.wait(0.1);
        this.direction = 90;
      }
    }
  }

  *whenIReceive2() {
    this.goto(-196, -73);
    this.direction = 90;
    this.size = 40;
    this.visible = true;
    this.costume = "Kostüm1";
    this.vars.lebendummy = 100;
    while (true) {
      if (this.vars.lebendummy < 1) {
        this.costume = "Kostüm2";
        this.goto(-196, -73);
        this.direction = 90;
      }
      yield;
    }
  }

  *whenIReceiveDumdum() {
    if (this.vars.lebendummy > 0) {
      this.vars.lebendummy += -10;
      this.direction -= 15;
      yield* this.wait(0.1);
      this.direction = 90;
    }
  }

  *whenIReceiveDumdum2() {
    if (this.vars.lebendummy > 0) {
      this.vars.lebendummy += this.stage.vars.magieschaden * -1;
      this.direction -= 15;
      yield* this.wait(0.1);
      this.direction = 90;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTeststart() {
    this.goto(-196, -73);
    this.direction = 90;
    this.size = 40;
    this.visible = true;
    this.costume = "Kostüm1";
    this.vars.lebendummy = 100;
    while (true) {
      if (this.vars.lebendummy < 1) {
        this.costume = "Kostüm2";
        this.goto(-196, -73);
        this.direction = 90;
      }
      yield;
    }
  }
}
