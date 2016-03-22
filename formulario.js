var vaporeon = {HP: 130, Att: 65, Def: 60, Satt: 110, Sdef: 95, Spd: 65, typeP: "water", typeS: ""},
blaziken = {HP: 80, Att: 120, Def: 70, Satt: 110, Sdef: 70, Spd: 80, typeP: "fire", typeS: "fighting"},
scizor = {HP: 70, Att: 130, Def: 100, Satt: 55, Sdef: 80, Spd: 65, typeP: "bug", typeS: "steel"},
scizorMega = {HP: 70, Att: 150, Def: 140, Satt: 65, Sdef: 100, Spd: 75, typeP: "bug", typeS: "steel"},
garchomp = {HP: 108, Att: 130, Def: 95, Satt: 80, Sdef: 85, Spd: 102, typeP: "dragon", typeS: "ground"},
garchompMega = {HP: 108, Att: 170, Def: 115, Satt: 120, Sdef: 95, Spd: 92, typeP: "dragon", typeS: "ground"},
alakazamMega = {HP: 55, Att: 50, Def: 65, Satt: 175, Sdef: 95, Spd: 150, typeP: "psychic", typeS: ""};

var fwPkmn = {vaporeon, blaziken, scizor, scizorMega, garchomp, garchompMega,
alakazamMega};

var lonely = {Att: 1.1, Def: 0.9, Satt: 1, Sdef: 1, Spd: 1},
brave = {Att: 1.1, Def: 1, Satt: 1, Sdef: 1, Spd: 0.9},
adamant = {Att:1.1, Def:1, Satt:0.9, Sdef:1, Spd:1},
naughty = {Att:1.1, Def:1, Satt:1, Sdef:0.9, Spd:1},
bold = {Att: 0.9, Def: 1.1, Satt: 1, Sdef: 1, Spd: 1},
relaxed = {Att: 1, Def: 1.1, Satt: 1, Sdef: 1, Spd: 0.9},
impish = {Att: 1, Def: 1.1, Satt: 0.9, Sdef: 1, Spd: 1},
lax = {Att: 1, Def: 1.1, Satt: 1, Sdef: 0.9, Spd: 1},
modest = {Att: 0.9, Def: 1, Satt: 1.1, Sdef: 1, Spd: 1},
mild = {Att: 1, Def: 0.9, Satt: 1.1, Sdef: 1, Spd: 1},
quiet = {Att: 1, Def: 1, Satt: 1.1, Sdef: 1, Spd: 0.9},
rash = {Att: 1, Def: 1, Satt: 1.1, Sdef: 0.9, Spd: 1},
calm = {Att: 0.9, Def: 1, Satt: 1, Sdef: 1.1, Spd: 1},
gentle = {Att: 1, Def: 0.9, Satt: 1, Sdef: 1.1, Spd: 1},
sassy = {Att: 1, Def: 1, Satt: 1, Sdef: 1.1, Spd: 0.9},
careful = {Att: 1, Def: 1, Satt: 0.9, Sdef: 1.1, Spd: 1},
timid = {Att: 0.9, Def: 1, Satt: 1, Sdef: 1, Spd: 1.1},
hasty = {Att: 1, Def: 0.9, Satt: 1, Sdef: 1, Spd: 1.1},
jolly = {Att: 1, Def: 1, Satt: 0.9, Sdef: 1, Spd: 1.1},
naive = {Att: 1, Def: 1, Satt: 1, Sdef: 0.9, Spd: 1.1},
neutra = {Att: 1, Def: 1, Satt: 1, Sdef: 1, Spd: 1};

var natures = {lonely, brave, adamant, naughty, bold, relaxed, impish, lax, modest,
mild, quiet, rash, calm, gentle, sassy, careful, timid, hasty, jolly, naive, neutra};

function printValue(sliderID, label){
  var val1 = document.getElementById(label);
  var val2 = document.getElementById(sliderID);
  val1.innerHTML = val2.value;
}

function evMax(evID){
  var ev = document.getElementById(evID);
  if(ev.value > 255){
    ev.value = 255;
  }else if(ev.value < 0){
    ev.value = 0;
  }
}

function nivelMax(nivelID){
  var lvl = document.getElementById(nivelID);
  if(lvl.value > 100){
    lvl.value = 100;
  }else if(lvl.value <= 0){
    lvl.value = 1;
  }
}

function totalEV(HPID, attID, defID, sattID, sdefID, spdID){
  var hp = document.getElementById(HPID), att = document.getElementById(attID),
  def = document.getElementById(defID), satt = document.getElementById(sattID),
  sdef = document.getElementById(sdefID), spd = document.getElementById(spdID);
  var label = document.getElementById("totalEV");
  var ttl = Number(hp.value) + Number(att.value) + Number(def.value) + Number(satt.value)
  + Number(sdef.value) + Number(spd.value);
  label.innerHTML = (510 - ttl);
}

function seleccionarPkmn(){
  var pokemon = document.getElementById('nombre');
  var ltp = document.getElementById('typeP'), lts = document.getElementById('typeS'),
  lHP = document.getElementById('bHP'), lAtt = document.getElementById('bAtt'),
  lDef = document.getElementById('bDef'), lSatt = document.getElementById('bSatt'),
  lSdef = document.getElementById('bSdef'), lSpd = document.getElementById('bSpd');

  ltp.innerHTML = fwPkmn[pokemon.value].typeP;
  lts.innerHTML = fwPkmn[pokemon.value].typeS;
  lHP.innerHTML = fwPkmn[pokemon.value].HP;
  lAtt.innerHTML = fwPkmn[pokemon.value].Att;
  lDef.innerHTML = fwPkmn[pokemon.value].Def;
  lSatt.innerHTML = fwPkmn[pokemon.value].Satt;
  lSdef.innerHTML = fwPkmn[pokemon.value].Sdef;
  lSpd.innerHTML = fwPkmn[pokemon.value].Spd;
}

function actualizarStats(){
  var pokemon = document.getElementById("nombre");
  var nivel = document.getElementById("nivel").value;
  var nat = document.getElementById("naturaleza");
  //Pokemon Stats
  var bHP = fwPkmn[pokemon.value].HP, bAtt = fwPkmn[pokemon.value].Att,
  bDef = fwPkmn[pokemon.value].Def, bSatt = fwPkmn[pokemon.value].Satt,
  bSdef = fwPkmn[pokemon.value].Sdef, bSpd = fwPkmn[pokemon.value].Spd;
  //Individual Values
  var ivHP = document.getElementById("ivHP-form").value, ivAtt = document.getElementById("ivAtt-form").value,
  ivDef = document.getElementById("ivDef-form").value, ivSatt = document.getElementById("ivSatt-form").value,
  ivSdef = document.getElementById("ivSdef-form").value, ivSpd = document.getElementById("ivSpd-form").value;
  //Effort Values
  var evHP = document.getElementById("evHP-form").value, evAtt = document.getElementById("evAtt-form").value,
  evDef = document.getElementById("evDef-form").value, evSatt = document.getElementById("evSatt-form").value,
  evSdef = document.getElementById("evSdef-form").value, evSpd = document.getElementById("evSpd-form").value;
  // Labels
  var lHP = document.getElementById("fHP"), lAtt = document.getElementById("fAtt"),
  lDef = document.getElementById("fDef"), lSatt = document.getElementById("fSatt"),
  lSdef = document.getElementById("fSdef"), lSpd = document.getElementById("fSpd");
  //Valores Naturalezas
  var natValAtt = natures[nat.value].Att, natValDef = natures[nat.value].Def,
  natValSatt = natures[nat.value].Satt, natValSdef = natures[nat.value].Sdef,
  natValSpd = natures[nat.value].Spd;
  //Calculo final de Stats
  var fHP = ((Number(ivHP) + 2 * Number(bHP) + (Number(evHP)/4) ) *
  Number(nivel)/100) + 10 + Number(nivel);
  var fAtt = (((Number(ivAtt) + 2 * Number(bAtt) + (Number(evAtt)/4))
  * Number(nivel)/100) + 5) * natValAtt;
  var fDef = (((Number(ivDef) + 2 * Number(bDef) + (Number(evDef)/4))
  * Number(nivel)/100) + 5) * natValDef;
  var fSatt = (((Number(ivSatt) + 2 * Number(bSatt) + (Number(evSatt)/4))
  * Number(nivel)/100) + 5) * natValSatt;
  var fSdef = (((Number(ivSdef) + 2 * Number(bSdef) + (Number(evSdef)/4))
  * Number(nivel)/100) + 5) * natValSdef;
  var fSpd = (((Number(ivSpd) + 2 * Number(bSpd) + (Number(evSpd)/4))
  * Number(nivel)/100) + 5) * natValSpd;
  //Mostrar Stats
  lHP.innerHTML = Math.floor(fHP);
  lAtt.innerHTML = Math.floor(fAtt);
  lDef.innerHTML = Math.floor(fDef);
  lSatt.innerHTML = Math.floor(fSatt);
  lSdef.innerHTML = Math.floor(fSdef);
  lSpd.innerHTML = Math.floor(fSpd);
}
