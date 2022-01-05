/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ArrowAmmocounter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./ArrowAmmocounter/costumes/Kostüm1.png", {
        x: 6,
        y: 8
      }),
      new Costume("Kostüm2", "./ArrowAmmocounter/costumes/Kostüm2.png", {
        x: 7,
        y: 10
      }),
      new Costume("Kostüm3", "./ArrowAmmocounter/costumes/Kostüm3.png", {
        x: 8,
        y: 11
      }),
      new Costume("Kostüm4", "./ArrowAmmocounter/costumes/Kostüm4.png", {
        x: 8,
        y: 11
      }),
      new Costume("Kostüm5", "./ArrowAmmocounter/costumes/Kostüm5.png", {
        x: 9,
        y: 12
      })
    ];

    this.sounds = [new Sound("Plopp", "./ArrowAmmocounter/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "bowinventory" },
        this.whenIReceiveBowinventory
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveBowinventory() {
    this.visible = true;
    this.goto(this.sprites["ArrowAmmo"].x, this.sprites["ArrowAmmo"].y);
    this.x += -6;
    this.y += -3;
    this.size = 71.4;
    while (true) {
      if (this.stage.vars.pfeilanzahl == 5) {
        this.costume = "Kostüm1";
        this.visible = true;
      }
      if (this.stage.vars.pfeilanzahl == 4) {
        this.costume = "Kostüm2";
        this.visible = true;
      }
      if (this.stage.vars.pfeilanzahl == 3) {
        this.costume = "Kostüm3";
        this.visible = true;
      }
      if (this.stage.vars.pfeilanzahl == 2) {
        this.costume = "Kostüm4";
        this.visible = true;
      }
      if (this.stage.vars.pfeilanzahl == 1) {
        this.costume = "Kostüm5";
        this.visible = true;
      }
      if (this.stage.vars.pfeilanzahl < 1) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
