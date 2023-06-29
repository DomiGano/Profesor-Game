let hpBar = document.querySelector("#redbar");
let mainhpBar = document.querySelector("#hpBar");

let hp = 100;
let dmgMin = 1;
let dmgMax = 10;

function dmg() {
    hp = hp - Math.floor(Math.random() * (dmgMax - dmgMin +1) +1);

    if(hp > 0) {
    document.querySelector(".redbar").style.width = hp + "%";
    mainhpBar.querySelector("p").innerText = "HP " + hp + "%"
    } else {
        document.querySelector(".redbar").style.width = 0 + "%";
        mainhpBar.querySelector("p").innerText = "RIP";
        document.querySelector("#myDiv").classList.add("grave");
    }

}

