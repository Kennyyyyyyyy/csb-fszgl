import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Adventurer from "./Adventurer/Adventurer.js";
import Sword from "./Sword/Sword.js";
import Trainingdummy from "./Trainingdummy/Trainingdummy.js";
import Pfeil1 from "./Pfeil1/Pfeil1.js";
import Boden2WSte from "./Boden2WSte/Boden2WSte.js";
import Pfeil2 from "./Pfeil2/Pfeil2.js";
import Staminabar from "./Staminabar/Staminabar.js";
import Block from "./Block/Block.js";
import Health from "./Health/Health.js";
import Healthbar from "./Healthbar/Healthbar.js";
import Stamina from "./Stamina/Stamina.js";
import Magicabar from "./Magicabar/Magicabar.js";
import Magica from "./Magica/Magica.js";
import Blackball68x9 from "./Blackball68x9/Blackball68x9.js";
import ArrowAmmo from "./ArrowAmmo/ArrowAmmo.js";
import ArrowAmmocounter from "./ArrowAmmocounter/ArrowAmmocounter.js";
import Ammobox from "./Ammobox/Ammobox.js";
import Figur2 from "./Figur2/Figur2.js";

const stage = new Stage({ costumeNumber: 9 });

const sprites = {
  Adventurer: new Adventurer({
    x: -140,
    y: -56,
    direction: 90,
    costumeNumber: 17,
    size: 100,
    visible: true
  }),
  Sword: new Sword({
    x: 0,
    y: -60,
    direction: 165,
    costumeNumber: 1,
    size: 15,
    visible: true
  }),
  Trainingdummy: new Trainingdummy({
    x: -196,
    y: -73,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true
  }),
  Pfeil1: new Pfeil1({
    x: -130,
    y: -59,
    direction: 90,
    costumeNumber: 1,
    size: 83.33333333333334,
    visible: false
  }),
  Boden2WSte: new Boden2WSte({
    x: 0,
    y: -48,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Pfeil2: new Pfeil2({
    x: -130,
    y: -56,
    direction: 90,
    costumeNumber: 1,
    size: 83.33333333333334,
    visible: false
  }),
  Staminabar: new Staminabar({
    x: -300,
    y: -170,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Block: new Block({
    x: -43,
    y: -108.2,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Health: new Health({
    x: -280,
    y: -135,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  Healthbar: new Healthbar({
    x: -280,
    y: -135,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Stamina: new Stamina({
    x: -300,
    y: -170,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  Magicabar: new Magicabar({
    x: -290,
    y: -152.5,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Magica: new Magica({
    x: -290,
    y: -152.5,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  Blackball68x9: new Blackball68x9({
    x: -137,
    y: -56,
    direction: 90,
    costumeNumber: 13,
    size: 70,
    visible: false
  }),
  ArrowAmmo: new ArrowAmmo({
    x: -213,
    y: -169,
    direction: -48,
    costumeNumber: 1,
    size: 83.33333333333334,
    visible: false
  }),
  ArrowAmmocounter: new ArrowAmmocounter({
    x: -219,
    y: -172,
    direction: 90,
    costumeNumber: 1,
    size: 71.42857142857143,
    visible: false
  }),
  Ammobox: new Ammobox({
    x: -230,
    y: -73,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true
  }),
  Figur2: new Figur2({
    x: -78,
    y: -83,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
