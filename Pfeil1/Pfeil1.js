/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pfeil1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Pfeil1/costumes/Kostüm1.png", { x: 20, y: 6 })
    ];

    this.sounds = [new Sound("Plopp", "./Pfeil1/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "arrvis" },
        this.whenIReceiveArrvis
      ),
      new Trigger(Trigger.BROADCAST, { name: "arrgo" }, this.whenIReceiveArrgo),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive3),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive4),
      new Trigger(Trigger.CLONE_START, this.startAsClone3)
    ];
  }

  *whenIReceiveArrvis() {
    this.createClone();
  }

  *whenIReceiveArrgo() {
    this.stage.vars.arrowgo = 1;
    yield* this.wait(0.1);
    this.stage.vars.arrowgo = 0;
  }

  *whenIReceive2() {
    this.stage.vars.r = 1;
    while (true) {
      this.moveAhead();
      this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
      this.size = 30;
      this.direction = 90;
      this.y += -3;
      this.x += 10;
      this.visible = false;
      yield;
    }
  }

  *whenIReceive3() {
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.stage.vars.r = 0;
      }
      yield;
    }
  }

  *startAsClone() {
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
    this.visible = true;
    if (this.stage.vars.tatakae == 1) {
      if (this.stage.vars.xposknight < this.stage.vars.xposadventurer) {
        this.x += -20;
        this.direction = -90;
      } else {
        this.direction = 90;
      }
    } else {
      if (this.stage.vars.r == 1 && this.stage.vars.tatakae == 0) {
        this.direction = 90;
      } else {
        this.x += -20;
        this.direction = -90;
      }
    }
    while (!(this.stage.vars.arrowgo == 1)) {
      yield;
    }
    if (this.stage.vars.tatakae == 1) {
      if (this.stage.vars.xposknight < this.stage.vars.xposadventurer) {
        this.direction = -90;
        while (
          !(
            this.touching(this.sprites["Boden2WSte"].andClones()) ||
            this.touching(this.sprites[undefined].andClones())
          )
        ) {
          this.move(15);
          this.direction -= 0.555;
          yield;
        }
      } else {
        this.direction = 90;
        while (
          !(
            this.touching(this.sprites["Boden2WSte"].andClones()) ||
            this.touching(this.sprites[undefined].andClones())
          )
        ) {
          this.move(15);
          this.direction += 0.555;
          yield;
        }
      }
    } else {
      this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
      if (this.stage.vars.r == 1 && this.stage.vars.tatakae == 0) {
        this.direction = 90;
        while (
          !(
            this.touching(this.sprites["Boden2WSte"].andClones()) ||
            this.touching(this.sprites[undefined].andClones())
          )
        ) {
          this.move(15);
          this.direction += 0.555;
          yield;
        }
      } else {
        this.direction = -90;
        while (
          !(
            this.touching(this.sprites["Boden2WSte"].andClones()) ||
            this.touching(this.sprites[undefined].andClones())
          )
        ) {
          this.move(15);
          this.direction -= 0.555;
          yield;
        }
      }
    }
    if (this.touching(this.sprites[undefined].andClones())) {
      this.broadcast("knightgethurt");
      this.stage.vars.lebenknight += -10;
    }
    yield* this.wait(0.2);
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites[undefined].andClones())) {
        yield* this.wait(0.1);
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceive4() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.stage.vars.r = 1;
      }
      yield;
    }
  }

  *startAsClone3() {
    while (true) {
      if (this.touching(this.sprites["Trainingdummy"].andClones())) {
        this.broadcast("dumdum");
        yield* this.wait(0.2);
        this.deleteThisClone();
      }
      yield;
    }
  }
}
