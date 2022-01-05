/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Bühnenbild1", "./Stage/costumes/Bühnenbild1.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bühnenbild2", "./Stage/costumes/Bühnenbild2.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bühnenbild3", "./Stage/costumes/Bühnenbild3.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bühnenbild4", "./Stage/costumes/Bühnenbild4.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bühnenbild5", "./Stage/costumes/Bühnenbild5.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bühnenbild6", "./Stage/costumes/Bühnenbild6.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bühnenbild7", "./Stage/costumes/Bühnenbild7.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bühnenbild8", "./Stage/costumes/Bühnenbild8.png", {
        x: 480,
        y: 360
      }),
      new Costume(
        "Bildschirmfoto 2021-08-26 um 17.23.23",
        "./Stage/costumes/Bildschirmfoto 2021-08-26 um 17.23.23.png",
        { x: 480, y: 360 }
      ),
      new Costume("utk1707nbig21", "./Stage/costumes/utk1707nbig21.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bühnenbild9", "./Stage/costumes/Bühnenbild9.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bühnenbild10", "./Stage/costumes/Bühnenbild10.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("Plopp", "./Stage/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "slidecountdown" },
        this.whenIReceiveSlidecountdown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart5
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart7
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "changesword" },
        this.whenIReceiveChangesword
      )
    ];

    this.vars.movementstatus = 0;
    this.vars.swordstatus = 0;
    this.vars.crouch = 0;
    this.vars.stillanimation = 1;
    this.vars.movementanimation = 0;
    this.vars.attackanimation = 0;
    this.vars.swordtiming1 = 0;
    this.vars.attackn = 0;
    this.vars.swordtiming2 = 0;
    this.vars.swordinventory = 0;
    this.vars.slidecooldown = 0;
    this.vars.sworduse = 0;
    this.vars.punchtiming1 = 0;
    this.vars.punchtiming2 = 0;
    this.vars.bown = 0;
    this.vars.bowanimation = 0;
    this.vars.bowtiming = 0;
    this.vars.lebenadventurer = 50;
    this.vars.entfernungKnightAd = 43;
    this.vars.sliden = 2;
    this.vars.iframes = 0;
    this.vars.knightattackcooldown = 1;
    this.vars.don = 9;
    this.vars.lebenknight = 100;
    this.vars.kdgdcooldown = 0;
    this.vars.heightknight = -34;
    this.vars.heightadventurer = -56;
    this.vars.arrowgo = 0;
    this.vars.cast = 0;
    this.vars.castloop = 0;
    this.vars.castanimation = 0;
    this.vars.casttiming = 0;
    this.vars.tatakae = 0;
    this.vars.r = 1;
    this.vars.xposknight = 80.88329080678702;
    this.vars.xposadventurer = -140;
    this.vars.magieschaden = 20;
    this.vars.castgo = 0;
    this.vars.magicaadventurer = 45;
    this.vars.pfeilanzahl = 5;
    this.vars.maxpfeilanzahl = -9;
    this.vars.bHnenbild = 2;
    this.vars.bowinventory = 0;
    this.vars.ok = 0;
    this.vars.settings = 0;
    this.vars.sound = 1;
    this.vars.stoppa = 0;
    this.vars.stopstill = 0;
    this.vars.stoppmove = 0;
    this.vars.jump = 0;
  }

  *whenIReceiveSlidecountdown() {
    if (this.vars.sliden < 1) {
      yield* this.wait(0.4);
      this.vars.slidecooldown = 0;
      this.vars.sliden = 2;
    } else {
      yield* this.wait(0.05);
      this.vars.slidecooldown = 0;
    }
  }

  *whenIReceiveTeststart() {
    this.vars.lebenadventurer = 50;
    while (!(this.vars.lebenadventurer < 1)) {
      yield;
    }
    yield* this.wait(0.2);
    this.broadcast("pixisdie");
  }

  *whenIReceiveTeststart2() {
    this.vars.magicaadventurer = 45;
  }

  *whenIReceiveTeststart3() {
    this.vars.magieschaden = 20;
  }

  *whenIReceiveTeststart4() {
    while (true) {
      this.broadcast("xposcheck");
      yield;
    }
  }

  *whenIReceiveTeststart5() {
    this.vars.lebenknight = 100;
    while (!(this.vars.lebenknight < 1)) {
      yield;
    }
    yield* this.wait(0.2);
    this.broadcast("knightdie");
  }

  *whenGreenFlagClicked() {
    this.broadcast("Teststart");
    document.body.style.background = "black";
  }

  *whenIReceiveTeststart6() {
    this.vars.bHnenbild = 2;
    this.costume = "Bildschirmfoto 2021-08-26 um 17.23.23";
  }

  *whenIReceiveTeststart7() {
    while (true) {
      this.broadcast("xposcheck");
      yield;
    }
  }

  *whenIReceiveChangesword() {
    yield* this.wait(10);
    this.vars.swordstatus = 0;
    this.vars.stillanimation = 0;
  }
}
