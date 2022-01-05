/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blackball68x9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Blackball_68x9",
        "./Blackball68x9/costumes/Blackball_68x9.png",
        { x: 480, y: 44 }
      ),
      new Costume(
        "Blackball_68x2",
        "./Blackball68x9/costumes/Blackball_68x2.png",
        { x: 478, y: 44 }
      ),
      new Costume(
        "Blackball_68x3",
        "./Blackball68x9/costumes/Blackball_68x3.png",
        { x: 66, y: 6 }
      ),
      new Costume(
        "Blackball_68x4",
        "./Blackball68x9/costumes/Blackball_68x4.png",
        { x: 70, y: 6 }
      ),
      new Costume(
        "Blackball_68x5",
        "./Blackball68x9/costumes/Blackball_68x5.png",
        { x: 64, y: 6 }
      ),
      new Costume(
        "Blackball_68x6",
        "./Blackball68x9/costumes/Blackball_68x6.png",
        { x: 66, y: 6 }
      ),
      new Costume(
        "Blackball_68x7",
        "./Blackball68x9/costumes/Blackball_68x7.png",
        { x: 70, y: 6 }
      ),
      new Costume(
        "Blackball_68x8",
        "./Blackball68x9/costumes/Blackball_68x8.png",
        { x: 54, y: 6 }
      ),
      new Costume(
        "Blackball_68x10",
        "./Blackball68x9/costumes/Blackball_68x10.png",
        { x: 56, y: 6 }
      ),
      new Costume(
        "Blackball_68x11",
        "./Blackball68x9/costumes/Blackball_68x11.png",
        { x: 52, y: 6 }
      ),
      new Costume(
        "Blackball_68x12",
        "./Blackball68x9/costumes/Blackball_68x12.png",
        { x: 56, y: 6 }
      ),
      new Costume(
        "Blackball_68x13",
        "./Blackball68x9/costumes/Blackball_68x13.png",
        { x: 62, y: 6 }
      ),
      new Costume(
        "Small_Blackball_10x26",
        "./Blackball68x9/costumes/Small_Blackball_10x26.png",
        { x: 98, y: 150 }
      ),
      new Costume(
        "Small_Blackball_10x2",
        "./Blackball68x9/costumes/Small_Blackball_10x2.png",
        { x: 8, y: 30 }
      ),
      new Costume(
        "Small_Blackball_10x3",
        "./Blackball68x9/costumes/Small_Blackball_10x3.png",
        { x: 8, y: 26 }
      ),
      new Costume(
        "Small_Blackball_10x4",
        "./Blackball68x9/costumes/Small_Blackball_10x4.png",
        { x: 8, y: 34 }
      ),
      new Costume(
        "Small_Blackball_10x5",
        "./Blackball68x9/costumes/Small_Blackball_10x5.png",
        { x: 8, y: 38 }
      ),
      new Costume(
        "Small_Blackball_10x6",
        "./Blackball68x9/costumes/Small_Blackball_10x6.png",
        { x: 8, y: 28 }
      ),
      new Costume(
        "Small_Blackball_10x7",
        "./Blackball68x9/costumes/Small_Blackball_10x7.png",
        { x: 8, y: 30 }
      ),
      new Costume(
        "Small_Blackball_10x8",
        "./Blackball68x9/costumes/Small_Blackball_10x8.png",
        { x: 98, y: 148 }
      ),
      new Costume(
        "Small_Blackball_10x10",
        "./Blackball68x9/costumes/Small_Blackball_10x10.png",
        { x: 35, y: 32 }
      )
    ];

    this.sounds = [new Sound("Plopp", "./Blackball68x9/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "c2" }, this.whenIReceiveC2),
      new Trigger(Trigger.BROADCAST, { name: "c2" }, this.whenIReceiveC3),
      new Trigger(Trigger.BROADCAST, { name: "cast1" }, this.whenIReceiveCast1),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "castfire" },
        this.whenIReceiveCastfire
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2),
      new Trigger(Trigger.CLONE_START, this.startAsClone4)
    ];
  }

  *startAsClone() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.visible = true;
    if (this.stage.vars.tatakae == 1) {
      if (this.stage.vars.xposknight < this.stage.vars.xposadventurer) {
        this.direction = -90;
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.x += -15;
        yield* this.wait(0.2);
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.y += -2;
        this.x += -11;
        yield* this.wait(0.2);
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.y += -2;
        this.x += -9;
      } else {
        this.direction = 90;
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.x += 15;
        yield* this.wait(0.2);
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.y += -2;
        this.x += 11;
        yield* this.wait(0.2);
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.y += -2;
        this.x += 9;
      }
    } else {
      if (this.stage.vars.r == 1 && this.stage.vars.tatakae == 0) {
        this.direction = 90;
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.x += 15;
        yield* this.wait(0.2);
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.y += -2;
        this.x += 11;
        yield* this.wait(0.2);
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.y += -2;
        this.x += 9;
      } else {
        this.direction = -90;
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.x += -15;
        yield* this.wait(0.2);
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.y += -2;
        this.x += -11;
        yield* this.wait(0.2);
        this.goto(this.sprites["Adventurer"].x, this.sprites["Adventurer"].y);
        this.y += -2;
        this.x += -9;
      }
    }
    while (!(this.stage.vars.castgo == 1)) {
      yield;
    }
    if (this.stage.vars.tatakae == 1) {
      if (this.stage.vars.xposknight < this.stage.vars.xposadventurer) {
        this.direction = -90;
        for (let i = 0; i < 20; i++) {
          this.move(10);
          this.size += -5;
          yield;
        }
      } else {
        this.direction = 90;
        for (let i = 0; i < 20; i++) {
          this.move(10);
          this.size += -5;
          yield;
        }
      }
    } else {
      this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
      if (this.stage.vars.r == 1 && this.stage.vars.tatakae == 0) {
        this.direction = 90;
        for (let i = 0; i < 20; i++) {
          this.move(10);
          this.size += -5;
          yield;
        }
      } else {
        this.direction = -90;
        for (let i = 0; i < 20; i++) {
          this.move(10);
          this.size += -5;
          yield;
        }
      }
    }
    this.deleteThisClone();
  }

  *whenIReceiveC2() {
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.stage.vars.r = 0;
      }
      yield;
    }
  }

  *whenIReceiveC3() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.stage.vars.r = 1;
      }
      yield;
    }
  }

  *whenIReceiveCast1() {
    if (this.stage.vars.magicaadventurer > -1) {
      this.createClone();
    }
  }

  *startAsClone2() {
    this.visible = true;
    this.size = 50;
    this.costume = "Small_Blackball_10x2";
    yield* this.wait(0.1);
    this.costume = "Small_Blackball_10x3";
    yield* this.wait(0.1);
    this.costume = "Small_Blackball_10x4";
    yield* this.wait(0.1);
    this.size = 70;
    this.costume = "Small_Blackball_10x5";
    yield* this.wait(0.1);
    this.costume = "Small_Blackball_10x6";
    yield* this.wait(0.1);
    this.costume = "Small_Blackball_10x7";
    yield* this.wait(0.1);
    this.size = 150;
    this.costume = "Blackball_68x3";
    yield* this.wait(0.1);
    this.costume = "Blackball_68x4";
    yield* this.wait(0.1);
    this.costume = "Blackball_68x5";
    yield* this.wait(0.1);
    this.costume = "Blackball_68x6";
    yield* this.wait(0.1);
    this.costume = "Blackball_68x7";
    yield* this.wait(0.1);
    this.costume = "Blackball_68x8";
    yield* this.wait(0.1);
    this.costume = "Blackball_68x10";
    yield* this.wait(0.1);
    this.costume = "Blackball_68x11";
    yield* this.wait(0.1);
    this.costume = "Blackball_68x12";
    yield* this.wait(0.1);
    this.costume = "Blackball_68x13";
  }

  *whenIReceiveCastfire() {
    this.stage.vars.castgo = 1;
    yield* this.wait(0.1);
    this.stage.vars.castgo = 0;
  }

  *startAsClone3() {
    while (true) {
      if (this.touching(this.sprites[undefined].andClones())) {
        this.size = 70;
        this.broadcast("knightgethurt");
        this.stage.vars.lebenknight += this.stage.vars.magieschaden * -1;
        this.moveAhead();
        this.costume = "Small_Blackball_10x10";
        yield* this.wait(0.2);
        this.broadcast("c2");
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceive2() {
    this.broadcast("c2");
  }

  *startAsClone4() {
    while (true) {
      if (this.touching(this.sprites["Trainingdummy"].andClones())) {
        this.size = 70;
        this.broadcast("dumdum2");
        this.moveAhead();
        this.costume = "Small_Blackball_10x10";
        yield* this.wait(0.2);
        this.broadcast("c2");
        this.deleteThisClone();
      }
      yield;
    }
  }
}
