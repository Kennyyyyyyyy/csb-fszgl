/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Adventurer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "adventurer-run3-00",
        "./Adventurer/costumes/adventurer-run3-00.png",
        { x: 26, y: 20 }
      ),
      new Costume(
        "adventurer-run3-01",
        "./Adventurer/costumes/adventurer-run3-01.png",
        { x: 24, y: 18 }
      ),
      new Costume(
        "adventurer-run3-02",
        "./Adventurer/costumes/adventurer-run3-02.png",
        { x: 24, y: 14 }
      ),
      new Costume(
        "adventurer-run3-03",
        "./Adventurer/costumes/adventurer-run3-03.png",
        { x: 24, y: 20 }
      ),
      new Costume(
        "adventurer-run3-04",
        "./Adventurer/costumes/adventurer-run3-04.png",
        { x: 24, y: 18 }
      ),
      new Costume(
        "adventurer-run3-05",
        "./Adventurer/costumes/adventurer-run3-05.png",
        { x: 22, y: 14 }
      ),
      new Costume(
        "adventurer-run-00",
        "./Adventurer/costumes/adventurer-run-00.png",
        { x: 16, y: 20 }
      ),
      new Costume(
        "adventurer-run-01",
        "./Adventurer/costumes/adventurer-run-01.png",
        { x: 18, y: 18 }
      ),
      new Costume(
        "adventurer-run-02",
        "./Adventurer/costumes/adventurer-run-02.png",
        { x: 18, y: 14 }
      ),
      new Costume(
        "adventurer-run-03",
        "./Adventurer/costumes/adventurer-run-03.png",
        { x: 16, y: 20 }
      ),
      new Costume(
        "adventurer-run-04",
        "./Adventurer/costumes/adventurer-run-04.png",
        { x: 18, y: 18 }
      ),
      new Costume(
        "adventurer-run-05",
        "./Adventurer/costumes/adventurer-run-05.png",
        { x: 18, y: 14 }
      ),
      new Costume(
        "adventurer-crouch-00",
        "./Adventurer/costumes/adventurer-crouch-00.png",
        { x: 18, y: 6 }
      ),
      new Costume(
        "adventurer-crouch-01",
        "./Adventurer/costumes/adventurer-crouch-01.png",
        { x: 20, y: 8 }
      ),
      new Costume(
        "adventurer-crouch-02",
        "./Adventurer/costumes/adventurer-crouch-02.png",
        { x: 20, y: 6 }
      ),
      new Costume(
        "adventurer-crouch-03",
        "./Adventurer/costumes/adventurer-crouch-03.png",
        { x: 16, y: 6 }
      ),
      new Costume(
        "adventurer-idle-00",
        "./Adventurer/costumes/adventurer-idle-00.png",
        { x: 22, y: 22 }
      ),
      new Costume(
        "adventurer-idle-01",
        "./Adventurer/costumes/adventurer-idle-01.png",
        { x: 18, y: 24 }
      ),
      new Costume(
        "adventurer-idle-02",
        "./Adventurer/costumes/adventurer-idle-02.png",
        { x: 20, y: 24 }
      ),
      new Costume(
        "adventurer-idle-03",
        "./Adventurer/costumes/adventurer-idle-03.png",
        { x: 24, y: 22 }
      ),
      new Costume(
        "adventurer-idle-2-00",
        "./Adventurer/costumes/adventurer-idle-2-00.png",
        { x: 30, y: 18 }
      ),
      new Costume(
        "adventurer-idle-2-01",
        "./Adventurer/costumes/adventurer-idle-2-01.png",
        { x: 30, y: 18 }
      ),
      new Costume(
        "adventurer-idle-2-02",
        "./Adventurer/costumes/adventurer-idle-2-02.png",
        { x: 32, y: 20 }
      ),
      new Costume(
        "adventurer-idle-2-03",
        "./Adventurer/costumes/adventurer-idle-2-03.png",
        { x: 32, y: 20 }
      ),
      new Costume(
        "adventurer-attack1-00",
        "./Adventurer/costumes/adventurer-attack1-00.png",
        { x: 36, y: 8 }
      ),
      new Costume(
        "adventurer-attack1-01",
        "./Adventurer/costumes/adventurer-attack1-01.png",
        { x: 34, y: 4 }
      ),
      new Costume(
        "adventurer-attack1-02",
        "./Adventurer/costumes/adventurer-attack1-02.png",
        { x: 20, y: 36 }
      ),
      new Costume(
        "adventurer-attack1-03",
        "./Adventurer/costumes/adventurer-attack1-03.png",
        { x: 20, y: 36 }
      ),
      new Costume(
        "adventurer-attack1-04",
        "./Adventurer/costumes/adventurer-attack1-04.png",
        { x: 20, y: 28 }
      ),
      new Costume(
        "adventurer-attack2-00",
        "./Adventurer/costumes/adventurer-attack2-00.png",
        { x: 20, y: 16 }
      ),
      new Costume(
        "adventurer-attack2-01",
        "./Adventurer/costumes/adventurer-attack2-01.png",
        { x: 20, y: 18 }
      ),
      new Costume(
        "adventurer-attack2-02",
        "./Adventurer/costumes/adventurer-attack2-02.png",
        { x: 24, y: 18 }
      ),
      new Costume(
        "adventurer-attack2-03",
        "./Adventurer/costumes/adventurer-attack2-03.png",
        { x: 30, y: 22 }
      ),
      new Costume(
        "adventurer-attack2-04",
        "./Adventurer/costumes/adventurer-attack2-04.png",
        { x: 46, y: 6 }
      ),
      new Costume(
        "adventurer-attack2-05",
        "./Adventurer/costumes/adventurer-attack2-05.png",
        { x: 46, y: 8 }
      ),
      new Costume(
        "adventurer-attack3-00",
        "./Adventurer/costumes/adventurer-attack3-00.png",
        { x: 12, y: 16 }
      ),
      new Costume(
        "adventurer-attack3-01",
        "./Adventurer/costumes/adventurer-attack3-01.png",
        { x: 10, y: 16 }
      ),
      new Costume(
        "adventurer-attack3-02",
        "./Adventurer/costumes/adventurer-attack3-02.png",
        { x: 46, y: 10 }
      ),
      new Costume(
        "adventurer-attack3-03",
        "./Adventurer/costumes/adventurer-attack3-03.png",
        { x: 44, y: 2 }
      ),
      new Costume(
        "adventurer-attack3-04",
        "./Adventurer/costumes/adventurer-attack3-04.png",
        { x: 50, y: 4 }
      ),
      new Costume(
        "adventurer-attack3-05",
        "./Adventurer/costumes/adventurer-attack3-05.png",
        { x: 50, y: 4 }
      ),
      new Costume(
        "adventurer-jump-00",
        "./Adventurer/costumes/adventurer-jump-00.png",
        { x: 20, y: 12 }
      ),
      new Costume(
        "adventurer-jump-01",
        "./Adventurer/costumes/adventurer-jump-01.png",
        { x: 20, y: 8 }
      ),
      new Costume(
        "adventurer-jump-02",
        "./Adventurer/costumes/adventurer-jump-02.png",
        { x: 16, y: 22 }
      ),
      new Costume(
        "adventurer-jump-03",
        "./Adventurer/costumes/adventurer-jump-03.png",
        { x: 22, y: 26 }
      ),
      new Costume(
        "adventurer-slide-00",
        "./Adventurer/costumes/adventurer-slide-00.png",
        { x: 40, y: -6 }
      ),
      new Costume(
        "adventurer-slide-01",
        "./Adventurer/costumes/adventurer-slide-01.png",
        { x: 40, y: -6 }
      ),
      new Costume(
        "adventurer-smrslt-00",
        "./Adventurer/costumes/adventurer-smrslt-00.png",
        { x: 14, y: 20 }
      ),
      new Costume(
        "adventurer-smrslt-01",
        "./Adventurer/costumes/adventurer-smrslt-01.png",
        { x: 22, y: 16 }
      ),
      new Costume(
        "adventurer-smrslt-02",
        "./Adventurer/costumes/adventurer-smrslt-02.png",
        { x: 10, y: 16 }
      ),
      new Costume(
        "adventurer-smrslt-03",
        "./Adventurer/costumes/adventurer-smrslt-03.png",
        { x: 22, y: 10 }
      ),
      new Costume(
        "adventurer-stand-00",
        "./Adventurer/costumes/adventurer-stand-00.png",
        { x: 40, y: -4 }
      ),
      new Costume(
        "adventurer-stand-01",
        "./Adventurer/costumes/adventurer-stand-01.png",
        { x: 32, y: -2 }
      ),
      new Costume(
        "adventurer-stand-02",
        "./Adventurer/costumes/adventurer-stand-02.png",
        { x: 20, y: -2 }
      ),
      new Costume(
        "adventurer-crouch-walk-00",
        "./Adventurer/costumes/adventurer-crouch-walk-00.png",
        { x: 18, y: 6 }
      ),
      new Costume(
        "adventurer-crouch-walk-01",
        "./Adventurer/costumes/adventurer-crouch-walk-01.png",
        { x: 20, y: 8 }
      ),
      new Costume(
        "adventurer-crouch-walk-02",
        "./Adventurer/costumes/adventurer-crouch-walk-02.png",
        { x: 20, y: 6 }
      ),
      new Costume(
        "adventurer-crouch-walk-03",
        "./Adventurer/costumes/adventurer-crouch-walk-03.png",
        { x: 18, y: 6 }
      ),
      new Costume(
        "adventurer-crouch-walk-04",
        "./Adventurer/costumes/adventurer-crouch-walk-04.png",
        { x: 20, y: 8 }
      ),
      new Costume(
        "adventurer-crouch-walk-05",
        "./Adventurer/costumes/adventurer-crouch-walk-05.png",
        { x: 20, y: 6 }
      ),
      new Costume(
        "adventurer-punch-00",
        "./Adventurer/costumes/adventurer-punch-00.png",
        { x: 20, y: 14 }
      ),
      new Costume(
        "adventurer-punch-01",
        "./Adventurer/costumes/adventurer-punch-01.png",
        { x: 24, y: 14 }
      ),
      new Costume(
        "adventurer-punch-02",
        "./Adventurer/costumes/adventurer-punch-02.png",
        { x: 22, y: 8 }
      ),
      new Costume(
        "adventurer-punch-05",
        "./Adventurer/costumes/adventurer-punch-05.png",
        { x: 20, y: 12 }
      ),
      new Costume(
        "adventurer-punch-06",
        "./Adventurer/costumes/adventurer-punch-06.png",
        { x: 28, y: 8 }
      ),
      new Costume(
        "adventurer-punch-07",
        "./Adventurer/costumes/adventurer-punch-07.png",
        { x: 18, y: 10 }
      ),
      new Costume(
        "adventurer-punch-08",
        "./Adventurer/costumes/adventurer-punch-08.png",
        { x: 20, y: 10 }
      ),
      new Costume(
        "adventurer-punch-09",
        "./Adventurer/costumes/adventurer-punch-09.png",
        { x: 20, y: 6 }
      ),
      new Costume(
        "adventurer-punch-10",
        "./Adventurer/costumes/adventurer-punch-10.png",
        { x: 18, y: 12 }
      ),
      new Costume(
        "adventurer-punch-11",
        "./Adventurer/costumes/adventurer-punch-11.png",
        { x: 18, y: 12 }
      ),
      new Costume(
        "adventurer-punch-12",
        "./Adventurer/costumes/adventurer-punch-12.png",
        { x: 18, y: 12 }
      ),
      new Costume(
        "adventurer-punch-03",
        "./Adventurer/costumes/adventurer-punch-03.png",
        { x: 18, y: 10 }
      ),
      new Costume(
        "adventurer-punch-04",
        "./Adventurer/costumes/adventurer-punch-04.png",
        { x: 20, y: 12 }
      ),
      new Costume(
        "adventurer-bow-00",
        "./Adventurer/costumes/adventurer-bow-00.png",
        { x: 18, y: 16 }
      ),
      new Costume(
        "adventurer-bow-01",
        "./Adventurer/costumes/adventurer-bow-01.png",
        { x: 20, y: 14 }
      ),
      new Costume(
        "adventurer-bow-02",
        "./Adventurer/costumes/adventurer-bow-02.png",
        { x: 16, y: 12 }
      ),
      new Costume(
        "adventurer-bow-03",
        "./Adventurer/costumes/adventurer-bow-03.png",
        { x: 22, y: 14 }
      ),
      new Costume(
        "adventurer-bow-04",
        "./Adventurer/costumes/adventurer-bow-04.png",
        { x: 22, y: 16 }
      ),
      new Costume(
        "adventurer-bow-05",
        "./Adventurer/costumes/adventurer-bow-05.png",
        { x: 20, y: 14 }
      ),
      new Costume(
        "adventurer-bow-06",
        "./Adventurer/costumes/adventurer-bow-06.png",
        { x: 22, y: 16 }
      ),
      new Costume(
        "adventurer-bow-07",
        "./Adventurer/costumes/adventurer-bow-07.png",
        { x: 28, y: 16 }
      ),
      new Costume(
        "adventurer-bow-08",
        "./Adventurer/costumes/adventurer-bow-08.png",
        { x: 20, y: 16 }
      ),
      new Costume(
        "adventurer-bow-jump-00",
        "./Adventurer/costumes/adventurer-bow-jump-00.png",
        { x: 14, y: 18 }
      ),
      new Costume(
        "adventurer-bow-jump-01",
        "./Adventurer/costumes/adventurer-bow-jump-01.png",
        { x: 22, y: 20 }
      ),
      new Costume(
        "adventurer-bow-jump-02",
        "./Adventurer/costumes/adventurer-bow-jump-02.png",
        { x: 24, y: 22 }
      ),
      new Costume(
        "adventurer-bow-jump-03",
        "./Adventurer/costumes/adventurer-bow-jump-03.png",
        { x: 28, y: 20 }
      ),
      new Costume(
        "adventurer-bow-jump-04",
        "./Adventurer/costumes/adventurer-bow-jump-04.png",
        { x: 28, y: 22 }
      ),
      new Costume(
        "adventurer-bow-jump-05",
        "./Adventurer/costumes/adventurer-bow-jump-05.png",
        { x: 30, y: 22 }
      ),
      new Costume(
        "adventurer-hurt-00",
        "./Adventurer/costumes/adventurer-hurt-00.png",
        { x: 18, y: 12 }
      ),
      new Costume(
        "adventurer-hurt-01",
        "./Adventurer/costumes/adventurer-hurt-01.png",
        { x: 16, y: 12 }
      ),
      new Costume(
        "adventurer-hurt-02",
        "./Adventurer/costumes/adventurer-hurt-02.png",
        { x: 20, y: 12 }
      ),
      new Costume(
        "adventurer-die-00",
        "./Adventurer/costumes/adventurer-die-00.png",
        { x: 18, y: 12 }
      ),
      new Costume(
        "adventurer-die-01",
        "./Adventurer/costumes/adventurer-die-01.png",
        { x: 16, y: 12 }
      ),
      new Costume(
        "adventurer-die-02",
        "./Adventurer/costumes/adventurer-die-02.png",
        { x: 20, y: 12 }
      ),
      new Costume(
        "adventurer-die-03",
        "./Adventurer/costumes/adventurer-die-03.png",
        { x: 18, y: 8 }
      ),
      new Costume(
        "adventurer-die-05",
        "./Adventurer/costumes/adventurer-die-05.png",
        { x: 8, y: -2 }
      ),
      new Costume(
        "adventurer-die-06",
        "./Adventurer/costumes/adventurer-die-06.png",
        { x: 14, y: 0 }
      ),
      new Costume(
        "adventurer-die-04",
        "./Adventurer/costumes/adventurer-die-04.png",
        { x: 14, y: 0 }
      ),
      new Costume(
        "adventurer-cast-00",
        "./Adventurer/costumes/adventurer-cast-00.png",
        { x: 20, y: 16 }
      ),
      new Costume(
        "adventurer-cast-01",
        "./Adventurer/costumes/adventurer-cast-01.png",
        { x: 20, y: 14 }
      ),
      new Costume(
        "adventurer-cast-02",
        "./Adventurer/costumes/adventurer-cast-02.png",
        { x: 18, y: 14 }
      ),
      new Costume(
        "adventurer-cast-03",
        "./Adventurer/costumes/adventurer-cast-03.png",
        { x: 20, y: 12 }
      ),
      new Costume(
        "adventurer-cast-loop-00",
        "./Adventurer/costumes/adventurer-cast-loop-00.png",
        { x: 20, y: 12 }
      ),
      new Costume(
        "adventurer-cast-loop-01",
        "./Adventurer/costumes/adventurer-cast-loop-01.png",
        { x: 24, y: 12 }
      ),
      new Costume(
        "adventurer-cast-loop-02",
        "./Adventurer/costumes/adventurer-cast-loop-02.png",
        { x: 20, y: 12 }
      ),
      new Costume(
        "adventurer-cast-loop-03",
        "./Adventurer/costumes/adventurer-cast-loop-03.png",
        { x: 24, y: 12 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "crouchcontrol" },
        this.whenIReceiveCrouchcontrol
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "crouchcontrol2" },
        this.whenIReceiveCrouchcontrol2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "attack3" },
        this.whenIReceiveAttack3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stillcrouch" },
        this.whenIReceiveStillcrouch
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "swordcontrol2" },
        this.whenIReceiveSwordcontrol2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "attack1" },
        this.whenIReceiveAttack1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "attack2" },
        this.whenIReceiveAttack2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "punch2" },
        this.whenIReceivePunch2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht5
      ),
      new Trigger(Trigger.BROADCAST, { name: "bow1" }, this.whenIReceiveBow1),
      new Trigger(Trigger.BROADCAST, { name: "bow2" }, this.whenIReceiveBow2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "punch1" },
        this.whenIReceivePunch1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "punch2" },
        this.whenIReceivePunch3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "punch3" },
        this.whenIReceivePunch4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "enemyattack" },
        this.whenIReceiveEnemyattack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "swordcontrol" },
        this.whenIReceiveSwordcontrol
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "attack1" },
        this.whenIReceiveAttack4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "attack2" },
        this.whenIReceiveAttack5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "punch1" },
        this.whenIReceivePunch5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "pixisdie" },
        this.whenIReceivePixisdie
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht7
      ),
      new Trigger(Trigger.BROADCAST, { name: "cast1" }, this.whenIReceiveCast1),
      new Trigger(
        Trigger.BROADCAST,
        { name: "castloop" },
        this.whenIReceiveCastloop
      ),
      new Trigger(Trigger.BROADCAST, { name: "cast1" }, this.whenIReceiveCast2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "xposcheck" },
        this.whenIReceiveXposcheck
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht3" },
        this.whenIReceiveNachricht8
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht9
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht10
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Teststart" },
        this.whenIReceiveTeststart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht11
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "changesword" },
        this.whenIReceiveChangesword
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "pixisgethurt" },
        this.whenIReceivePixisgethurt
      ),
      new Trigger(Trigger.BROADCAST, { name: "still" }, this.whenIReceiveStill),
      new Trigger(Trigger.BROADCAST, { name: "STOPP" }, this.whenIReceiveStopp),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stillsword" },
        this.whenIReceiveStillsword
      ),
      new Trigger(Trigger.BROADCAST, { name: "bow1" }, this.whenIReceiveBow3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "STOPPMOVE" },
        this.whenIReceiveStoppmove
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "STOPPSTILL" },
        this.whenIReceiveStoppstill
      ),
      new Trigger(Trigger.BROADCAST, { name: "lauf2" }, this.whenIReceiveLauf2),
      new Trigger(Trigger.BROADCAST, { name: "lauf3" }, this.whenIReceiveLauf3),
      new Trigger(Trigger.BROADCAST, { name: "lauf" }, this.whenIReceiveLauf),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nachricht1" },
        this.whenIReceiveNachricht12
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenIReceiveNachricht1() {
    while (true) {
      if (
        this.stage.vars.movementstatus == 1 &&
        this.stage.vars.movementanimation == 0 &&
        this.stage.vars.jump == 0
      ) {
        if (this.stage.vars.swordstatus == 1 && this.stage.vars.crouch == 0) {
          this.broadcast("STOPPSTILL");
          this.broadcast("lauf");
          this.stage.vars.stillanimation = 0;
          this.stage.vars.movementanimation = 1;
          this.broadcast("crouchcontrol2");
          this.broadcast("swordcontrol2");
          this.broadcast("Nachricht1");
        }
        if (this.stage.vars.swordstatus == 0 && this.stage.vars.crouch == 0) {
          this.broadcast("STOPPSTILL");
          this.broadcast("lauf2");
          this.stage.vars.stillanimation = 0;
          this.stage.vars.movementanimation = 1;
          this.broadcast("crouchcontrol2");
          this.broadcast("swordcontrol2");
          this.broadcast("Nachricht1");
        }
        if (this.stage.vars.crouch == 1) {
          this.broadcast("STOPPSTILL");
          this.broadcast("lauf3");
          this.stage.vars.stillanimation = 0;
          this.stage.vars.movementanimation = 1;
          this.broadcast("crouchcontrol2");
          this.broadcast("swordcontrol2");
          this.broadcast("Nachricht1");
        }
      }
      yield;
    }
  }

  *whenIReceiveCrouchcontrol() {
    while (true) {
      if (this.stage.vars.movementstatus == 0 && this.keyPressed("s")) {
        if (this.stage.vars.crouch == 1) {
          this.stage.vars.crouch = 0;
          this.stage.vars.stillanimation = 0;
          this.broadcast("crouchcontrol2");
          return;
        }
        if (this.stage.vars.crouch == 0) {
          this.stage.vars.crouch = 1;
          this.stage.vars.stillanimation = 0;
          this.broadcast("crouchcontrol2");
          return;
        }
      }
      yield;
    }
  }

  *whenIReceiveCrouchcontrol2() {
    yield* this.wait(0.5);
    this.broadcast("crouchcontrol");
  }

  *whenIReceiveAttack3() {
    this.costume = "adventurer-attack3-00";
    yield* this.wait(0.15);
    this.costume = "adventurer-attack3-01";
    this.move(15);
    this.y = this.stage.vars.heightadventurer;
    yield* this.wait(0.15);
    this.costume = "adventurer-attack3-02";
    this.broadcast("as3");
    yield* this.wait(0.15);
    this.costume = "adventurer-attack3-03";
    yield* this.wait(0.15);
    this.costume = "adventurer-attack3-04";
    yield* this.wait(0.15);
    this.costume = "adventurer-attack3-05";
  }

  *whenIReceiveNachricht2() {
    while (true) {
      if (this.stage.vars.crouch == 0) {
        if (this.stage.vars.sworduse == 1) {
          if (this.stage.vars.attackn == 0) {
            if (this.keyPressed("space")) {
              this.broadcast("STOPPMOVE");
              this.broadcast("STOPPSTILL");
              this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
              this.direction = this.radToScratch(
                Math.atan2(
                  this.sprites[undefined].y - this.y,
                  this.sprites[undefined].x - this.x
                )
              );
              this.broadcast("attack1");
              this.stage.vars.attackn = 1;
              this.stage.vars.stillanimation = 0;
              this.stage.vars.attackanimation = 1;
              this.stage.vars.swordstatus = 1;
              this.y = this.stage.vars.heightadventurer;
              yield* this.wait(0.75);
              this.y = this.stage.vars.heightadventurer;
              while (
                !(this.stage.vars.swordtiming1 == 1 || this.keyPressed("space"))
              ) {
                yield;
              }
              if (this.keyPressed("space")) {
                this.direction = this.radToScratch(
                  Math.atan2(
                    this.sprites[undefined].y - this.y,
                    this.sprites[undefined].x - this.x
                  )
                );
                this.broadcast("attack2");
                this.stage.vars.attackn = 2;
                this.stage.vars.swordtiming1 = 0;
                this.stage.vars.swordstatus = 1;
                this.y = this.stage.vars.heightadventurer;
                yield* this.wait(0.65);
                this.y = this.stage.vars.heightadventurer;
                while (
                  !(
                    this.stage.vars.swordtiming2 == 1 ||
                    this.keyPressed("space")
                  )
                ) {
                  yield;
                }
                if (this.keyPressed("space")) {
                  this.direction = this.radToScratch(
                    Math.atan2(
                      this.sprites[undefined].y - this.y,
                      this.sprites[undefined].x - this.x
                    )
                  );
                  this.broadcast("attack3");
                  this.stage.vars.attackn = 3;
                  this.stage.vars.swordtiming2 = 0;
                  this.stage.vars.swordstatus = 1;
                  this.y = this.stage.vars.heightadventurer;
                  yield* this.wait(0.75);
                  this.y = this.stage.vars.heightadventurer;
                  yield* this.wait(0.1);
                  this.stage.vars.swordstatus = 1;
                  this.stage.vars.attackanimation = 0;
                  this.stage.vars.movementanimation = 0;
                  this.stage.vars.attackn = 0;
                  this.stage.vars.swordtiming2 = 0;
                  this.stage.vars.swordtiming1 = 0;
                  this.broadcast("Nachricht1");
                  this.broadcast("changesword");
                  this.broadcast("crouchcontrol2");
                  this.broadcast("swordcontrol2");
                } else {
                  yield* this.wait(0.1);
                  this.stage.vars.swordstatus = 1;
                  this.stage.vars.movementanimation = 0;
                  this.stage.vars.attackanimation = 0;
                  this.stage.vars.attackn = 0;
                  this.stage.vars.swordtiming2 = 0;
                  this.stage.vars.swordtiming1 = 0;
                  this.y = this.stage.vars.heightadventurer;
                  this.broadcast("Nachricht1");
                  this.broadcast("changesword");
                  this.broadcast("crouchcontrol2");
                  this.broadcast("swordcontrol2");
                }
              } else {
                yield* this.wait(0.1);
                this.stage.vars.swordstatus = 1;
                this.stage.vars.attackanimation = 0;
                this.stage.vars.movementanimation = 0;
                this.stage.vars.attackn = 0;
                this.stage.vars.swordtiming1 = 0;
                this.stage.vars.swordtiming2 = 0;
                this.y = this.stage.vars.heightadventurer;
                this.broadcast("Nachricht1");
                this.broadcast("changesword");
                this.broadcast("crouchcontrol2");
                this.broadcast("swordcontrol2");
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveStillcrouch() {
    while (!(this.stage.vars.movementstatus == 1)) {
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-00";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-01";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-02";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-03";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      yield;
    }
  }

  *whenIReceiveNachricht3() {
    while (true) {
      if (this.keyPressed("left arrow") || this.keyPressed("right arrow")) {
        if (
          this.stage.vars.attackanimation == 0 &&
          this.stage.vars.bowanimation == 0 &&
          this.stage.vars.jump == 0 &&
          this.stage.vars.castanimation == 0
        ) {
          this.stage.vars.movementstatus = 1;
        }
      } else {
        this.stage.vars.movementstatus = 0;
        this.stage.vars.movementanimation = 0;
      }
      yield;
    }
  }

  *whenIReceiveNachricht4() {
    while (true) {
      if (this.stage.vars.crouch == 0) {
        if (this.stage.vars.sworduse == 0) {
          if (this.stage.vars.attackn == 0) {
            if (this.keyPressed("space")) {
              this.broadcast("STOPPMOVE");
              this.broadcast("STOPPSTILL");
              if (this.stage.vars.tatakae == 1) {
                this.direction = this.radToScratch(
                  Math.atan2(
                    this.sprites[undefined].y - this.y,
                    this.sprites[undefined].x - this.x
                  )
                );
              }
              this.broadcast("punch1");
              this.stage.vars.attackn = 1;
              this.stage.vars.stillanimation = 0;
              this.stage.vars.attackanimation = 1;
              this.y = this.stage.vars.heightadventurer;
              yield* this.wait(0.75);
              this.y = this.stage.vars.heightadventurer;
              while (
                !(this.stage.vars.punchtiming1 == 1 || this.keyPressed("space"))
              ) {
                yield;
              }
              if (this.keyPressed("space")) {
                if (this.stage.vars.tatakae == 1) {
                  this.direction = this.radToScratch(
                    Math.atan2(
                      this.sprites[undefined].y - this.y,
                      this.sprites[undefined].x - this.x
                    )
                  );
                }
                this.broadcast("punch2");
                this.stage.vars.attackn = 2;
                this.stage.vars.punchtiming1 = 0;
                this.y = this.stage.vars.heightadventurer;
                yield* this.wait(0.6);
                this.y = this.stage.vars.heightadventurer;
                while (
                  !(
                    this.stage.vars.punchtiming2 == 1 ||
                    this.keyPressed("space")
                  )
                ) {
                  yield;
                }
                if (this.keyPressed("space")) {
                  if (this.stage.vars.tatakae == 1) {
                    this.direction = this.radToScratch(
                      Math.atan2(
                        this.sprites[undefined].y - this.y,
                        this.sprites[undefined].x - this.x
                      )
                    );
                  }
                  this.broadcast("punch3");
                  this.stage.vars.attackn = 3;
                  this.stage.vars.punchtiming2 = 0;
                  this.y = this.stage.vars.heightadventurer;
                  yield* this.wait(0.6);
                  this.y = this.stage.vars.heightadventurer;
                  yield* this.wait(0.025);
                  this.stage.vars.attackanimation = 0;
                  this.stage.vars.movementanimation = 0;
                  this.stage.vars.attackn = 0;
                  this.stage.vars.punchtiming1 = 0;
                  this.stage.vars.punchtiming2 = 0;
                  this.broadcast("Nachricht1");
                  this.broadcast("changesword");
                  this.broadcast("swordcontrol2");
                  this.broadcast("crouchcontrol2");
                } else {
                  yield* this.wait(0.05);
                  this.stage.vars.attackanimation = 0;
                  this.stage.vars.movementanimation = 0;
                  this.stage.vars.attackn = 0;
                  this.stage.vars.punchtiming1 = 0;
                  this.stage.vars.punchtiming2 = 0;
                  this.y = this.stage.vars.heightadventurer;
                  this.broadcast("Nachricht1");
                  this.broadcast("changesword");
                  this.broadcast("swordcontrol2");
                  this.broadcast("crouchcontrol2");
                }
              } else {
                yield* this.wait(0.05);
                this.stage.vars.attackanimation = 0;
                this.stage.vars.movementanimation = 0;
                this.stage.vars.attackn = 0;
                this.stage.vars.punchtiming1 = 0;
                this.stage.vars.punchtiming2 = 0;
                this.y = this.stage.vars.heightadventurer;
                this.broadcast("Nachricht1");
                this.broadcast("changesword");
                this.broadcast("swordcontrol2");
                this.broadcast("crouchcontrol2");
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveSwordcontrol2() {
    yield* this.wait(0.5);
    this.broadcast("swordcontrol");
  }

  *whenIReceiveAttack1() {
    this.stage.vars.swordtiming1 = 3;
    yield* this.wait(0.8);
    this.stage.vars.swordtiming1 = 2;
    yield* this.wait(0.35);
    this.stage.vars.swordtiming1 = 1;
  }

  *whenIReceiveAttack2() {
    this.stage.vars.swordtiming2 = 3;
    yield* this.wait(0.7);
    this.stage.vars.swordtiming2 = 2;
    yield* this.wait(0.35);
    this.stage.vars.swordtiming2 = 1;
  }

  *whenIReceivePunch2() {
    this.stage.vars.punchtiming2 = 3;
    yield* this.wait(0.6);
    this.stage.vars.punchtiming2 = 2;
    yield* this.wait(0.2);
    this.stage.vars.punchtiming2 = 1;
  }

  *whenIReceiveNachricht5() {
    while (true) {
      if (this.stage.vars.bowinventory == 1) {
        if (this.stage.vars.crouch == 0) {
          if (this.stage.vars.attackanimation == 0) {
            if (this.keyPressed("f")) {
              if (this.stage.vars.bown == 0) {
                this.broadcast("STOPPSTILL");
                this.broadcast("STOPPMOVE");
                this.broadcast("bow1");
                this.stage.vars.bown = 1;
                this.stage.vars.stillanimation = 0;
                this.stage.vars.bowanimation = 1;
                if (this.stage.vars.pfeilanzahl > 0) {
                  yield* this.wait(0.1);
                  yield* this.wait(0.1);
                  yield* this.wait(0.1);
                  yield* this.wait(0.1);
                  yield* this.wait(0.1);
                  yield* this.wait(0.1);
                  yield* this.wait(0.1);
                  yield* this.wait(0.1);
                }
                yield* this.wait(0.1);
                yield* this.wait(0.1);
                while (
                  !(this.stage.vars.bowtiming == 1 || this.keyPressed("f"))
                ) {
                  yield;
                }
                if (this.keyPressed("f")) {
                  this.broadcast("bow2");
                  this.stage.vars.bown = 2;
                  this.stage.vars.bowtiming = 0;
                  if (this.stage.vars.pfeilanzahl > 0) {
                    yield* this.wait(0.1);
                    yield* this.wait(0.1);
                    yield* this.wait(0.1);
                    yield* this.wait(0.1);
                    yield* this.wait(0.15);
                    yield* this.wait(0.15);
                    yield* this.wait(0.1);
                    yield* this.wait(0.1);
                  }
                  yield* this.wait(0.1);
                  yield* this.wait(0.1);
                  this.stage.vars.bowanimation = 0;
                  this.stage.vars.movementanimation = 0;
                  this.stage.vars.bown = 0;
                  this.stage.vars.bowtiming = 0;
                  this.broadcast("Nachricht1");
                  this.broadcast("swordcontrol2");
                  this.broadcast("changesword");
                  this.broadcast("crouchcontrol2");
                } else {
                  yield* this.wait(0.2);
                  this.stage.vars.bowanimation = 0;
                  this.stage.vars.movementanimation = 0;
                  this.stage.vars.bown = 0;
                  this.stage.vars.bowtiming = 0;
                  this.broadcast("Nachricht1");
                  this.broadcast("swordcontrol2");
                  this.broadcast("changesword");
                  this.broadcast("crouchcontrol2");
                }
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveBow1() {
    this.costume = "adventurer-bow-00";
    yield* this.wait(0.1);
    this.costume = "adventurer-bow-01";
    yield* this.wait(0.1);
    if (this.stage.vars.pfeilanzahl > 0) {
      this.stage.vars.pfeilanzahl += -1;
      this.costume = "adventurer-bow-02";
      yield* this.wait(0.1);
      this.broadcast("arrvis");
      this.costume = "adventurer-bow-03";
      yield* this.wait(0.1);
      this.costume = "adventurer-bow-04";
      yield* this.wait(0.1);
      this.costume = "adventurer-bow-05";
      yield* this.wait(0.1);
      this.costume = "adventurer-bow-06";
      yield* this.wait(0.1);
      this.costume = "adventurer-bow-07";
      yield* this.wait(0.1);
      if (this.stage.vars.pfeilanzahl > -1) {
        this.broadcast("arrgo");
      }
      this.costume = "adventurer-bow-08";
      yield* this.wait(0.1);
      this.costume = "adventurer-bow-00";
      yield* this.wait(0.1);
    }
  }

  *whenIReceiveBow2() {
    if (this.stage.vars.pfeilanzahl > 0) {
      this.stage.vars.pfeilanzahl += -1;
      this.costume = "adventurer-bow-jump-00";
      yield* this.wait(0.1);
      this.broadcast("arrvis2");
      this.costume = "adventurer-bow-jump-01";
      yield* this.wait(0.1);
      this.costume = "adventurer-bow-jump-02";
      this.y += 10;
      yield* this.wait(0.1);
      this.costume = "adventurer-bow-jump-03";
      this.y += 7;
      yield* this.wait(0.1);
      this.costume = "adventurer-bow-jump-04";
      if (this.stage.vars.pfeilanzahl > -1) {
        this.broadcast("arrgo2");
      }
      yield* this.wait(0.15);
      this.costume = "adventurer-bow-jump-05";
      yield* this.wait(0.15);
      this.costume = "adventurer-jump-02";
      this.y += -7;
      yield* this.wait(0.1);
      this.costume = "adventurer-jump-01";
      this.y += -10;
      yield* this.wait(0.1);
      this.costume = "adventurer-jump-00";
      yield* this.wait(0.1);
    }
  }

  *whenIReceiveNachricht6() {
    while (true) {
      if (this.stage.vars.movementstatus == 1) {
        if (
          this.stage.vars.slidecooldown == 0 &&
          !(this.stage.vars.sliden == 0)
        ) {
          if (this.keyPressed("down arrow")) {
            this.broadcast("STOPPMOVE");
            this.broadcast("STOPPSTILL");
            this.stage.vars.movementanimation = 0;
            this.stage.vars.slidecooldown = 1;
            this.stage.vars.sliden += -1;
            this.stage.vars.iframes = 1;
            this.costume = "adventurer-slide-00";
            this.move(6);
            this.costume = "adventurer-slide-01";
            yield* this.wait(0.03);
            this.move(6);
            yield* this.wait(0.03);
            this.move(6);
            yield* this.wait(0.03);
            this.move(7);
            this.costume = "adventurer-stand-00";
            yield* this.wait(0.03);
            this.move(7);
            yield* this.wait(0.03);
            this.move(7);
            yield* this.wait(0.03);
            this.move(6);
            this.costume = "adventurer-stand-01";
            yield* this.wait(0.03);
            this.move(6);
            yield* this.wait(0.03);
            this.move(6);
            yield* this.wait(0.03);
            this.move(5);
            this.costume = "adventurer-stand-02";
            yield* this.wait(0.1);
            this.stage.vars.stillanimation = 0;
            this.stage.vars.iframes = 0;
            this.broadcast("Nachricht1");
            this.broadcast("slidecountdown");
            this.broadcast("swordcontrol2");
            this.broadcast("crouchcontrol2");
          }
        }
      }
      yield;
    }
  }

  *whenIReceivePunch1() {
    this.stage.vars.punchtiming1 = 3;
    yield* this.wait(0.8);
    this.stage.vars.punchtiming1 = 2;
    yield* this.wait(0.2);
    this.stage.vars.punchtiming1 = 1;
  }

  *whenIReceivePunch3() {
    this.costume = "adventurer-punch-05";
    yield* this.wait(0.15);
    this.costume = "adventurer-punch-06";
    this.move(3);
    this.y = this.stage.vars.heightadventurer;
    yield* this.wait(0.15);
    this.broadcast("ap2");
    this.costume = "adventurer-punch-07";
    yield* this.wait(0.15);
    this.costume = "adventurer-punch-08";
    yield* this.wait(0.15);
  }

  *whenIReceivePunch4() {
    this.costume = "adventurer-punch-09";
    this.move(3);
    this.y = this.stage.vars.heightadventurer;
    yield* this.wait(0.15);
    this.costume = "adventurer-punch-10";
    this.broadcast("ap3");
    yield* this.wait(0.15);
    this.costume = "adventurer-punch-11";
    yield* this.wait(0.15);
    this.costume = "adventurer-punch-12";
    yield* this.wait(0.15);
  }

  *whenIReceiveEnemyattack() {
    if (
      this.touching(Color.rgb(121, 143, 143)) ||
      this.touching(Color.rgb(255, 255, 255))
    ) {
      if (this.stage.vars.iframes == 0) {
        if (this.stage.vars.lebenadventurer > 1) {
          this.stage.vars.lebenadventurer += -10;
          this.broadcast("pixisgethurt");
          yield* this.wait(0.1);
        }
        if (this.stage.vars.lebenadventurer > 1) {
          this.stage.vars.lebenadventurer += -10;
          this.broadcast("pixisgethurt");
          yield* this.wait(0.1);
        }
      }
    }
  }

  *whenIReceiveSwordcontrol() {
    while (true) {
      if (this.keyPressed("d")) {
        if (this.stage.vars.swordinventory == 1) {
          if (this.stage.vars.sworduse == 1) {
            this.stage.vars.sworduse = 0;
            this.stage.vars.swordstatus = 0;
            this.broadcast("swordcontrol2");
            return;
          }
          if (this.stage.vars.sworduse == 0) {
            this.stage.vars.sworduse = 1;
            this.stage.vars.swordstatus = 0;
            this.broadcast("swordcontrol2");
            return;
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveAttack4() {
    this.costume = "adventurer-attack1-00";
    yield* this.wait(0.15);
    this.costume = "adventurer-attack1-01";
    this.move(10);
    this.y = this.stage.vars.heightadventurer;
    yield* this.wait(0.15);
    this.costume = "adventurer-attack1-02";
    this.broadcast("as1");
    yield* this.wait(0.15);
    this.costume = "adventurer-attack1-03";
    yield* this.wait(0.15);
    this.costume = "adventurer-attack1-04";
    yield* this.wait(0.15);
    this.costume = "adventurer-attack2-00";
  }

  *whenIReceiveAttack5() {
    this.costume = "adventurer-attack2-00";
    yield* this.wait(0.05);
    this.costume = "adventurer-attack2-01";
    yield* this.wait(0.15);
    this.costume = "adventurer-attack2-02";
    yield* this.wait(0.15);
    this.costume = "adventurer-attack2-03";
    this.broadcast("as2");
    yield* this.wait(0.15);
    this.costume = "adventurer-attack2-04";
    yield* this.wait(0.15);
    this.costume = "adventurer-attack2-05";
  }

  *whenIReceivePunch5() {
    this.costume = "adventurer-punch-00";
    yield* this.wait(0.15);
    this.costume = "adventurer-punch-01";
    this.move(3);
    this.y = this.stage.vars.heightadventurer;
    yield* this.wait(0.15);
    this.costume = "adventurer-punch-02";
    this.broadcast("ap1");
    yield* this.wait(0.15);
    this.costume = "adventurer-punch-03";
    yield* this.wait(0.15);
    this.costume = "adventurer-punch-04";
    yield* this.wait(0.15);
  }

  *whenIReceivePixisdie() {
    this.broadcast("STOPP");
    this.stage.vars.movementanimation = 1;
    this.stage.vars.stillanimation = 1;
    this.stage.vars.slidecooldown = 1;
    this.stage.vars.iframes = 0;
    this.stage.vars.movementstatus = 1;
    this.stage.vars.crouch = 0;
    this.stage.vars.attackanimation = 1;
    this.stage.vars.attackn = 5;
    this.stage.vars.swordtiming1 = 9;
    this.stage.vars.swordtiming2 = 9;
    this.stage.vars.punchtiming1 = 9;
    this.stage.vars.punchtiming2 = 9;
    this.broadcast("STOPP");
    this.costume = "adventurer-die-00";
    yield* this.wait(0.2);
    this.broadcast("STOPP");
    this.costume = "adventurer-die-01";
    yield* this.wait(0.2);
    this.costume = "adventurer-die-02";
    yield* this.wait(0.2);
    this.costume = "adventurer-die-03";
    yield* this.wait(0.2);
    this.costume = "adventurer-die-04";
    yield* this.wait(0.2);
    this.costume = "adventurer-die-05";
    yield* this.wait(0.2);
    this.costume = "adventurer-die-06";
    yield* this.wait(0.2);
    this.broadcast("STOPP");
  }

  *whenGreenFlagClicked() {
    this.stage.vars.heightadventurer = -56;
  }

  *whenIReceiveNachricht7() {
    while (true) {
      if (this.stage.vars.crouch == 0) {
        if (this.stage.vars.attackanimation == 0) {
          if (this.keyPressed("c")) {
            if (this.stage.vars.castanimation == 0) {
              if (this.stage.vars.castloop == 0 && this.stage.vars.cast == 0) {
                this.broadcast("STOPPSTILL");
                this.broadcast("STOPPMOVE");
                this.broadcast("cast1");
                this.stage.vars.magicaadventurer += -15;
                this.stage.vars.cast = 1;
                this.stage.vars.stillanimation = 0;
                this.stage.vars.castanimation = 1;
                yield* this.wait(0.6);
                while (
                  !(this.stage.vars.casttiming == 1 || this.keyPressed("c"))
                ) {
                  yield;
                }
                if (this.keyPressed("c")) {
                  this.broadcast("castloop");
                  this.stage.vars.castloop = 1;
                  while (!!this.keyPressed("c")) {
                    yield;
                  }
                  this.broadcast("STOPPMOVE");
                  this.broadcast("STOPPSTILL");
                  yield* this.wait(0.4);
                  this.stage.vars.castanimation = 0;
                  this.stage.vars.movementanimation = 0;
                  this.stage.vars.castloop = 0;
                  this.stage.vars.casttiming = 0;
                  this.stage.vars.cast = 0;
                  this.broadcast("Nachricht1");
                  this.broadcast("swordcontrol2");
                  this.broadcast("changesword");
                  this.broadcast("crouchcontrol2");
                } else {
                  yield* this.wait(0.4);
                  this.stage.vars.castanimation = 0;
                  this.stage.vars.movementanimation = 0;
                  this.stage.vars.cast = 0;
                  this.stage.vars.castloop = 0;
                  this.stage.vars.casttiming = 0;
                  this.broadcast("Nachricht1");
                  this.broadcast("swordcontrol2");
                  this.broadcast("changesword");
                  this.broadcast("crouchcontrol2");
                }
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveCast1() {
    this.costume = "adventurer-cast-00";
    yield* this.wait(0.2);
    this.costume = "adventurer-cast-01";
    yield* this.wait(0.2);
    this.costume = "adventurer-cast-02";
    yield* this.wait(0.2);
    this.costume = "adventurer-cast-03";
    this.broadcast("castfire");
    yield* this.wait(0.2);
  }

  *whenIReceiveCastloop() {
    while (!!this.keyPressed("c")) {
      this.costume = "adventurer-cast-loop-00";
      yield* this.wait(0.2);
      this.costume = "adventurer-cast-loop-01";
      yield* this.wait(0.2);
      this.costume = "adventurer-cast-loop-02";
      yield* this.wait(0.2);
      this.costume = "adventurer-cast-loop-03";
      yield* this.wait(0.2);
      yield;
    }
  }

  *whenIReceiveCast2() {
    this.stage.vars.casttiming = 3;
    yield* this.wait(0.6);
    this.stage.vars.casttiming = 2;
    yield* this.wait(0.2);
    this.stage.vars.casttiming = 1;
  }

  *whenIReceiveXposcheck() {
    this.stage.vars.xposadventurer = this.x;
  }

  *whenIReceiveNachricht8() {
    yield* this.wait(0.1);
    this.goto(-220, this.stage.vars.heightadventurer);
    this.size = 100;
    this.moveAhead();
    this.visible = true;
    this.stage.vars.stillanimation = 0;
    this.stage.vars.iframes = 0;
    this.broadcast("swordcontrol2");
    this.broadcast("crouchcontrol2");
    this.broadcast("swordcontrol");
    this.broadcast("slidecountdown");
    this.broadcast("Nachricht1");
  }

  *whenIReceiveNachricht9() {
    while (true) {
      if (this.keyPressed("left arrow")) {
        if (
          this.stage.vars.attackanimation == 0 &&
          this.stage.vars.bowanimation == 0 &&
          this.stage.vars.jump == 0 &&
          this.stage.vars.castanimation == 0
        ) {
          this.direction = -90;
          if (this.stage.vars.crouch == 0) {
            this.move(3);
          } else {
            this.move(1);
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveNachricht10() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        if (
          this.stage.vars.attackanimation == 0 &&
          this.stage.vars.bowanimation == 0 &&
          this.stage.vars.jump == 0 &&
          this.stage.vars.castanimation == 0
        ) {
          this.direction = 90;
          if (this.stage.vars.crouch == 0) {
            this.move(3);
          } else {
            this.move(1);
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveTeststart() {
    this.stage.vars.movementstatus = 0;
    this.stage.vars.swordstatus = 0;
    this.stage.vars.crouch = 0;
    this.stage.vars.stillanimation = 0;
    this.stage.vars.attackanimation = 0;
    this.stage.vars.swordinventory = 0;
    this.stage.vars.attackn = 0;
    this.stage.vars.sworduse = 0;
    this.stage.vars.bown = 0;
    this.stage.vars.swordtiming1 = 0;
    this.stage.vars.swordtiming2 = 0;
    this.stage.vars.punchtiming1 = 0;
    this.stage.vars.punchtiming2 = 0;
    this.stage.vars.sliden = 2;
    this.stage.vars.slidecooldown = 0;
    this.stage.vars.iframes = 0;
    this.stage.vars.castgo = 0;
    this.stage.vars.tatakae = 0;
    this.stage.vars.pfeilanzahl = 5;
    this.stage.vars.lebenknight = 100;
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.direction = 90;
    this.goto(-140, this.stage.vars.heightadventurer);
    this.size = 100;
    this.moveAhead();
    this.visible = true;
    this.broadcast("crouchcontrol");
    this.broadcast("swordcontrol");
    this.broadcast("Nachricht1");
    this.broadcast(2);
    this.broadcast("slidecountdown");
    this.broadcast("swordcontrol2");
    this.broadcast("crouchcontrol2");
  }

  *whenIReceiveNachricht11() {
    while (true) {
      if (
        this.stage.vars.movementstatus == 0 &&
        this.stage.vars.attackanimation == 0 &&
        this.stage.vars.jump == 0
      ) {
        if (
          !this.keyPressed("any") ||
          this.keyPressed("s") ||
          this.keyPressed("down arrow")
        ) {
          if (
            this.stage.vars.crouch == 0 &&
            this.stage.vars.stillanimation == 0 &&
            this.stage.vars.swordstatus == 0
          ) {
            this.broadcast("STOPPMOVE");
            this.broadcast("still");
            this.stage.vars.movementanimation = 0;
            this.stage.vars.stillanimation = 1;
            this.broadcast("Nachricht1");
            this.broadcast("crouchcontrol2");
            this.broadcast("swordcontrol2");
          }
          if (
            this.stage.vars.crouch == 0 &&
            this.stage.vars.stillanimation == 0 &&
            this.stage.vars.swordstatus == 1
          ) {
            this.broadcast("STOPPMOVE");
            this.broadcast("stillsword");
            this.stage.vars.movementanimation = 0;
            this.stage.vars.stillanimation = 1;
            this.broadcast("Nachricht1");
            this.broadcast("crouchcontrol2");
            this.broadcast("swordcontrol2");
          }
          if (
            this.stage.vars.crouch == 1 &&
            this.stage.vars.stillanimation == 0
          ) {
            this.broadcast("STOPPMOVE");
            this.broadcast("stillcrouch");
            this.stage.vars.movementanimation = 0;
            this.stage.vars.stillanimation = 1;
            this.broadcast("Nachricht1");
            this.broadcast("crouchcontrol2");
            this.broadcast("swordcontrol2");
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveChangesword() {
    yield* this.wait(5);
    this.stage.vars.swordstatus = 0;
  }

  *whenIReceivePixisgethurt() {
    this.broadcast("STOPP");
    this.y = this.stage.vars.heightadventurer;
    this.costume = "adventurer-hurt-00";
    yield* this.wait(0.1);
    this.costume = "adventurer-hurt-01";
    yield* this.wait(0.1);
    this.costume = "adventurer-hurt-02";
    yield* this.wait(0.1);
    this.stage.vars.movementanimation = 0;
    this.stage.vars.stillanimation = 0;
    this.stage.vars.sliden = 2;
    this.stage.vars.slidecooldown = 0;
    this.stage.vars.iframes = 0;
    this.stage.vars.movementstatus = 0;
    this.stage.vars.crouch = 0;
    this.stage.vars.attackanimation = 0;
    this.stage.vars.attackn = 0;
    this.stage.vars.cast = 0;
    this.stage.vars.castloop = 0;
    this.stage.vars.castgo = 0;
    this.stage.vars.castanimation = 0;
    this.stage.vars.swordtiming1 = 0;
    this.stage.vars.swordtiming2 = 0;
    this.stage.vars.punchtiming1 = 0;
    this.stage.vars.punchtiming2 = 0;
    this.broadcast("Nachricht1");
    this.broadcast("crouchcontrol2");
    this.broadcast("swordcontrol2");
  }

  *whenIReceiveStill() {
    while (!(this.stage.vars.movementstatus == 1)) {
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-idle-00";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-idle-01";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-idle-02";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-idle-03";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      yield;
    }
  }

  *whenIReceiveStopp() {
    this.stage.vars.stoppa = 1;
    yield* this.wait(1);
    this.stage.vars.stoppa = 0;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.stoppa = 0;
    this.stage.vars.stopstill = 0;
    this.stage.vars.stoppmove = 0;
  }

  *whenIReceiveStillsword() {
    while (!(this.stage.vars.movementstatus == 1)) {
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-idle-2-00";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-idle-2-01";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-idle-2-02";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-idle-2-03";
      yield* this.wait(0.15);
      if (this.stage.vars.stopstill == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      yield;
    }
  }

  *whenIReceiveBow3() {
    this.stage.vars.bowtiming = 3;
    if (this.stage.vars.pfeilanzahl > 0) {
      yield* this.wait(0.1);
      yield* this.wait(0.1);
      yield* this.wait(0.1);
      yield* this.wait(0.1);
      yield* this.wait(0.1);
      yield* this.wait(0.1);
      yield* this.wait(0.1);
      yield* this.wait(0.1);
      yield* this.wait(0.1);
      yield* this.wait(0.1);
    }
    this.stage.vars.bowtiming = 2;
    yield* this.wait(0.2);
    this.stage.vars.bowtiming = 1;
  }

  *whenIReceiveStoppmove() {
    this.stage.vars.stoppmove = 1;
    yield* this.wait(0.11);
    this.stage.vars.stoppmove = 0;
  }

  *whenIReceiveStoppstill() {
    this.stage.vars.stopstill = 1;
    yield* this.wait(0.16);
    this.stage.vars.stopstill = 0;
  }

  *whenIReceiveLauf2() {
    while (!(this.stage.vars.movementstatus == 0)) {
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run-00";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run-01";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run-02";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run-03";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run-04";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run-05";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      yield;
    }
  }

  *whenIReceiveLauf3() {
    while (!(this.stage.vars.movementstatus == 0)) {
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-walk-00";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-walk-01";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-walk-02";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-walk-03";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-walk-04";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-crouch-walk-05";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      yield;
    }
  }

  *whenIReceiveLauf() {
    while (!(this.stage.vars.movementstatus == 0)) {
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run3-00";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run3-01";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run3-02";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run3-03";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run3-04";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      this.costume = "adventurer-run3-05";
      yield* this.wait(0.1);
      if (this.stage.vars.stoppmove == 1 || this.stage.vars.stoppa == 1) {
        return;
      }
      yield;
    }
  }

  *whenIReceiveNachricht12() {
    while (true) {
      if (this.keyPressed("up arrow")) {
        if (
          this.stage.vars.attackanimation == 0 &&
          this.stage.vars.bowanimation == 0 &&
          this.stage.vars.castanimation == 0
        ) {
          this.broadcast("STOPPMOVE");
          this.broadcast("STOPPSTILL");
          this.stage.vars.movementanimation = 0;
          this.stage.vars.stillanimation = 0;
          this.stage.vars.jump = 1;
          this.costume = "adventurer-jump-00";
          if (this.stage.vars.stoppa == 1) {
            this.stage.vars.jump = 0;
            this.y = this.stage.vars.heightadventurer;
            return;
          }
          yield* this.wait(0.1);
          this.costume = "adventurer-jump-01";
          if (this.stage.vars.stoppa == 1) {
            this.stage.vars.jump = 0;
            this.y = this.stage.vars.heightadventurer;
            return;
          }
          yield* this.wait(0.1);
          this.costume = "adventurer-jump-02";
          this.y += 10;
          if (this.stage.vars.stoppa == 1) {
            this.stage.vars.jump = 0;
            this.y = this.stage.vars.heightadventurer;
            return;
          }
          yield* this.wait(0.1);
          this.costume = "adventurer-jump-03";
          this.y += 7;
          if (this.stage.vars.stoppa == 1) {
            this.stage.vars.jump = 0;
            this.y = this.stage.vars.heightadventurer;
            return;
          }
          yield* this.wait(0.15);
          this.costume = "adventurer-jump-03";
          this.y += -7;
          if (this.stage.vars.stoppa == 1) {
            this.stage.vars.jump = 0;
            this.y = this.stage.vars.heightadventurer;
            return;
          }
          yield* this.wait(0.1);
          this.costume = "adventurer-jump-02";
          this.y += -10;
          if (this.stage.vars.stoppa == 1) {
            this.stage.vars.jump = 0;
            this.y = this.stage.vars.heightadventurer;
            return;
          }
          yield* this.wait(0.1);
          this.costume = "adventurer-jump-01";
          if (this.stage.vars.stoppa == 1) {
            this.stage.vars.jump = 0;
            this.y = this.stage.vars.heightadventurer;
            return;
          }
          yield* this.wait(0.1);
          this.costume = "adventurer-jump-00";
          if (this.stage.vars.stoppa == 1) {
            this.stage.vars.jump = 0;
            this.y = this.stage.vars.heightadventurer;
            return;
          }
          yield* this.wait(0.1);
          this.stage.vars.jump = 0;
          this.broadcast("Nachricht1");
          this.broadcast("crouchcontrol2");
          this.broadcast("swordcontrol2");
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.visible = false;
    this.stage.vars.jump = 0;
  }
}
