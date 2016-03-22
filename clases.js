class pokemon {
  constructor(nombre, nivel, tipo1, tipo2, nature, bHP, bAtt, bDef, bSatt, bSdef, bSpd, evHP, evAtt,
    evDef, evSatt, evSdef, evSpd, ivHP, ivAtt, ivDef, ivSatt, ivSdef, ivSpd){

    this.nombre = nombre;
    this.nivel = nivel;
    this.tipo1 = tipo1;
    this.tipo2 = tipo2;
    this.nature = nature;
    //Se determinan los valores de la naturaleza
    //Suben Ataque
    switch (this.nature) {
      case "lonely":
        this.natureVal = {Att: 1.1, Def: 0.9, Satt: 1, Sdef: 1, Spd: 1};
        break;
      case "brave":
        this.natureVal = {Att: 1.1, Def: 1, Satt: 1, Sdef: 1, Spd: 0.9};
        break;
      case "adamant":
        this.natureVal = {Att:1.1, Def:1, Satt:0.9, Sdef:1, Spd:1};
        break;
      case "naughty":
        this.natureVal = {Att: 1.1, Def: 1, Satt: 1, Sdef: 0.9, Spd: 1};
        break;
      //Suben Defensa
      case "bold":
        this.natureVal = {Att: 0.9, Def: 1.1, Satt: 1, Sdef: 1, Spd: 1};
        break;
      case "relaxed":
        this.natureVal = {Att: 1, Def: 1.1, Satt: 1, Sdef: 1, Spd: 0.9};
        break;
      case "impish":
        this.natureVal = {Att: 1, Def: 1.1, Satt: 0.9, Sdef: 1, Spd: 1};
      break;
      case "lax":
        this.natureVal = {Att: 1, Def: 1.1, Satt: 1, Sdef: 0.9, Spd: 1};
        break;
      //Suben SP Attack
      case "modest":
        this.natureVal = {Att: 0.9, Def: 1, Satt: 1.1, Sdef: 1, Spd: 1};
        break;
      case "mild":
        this.natureVal = {Att: 1, Def: 0.9, Satt: 1.1, Sdef: 1, Spd: 1};
        break;
      case "quiet":
        this.natureVal = {Att: 1, Def: 1, Satt: 1.1, Sdef: 1, Spd: 0.9};
        break;
      case "rash":
        this.natureVal = {Att: 1, Def: 1, Satt: 1.1, Sdef: 0.9, Spd: 1};
        break;
      //Suben SP Defense
      case "calm":
        this.natureVal = {Att: 0.9, Def: 1, Satt: 1, Sdef: 1.1, Spd: 1};
        break;
      case "gentle":
        this.natureVal = {Att: 1, Def: 0.9, Satt: 1, Sdef: 1.1, Spd: 1};
        break;
      case "sassy":
        this.natureVal = {Att: 1, Def: 1, Satt: 1, Sdef: 1.1, Spd: 0.9};
        break;
      case "careful":
        this.natureVal = {Att: 1, Def: 1, Satt: 0.9, Sdef: 1.1, Spd: 1};
        break;
      //Suben Speed
      case "timid":
        this.natureVal = {Att: 0.9, Def: 1, Satt: 1, Sdef: 1, Spd: 1.1};
        break;
      case "hasty":
        this.natureVal = {Att: 1, Def: 0.9, Satt: 1, Sdef: 1, Spd: 1.1};
        break;
      case "jolly":
        this.natureVal = {Att: 1, Def: 1, Satt: 0.9, Sdef: 1, Spd: 1.1};
        break;
      case "naive":
        this.natureVal = {Att: 1, Def: 1, Satt: 1, Sdef: 0.9, Spd: 1.1};
        break;
      default:
        this.natureVal = {Att: 1, Def: 1, Satt: 1, Sdef: 1, Spd: 1};
        break;
    }
    this.nature = nature;
    //Base stats
    this.bHP = bHP;
    this.bAtt = bAtt;
    this.bDef = bDef;
    this.bSatt = bSatt;
    this.bSdef = bSdef;
    this.bSpd = bSpd;
    //Effort Values
    this.evHP = evHP;
    this.evAtt = evAtt;
    this.evDef = evDef;
    this.evSatt = evSatt;
    this.evSdef = evSdef;
    this.evSpd = evSpd;
    //Individual Values
    this.ivHP = ivHP;
    this.ivAtt = ivAtt;
    this.ivDef = ivDef;
    this.ivSatt = ivSatt;
    this.ivSdef = ivSdef;
    this.ivSpd = ivSpd;
    //Stats finales
    this.fHP = parseInt(((this.ivHP + 2 * this.bHP + (evHP/4) ) * this.nivel/100) + 10 + this.nivel);
    this.fAtt = parseInt((((this.ivAtt + 2 * this.bAtt + (this.evAtt/4) ) * this.nivel/100)
    + 5) * this.natureVal.Att);
    this.fDef = parseInt((((this.ivDef + 2 * this.bDef + (this.evDef/4) ) * this.nivel/100)
    + 5) * this.natureVal.Def);
    this.fSatt = parseInt((((this.ivSatt + 2 * this.bSatt + (this.evSatt/4) ) * this.nivel/100)
    + 5) * this.natureVal.Satt);
    this.fSdef = parseInt((((this.ivSdef + 2 * this.bSdef + (this.evSdef/4) ) * this.nivel/100)
    + 5) * this.natureVal.Sdef);
    this.fSpd = parseInt((((this.ivSpd + 2 * this.bSpd + (this.evSpd/4) ) * this.nivel/100)
    + 5) * this.natureVal.Spd);
  }
}

class movimiento {
  constructor(nombre, tipo, base, acc){
    this.nombre = nombre;
    this.tipo = tipo;
    this.base = base;
    this.acc = acc;
    switch (this.tipo) {
      case "bug":
        this.tipoMov = {bug: 0.5, dark: 2, dragon: 1, electric: 1, fairy: 0.5, fight: 0.5,
        fire: 0.5, flying: 0.5, ghost: 0.5, grass: 2, ground: 1, ice: 1, normal: 1,
        poison: 0.5, psychic: 1, rock: 1, steel: 0.5, water: 1};
        break;
      case "dark":
        this.tipoMov = {bug: 1, dark: 0.5, dragon: 1, electric: 1, fairy: 0.5, fight: 0.5,
        fire: 1, flying: 1, ghost: 2, grass: 1, ground: 1, ice: 1, normal: 1,
        poison: 1, psychic: 2, rock: 1, steel: 1, water: 1};
        break;
      case "dragon":
        this.tipoMov = {bug: 1, dark: 1, dragon: 2, electric: 1, fairy: 0, fight: 1,
        fire: 1, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1,
        poison: 1, psychic: 1, rock: 1, steel: 0.5, water: 1};
        break;
      case "electric":
        this.tipoMov = {bug: 1, dark: 1, dragon: 0.5, electric: 0.5, fairy: 1, fight: 1,
        fire: 1, flying: 2, ghost: 1, grass: 0.5, ground: 0, ice: 1, normal: 1,
        poison: 1, psychic: 1, rock: 1, steel: 1, water: 2};
        break;
      case "fairy":
        this.tipoMov = {bug: 1, dark: 2, dragon: 2, electric: 1, fairy: 1, fight: 2,
        fire: 0.5, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1,
        poison: 0.5, psychic: 1, rock: 1, steel: 0.5, water: 1};
        break;
      case "fight":
        this.tipoMov = {bug: 0.5, dark: 2, dragon: 1, electric: 1, fairy: 0.5, fight: 1,
        fire: 1, flying: 0.5, ghost: 0, grass: 1, ground: 1, ice: 2, normal: 2,
        poison: 0.5, psychic: 0.5, rock: 2, steel: 2, water: 1};
        break;
      case "fire":
        this.tipoMov = {bug: 2, dark: 1, dragon: 0.5, electric: 1, fairy: 1, fight: 1,
        fire: 0.5, flying: 1, ghost: 1, grass: 2, ground: 1, ice: 2, normal: 1,
        poison: 1, psychic: 1, rock: 0.5, steel: 2, water: 0.5};
        break;
      case "flying":
        this.tipoMov = {bug: 2, dark: 1, dragon: 1, electric: 0.5, fairy: 1, fight: 2,
        fire: 1, flying: 1, ghost: 1, grass: 2, ground: 1, ice: 1, normal: 1,
        poison: 1, psychic: 1, rock: 0.5, steel: 0.5, water: 1};
        break;
      case "ghost":
        this.tipoMov = {bug: 1, dark: 0.5, dragon: 1, electric: 1, fairy: 1, fight: 1,
        fire: 1, flying: 1, ghost: 2, grass: 1, ground: 1, ice: 1, normal: 0,
        poison: 1, psychic: 2, rock: 1, steel: 1, water: 1};
        break;
      case "grass":
        this.tipoMov = {bug: 0.5, dark: 1, dragon: 0.5, electric: 1, fairy: 1, fight: 1,
        fire: 0.5, flying: 0.5, ghost: 1, grass: 0.5, ground: 2, ice: 1, normal: 1,
        poison: 0.5, psychic: 1, rock: 2, steel: 0.5, water: 1};
        break;
      case "ground":
        this.tipoMov = {bug: 0.5, dark: 1, dragon: 1, electric: 2, fairy: 1, fight: 1,
        fire: 2, flying: 1, ghost: 1, grass: 0.5, ground: 1, ice: 1, normal: 1,
        poison: 2, psychic: 1, rock: 2, steel: 2, water: 1};
        break;
      case "ice":
        this.tipoMov = {bug: 1, dark: 1, dragon: 2, electric: 1, fairy: 1, fight: 1,
        fire: 0.5, flying: 2, ghost: 1, grass: 2, ground: 2, ice: 0.5, normal: 1,
        poison: 1, psychic: 1, rock: 1, steel: 0.5, water: 0.5};
        break;
      case "normal":
        this.tipoMov = {bug: 1, dark: 1, dragon: 1, electric: 1, fairy: 1, fight: 1,
        fire: 1, flying: 1, ghost: 0, grass: 1, ground: 1, ice: 1, normal: 1,
        poison: 1, psychic: 1, rock: 0.5, steel: 0.5, water: 1};
        break;
      case "poison":
        this.tipoMov = {bug: 1, dark: 1, dragon: 1, electric: 1, fairy: 2, fight: 1,
        fire: 1, flying: 1, ghost: 1, grass: 2, ground: 0.5, ice: 1, normal: 1,
        poison: 0.5, psychic: 1, rock: 1, steel: 0, water: 1};
        break;
      case "psychic":
        this.tipoMov = {bug: 1, dark: 1, dragon: 1, electric: 1, fairy: 1, fight: 2,
        fire: 1, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1,
        poison: 2, psychic: 1, rock: 1, steel: 0.5, water: 1};
        break;
      case "rock":
        this.tipoMov = {bug: 2, dark: 1, dragon: 1, electric: 1, fairy: 1, fight: 0.5,
        fire: 2, flying: 2, ghost: 1, grass: 1, ground: 0.5, ice: 2, normal: 1,
        poison: 1, psychic: 1, rock: 1, steel: 0.5, water: 1};
        break;
      case "steel":
        this.tipoMov = {bug: 1, dark: 1, dragon: 1, electric: 0.5, fairy: 1, fight: 0.5,
        fire: 0.5, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1,
        poison: 1, psychic: 1, rock: 2, steel: 0.5, water: 0.5};
        break;
      case "water":
        this.tipoMov = {bug: 1, dark: 1, dragon: 0.5, electric: 1, fairy: 1, fight: 1,
        fire: 2, flying: 1, ghost: 1, grass: 0.5, ground: 2, ice: 1, normal: 1,
        poison: 1, psychic: 1, rock: 2, steel: 1, water: 0.5};
        break;
      default:

    }
  }
}

var move = new movimiento("surf", "water", 95, 100);

var pkmn1 = new pokemon("Scizor", 100, "bug", "steel", "adamant", 70, 130, 100, 55, 80, 65, 0, 255,
 4, 0, 0, 255, 31, 31, 31, 31, 31, 31);
