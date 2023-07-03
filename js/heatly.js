let hpBar = document.querySelector("#redbar");
let mainhpBar = document.querySelector("#hpBar");
let dmgText = document.querySelector(".profDMG");

let hp = 100;
let dmgMin = 1;
let dmgMax = 10;

function dmg() {
    let dmg = Math.floor(Math.random() * (dmgMax - dmgMin +1) +1);

    hp = hp - dmg
    
    if(hp > 0) {
    document.querySelector(".redbar").style.width = hp + "%";
    mainhpBar.querySelector("p").innerText = "HP " + hp + "%";
    dmgText.style.color = "red";
    dmgText.style.padding = "5px";
    dmgText.innerText = "-" + dmg +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },1000);
    } else {
        dmg = dmg + hp;
        hp = 0;
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
    let beforeHeal = hp
    hp = hp + x;
    

    if(hp <= 100) {
    document.querySelector(".redbar").style.width = hp + "%";
    mainhpBar.querySelector("p").innerText = "HP " + hp + "%"
    document.querySelector("#myDiv").classList.remove("grave");
    dmgText.style.color = "green";
    dmgText.style.padding = "5px";
    dmgText.innerText = "+" + x +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },2000);
    } if(hp > 100) {
        hp = 100;
        document.querySelector(".redbar").style.width = hp + "%";
        mainhpBar.querySelector("p").innerText = "HP " + hp + "%";
        if(beforeHeal < 100){
        dmgText.style.color = "green";
        dmgText.style.padding = "5px";
        dmgText.innerText = "+" + (hp - beforeHeal) +" hp";
    setTimeout(function(){
        dmgText.innerText = " "
        dmgText.style.padding = "0px";
    },2000);        
    }
}

}

