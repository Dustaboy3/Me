
function init() {

    element = generateElement();
    evoClass = "." + element;
    evoDivider1 = ".dividerElement-1-" + element;
    evoDivider2 = ".dividerElement-2-" + element;
    evoColorClass = "color-" + element;
    evoBorderClass = "border-" + element;
    evoBorderTopClass = "border-top" + element;
    eggClass = ".egg-" + element;

    document.querySelector(evoClass).classList.remove('d-none');
    document.querySelector(evoDivider1).classList.remove('d-none');
    document.querySelector(evoDivider2).classList.remove('d-none');
    document.querySelector('#AboutMe').classList.add(evoColorClass);
    document.querySelector('#Projects').classList.add(evoColorClass);
    document.querySelector('#click').classList.add(evoColorClass);
    document.querySelector('#click').classList.add(evoBorderClass);
    document.querySelector('.fa-github').classList.add(evoColorClass);
    document.querySelector('.fa-linkedin').classList.add(evoColorClass);
    document.querySelector('.background-wh').classList.add(evoBorderClass);
    document.querySelector(eggClass).classList.remove('d-none');
    document.querySelector(eggClass).classList.add('active-egg');

    //Elements functions

    function isNight() {
        var date = new Date();
        var currentTime = date.getHours();
        if (currentTime >= 22 || currentTime <= 5) {
            return true
        }
        return false;
    }

    function getCommonElement() {
        let chance = Math.floor(Math.random() * 5);
        switch (chance) {
            case 0:
                return 'water';
            case 1:
                return 'electric';
            case 2:
                return 'fire';
            case 3:
                return 'grass';
            case 4:
                return 'ice';
        }
    }

    function generateElement() {
        let chanceNight = Math.floor((Math.random() < 0.5));
        let chanceDay = Math.floor(Math.random() * 100);
        if (isNight() === true) {
            if (chanceNight === 0) {
                return 'dark';
            } else {
                return getCommonElement();
            }
        } else {
            if (chanceDay === 88) {
                return 'fairy';
            }
            if (chanceDay === 17) {
                return 'psychic';
            }
            return getCommonElement();
        }
    }
}

window.addEventListener('DOMContentLoaded', init)

window.onload = function () {
    var mountainElectric = document.getElementById("mountainElectric");
    var cloudsEletric = document.getElementById("cloudsEletric");
    var mountainFire = document.getElementById("mountainFire");
    var cloudsFire = document.getElementById("cloudsFire");
    var mountainIce = document.getElementById("mountainIce");
    var cloudsIce = document.getElementById("cloudsIce");
    var mountainPsychic = document.getElementById("mountainPsychic");
    var groundPsychic = document.getElementById("groundPsychic");
    var mountainFairy = document.getElementById("mountainFairy");
    var cloudsFairy = document.getElementById("cloudsFairy");
    var mountainWater = document.getElementById("mountainWater");
    var cloudsWater = document.getElementById("cloudsWater");
    var mountainGrass = document.getElementById("mountainGrass");
    var cloudsGrass = document.getElementById("cloudsGrass");
    var mountainDark = document.getElementById("mountainDark");
    var cloudsDark = document.getElementById("cloudsDark");
    var x;

    window.addEventListener('mousemove', function (event) {
        x = event.clientX - (window.innerWidth / 2);
        if (typeof x !== 'undefined') {
            mountainElectric.style.left = -x / 48 + "px";
            cloudsEletric.style.left = -x / 24 + "px";
            mountainFire.style.left = -x / 48 + "px";
            cloudsFire.style.left = -x / 24 + "px";
            mountainIce.style.left = -x / 48 + "px";
            cloudsIce.style.left = -x / 24 + "px";
            mountainPsychic.style.left = -x / 48 + "px";
            groundPsychic.style.left = -x / 24 + "px";
            mountainFairy.style.left = -x / 48 + "px";
            cloudsFairy.style.left = -x / 24 + "px";
            mountainWater.style.left = -x / 48 + "px";
            cloudsWater.style.left = -x / 24 + "px";
            mountainGrass.style.left = -x / 48 + "px";
            cloudsGrass.style.left = -x / 24 + "px";
            mountainDark.style.left = -x / 48 + "px";
            cloudsDark.style.left = -x / 24 + "px";
        }
    }, false);
}
