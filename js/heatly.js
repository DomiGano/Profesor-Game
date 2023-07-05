let hpBar = document.querySelector("#redbar");
let mainhpBar = document.querySelector("#hpBar");
let dmgText = document.querySelector(".profDMG");
let mainexpBar = document.querySelector("#expBar");
let lvltext = document.querySelector("#lvl");

let lvl = 1;
let maxhp = 100;
let nowhp = maxhp;
let dmgMin = 1;
let dmgMax = 10;
let nowExp = 0;
let goalExp= 100;

mainhpBar.querySelector("p").innerText = nowhp + " / " + maxhp;
mainexpBar.querySelector("p").innerText = "EXP " + nowExp + " / " + goalExp;

function addExp(expValue) {
    if(nowExp < goalExp) {
    nowExp = nowExp + expValue;
    mainexpBar.querySelector("p").innerText = "EXP " + nowExp + " / " + goalExp;
    document.querySelector(".greenbar").style.width = ((nowExp * 100) / goalExp) + "%";
    } if(nowExp == goalExp) {
        lvl++;
        nowExp = 0;
        goalExp = Math.floor(goalExp * 1.25);
        mainexpBar.querySelector("p").innerText = "EXP " + nowExp + " / " + goalExp;
        document.querySelector(".greenbar").style.width = ((nowExp * 100) / goalExp) + "%";
        lvltext.innerText = "LvL. " + lvl;
        moreHP(10);
        moreDMG(2);
    } if(nowExp > goalExp) {
        lvl++;
        nowExp = nowExp - goalExp;
        goalExp = Math.floor(goalExp * 1.25);
        mainexpBar.querySelector("p").innerText = "EXP " + nowExp + " / " + goalExp;
        document.querySelector(".greenbar").style.width = ((nowExp * 100) / goalExp) + "%";
        lvltext.innerText = "LvL. " + lvl;
        moreHP(10);
        moreDMG(2);
    }
}


function moreHP() {
    maxhp = maxhp + 10;
    nowhp = maxhp;
    document.querySelector(".redbar").style.width = ((nowhp * 100) / maxhp) + "%";
    mainhpBar.querySelector("p").innerText = nowhp + " / " + maxhp;
}

function moreDMG(x) {
    dmgMax = dmgMax + x;
    document.querySelector(".actualDMG").innerText = "AKTUALNE MAX DMG: " + dmgMax;
}

function lessDMG(x) {
    if(dmgMax < 0) {
        dmgMax = 0;
        document.querySelector(".actualDMG").innerText = "AKTUALNE MAX DMG: " + dmgMax;
    } else {
        dmgMax = dmgMax - x;
        document.querySelector(".actualDMG").innerText = "AKTUALNE MAX DMG: " + dmgMax;
    }
}

function dmg() {
    let dmg = Math.floor(Math.random() * (dmgMax - dmgMin +1) +1);

    nowhp = nowhp - dmg
    
    if(nowhp > 0) {
    document.querySelector(".redbar").style.width = ((nowhp * 100) / maxhp) + "%";
    mainhpBar.querySelector("p").innerText = nowhp + " / " + maxhp;
    dmgText.style.color = "red";
    dmgText.style.padding = "5px";
    dmgText.innerText = "-" + dmg +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },3000);
    } else {
        dmg = dmg + nowhp;
        nowhp = 0;
        document.querySelector(".redbar").style.width = 0 + "%";
        mainhpBar.querySelector("p").innerText = "RIP";
        document.querySelector("#myDiv").classList.add("grave");
        if(dmg > 0) {
            dmgText.style.color = "red";
            dmgText.style.padding = "5px";
            dmgText.innerText = "-" + dmg +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },4000);
        }
    }

}


function heal(x) {
    let beforeHeal = nowhp;
    nowhp = nowhp + x;
    

    if(nowhp <= 100) {
    document.querySelector(".redbar").style.width = ((nowhp * 100) / maxhp) + "%";
    mainhpBar.querySelector("p").innerText = nowhp + " / " + maxhp;
    document.querySelector("#myDiv").classList.remove("grave");
    dmgText.style.color = "green";
    dmgText.style.padding = "5px";
    dmgText.innerText = "+" + x +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },4000);
    } if(nowhp > 100) {
        nowhp = maxhp;
        document.querySelector(".redbar").style.width = ((nowhp * 100) / maxhp) + "%";
        mainhpBar.querySelector("p").innerText = nowhp + " / " + maxhp;
        if(beforeHeal < 100){
        dmgText.style.color = "green";
        dmgText.style.padding = "5px";
        dmgText.innerText = "+" + (nowhp - beforeHeal) +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },4000);        
    }
}

}

function autoHeal(value, time) {
    setInterval(function(){
        heal(value)
    },time * 1000)
}

