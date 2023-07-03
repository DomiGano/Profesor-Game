let hpBar = document.querySelector("#redbar");
let mainhpBar = document.querySelector("#hpBar");

let hp = 100;
let dmgMin = 1;
let dmgMax = 10;

function dmg() {
    let dmg = Math.floor(Math.random() * (dmgMax - dmgMin +1) +1);

    hp = hp - dmg
    
    if(hp > 0) {
    document.querySelector(".redbar").style.width = hp + "%";
    mainhpBar.querySelector("p").innerText = "HP " + hp + "%"
    console.log(dmg)
    } else {
        dmg = dmg + hp;
        hp = 0;
        document.querySelector(".redbar").style.width = 0 + "%";
        mainhpBar.querySelector("p").innerText = "RIP";
        document.querySelector("#myDiv").classList.add("grave");
        if(dmg > 0) {
            console.log(dmg);
        }
    }

}

function heal(x) {
    hp = hp + x;

    if(hp <= 100) {
    document.querySelector(".redbar").style.width = hp + "%";
    mainhpBar.querySelector("p").innerText = "HP " + hp + "%"
    document.querySelector("#myDiv").classList.remove("grave");
    } if(hp > 100) {
        hp = 100;
        document.querySelector(".redbar").style.width = hp + "%";
        mainhpBar.querySelector("p").innerText = "HP " + hp + "%"
    }

}

