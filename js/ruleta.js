// ----------------------ruleta---------------------------
let btn_ruleta = id("btn-ruleta").addEventListener("click", jugarRuleta);
const ruleta = id("ruleta");
let element = id("resultado_rulet");
let deg = 0;

function jugarRuleta(event) {

    deg = Math.floor(5000 + Math.random() * 5000);
    btn_ruleta = event.target
    btn_ruleta.disabled = true
    ruleta.style.transition = "all 5s ease";
    ruleta.style.transform = `rotate(${deg}deg)`;
    ruleta.classList.add("blur");
}

ruleta.addEventListener("transitionend", () => {

    ruleta.classList.remove("blur");
    ruleta.style.transition = "none";

    //calculo para ruleta
    const actualDeg = deg % 360;
    ruleta.style.transform = `rotate(${actualDeg}deg)`;

    //condiciones

    if (actualDeg >= 0 && actualDeg < 10) {
        element.innerText = "26 Black";
    }
    if (actualDeg >= 10 && actualDeg < 20) {
        element.innerText = "3 RED";
    }
    if (actualDeg >= 20 && actualDeg < 30) {
        element.innerText = "35 BLACK";
    }
    if (actualDeg >= 30 && actualDeg < 39) {
        element.innerText = "12 RED";
    }
    if (actualDeg >= 39 && actualDeg < 49) {
        element.innerText = "28 BLACK";
    }
    if (actualDeg >= 49 && actualDeg < 59) {
        element.innerText = "7 RED";
    }
    if (actualDeg >= 59 && actualDeg < 69) {
        element.innerText = "29 BLACK";
    }
    if (actualDeg >= 69 && actualDeg < 78) {
        element.innerText = "18 RED";
    }
    if (actualDeg >= 78 && actualDeg < 88) {
        element.innerText = "22 BLACK";
    }
    if (actualDeg >= 88 && actualDeg < 98) {
        element.innerText = "9 RED";
    }
    if (actualDeg >= 98 && actualDeg < 107) {
        element.innerText = "31 BLACK";
    }
    if (actualDeg >= 107 && actualDeg < 117) {
        element.innerText = "14 RED";
    }
    if (actualDeg >= 117 && actualDeg < 127) {
        element.innerText = "20 BLACK";
    }
    if (actualDeg >= 127 && actualDeg < 137) {
        element.innerText = "1 RED";
    }
    if (actualDeg >= 137 && actualDeg < 146) {
        element.innerText = "33 BLACK";
    }
    if (actualDeg >= 146 && actualDeg < 156) {
        element.innerText = "16 RED";
    }
    if (actualDeg >= 156 && actualDeg < 166) {
        element.innerText = "24 BLACK";
    }
    if (actualDeg >= 166 && actualDeg < 176) {
        element.innerText = "5 RED";
    }
    if (actualDeg >= 176 && actualDeg < 185) {
        element.innerText = "10 BLACK";
    }
    if (actualDeg >= 185 && actualDeg < 195) {
        element.innerText = "23 RED";
    }
    if (actualDeg >= 195 && actualDeg < 205) {
        element.innerText = "8 BLACK";
    }
    if (actualDeg >= 205 && actualDeg < 215) {
        element.innerText = "30 RED";
    }
    if (actualDeg >= 215 && actualDeg < 224) {
        element.innerText = "11 BLACK";
    }
    if (actualDeg >= 224 && actualDeg < 234) {
        element.innerText = "36 RED";
    }
    if (actualDeg >= 234 && actualDeg < 244) {
        element.innerText = "13 BLACK";
    }
    if (actualDeg >= 244 && actualDeg < 253) {
        element.innerText = "27 RED";
    }
    if (actualDeg >= 253 && actualDeg < 263) {
        element.innerText = "6 BLACK";
    }
    if (actualDeg >= 263 && actualDeg < 273) {
        element.innerText = "34 RED";
    }
    if (actualDeg >= 273 && actualDeg < 283) {
        element.innerText = "17 BLACK";
    }
    if (actualDeg >= 283 && actualDeg < 292) {
        element.innerText = "25 RED";
    }
    if (actualDeg >= 292 && actualDeg < 302) {
        element.innerText = "2 BLACK";
    }
    if (actualDeg >= 302 && actualDeg < 312) {
        element.innerText = "21 RED";
    }
    if (actualDeg >= 312 && actualDeg < 322) {
        element.innerText = "4 BLACK";
    }
    if (actualDeg >= 322 && actualDeg < 331) {
        element.innerText = "19 RED";
    }
    if (actualDeg >= 331 && actualDeg < 341) {
        element.innerText = "15 BLACK";
    }
    if (actualDeg >= 341 && actualDeg < 350) {
        element.innerText = "32 RED";
    }
    if (actualDeg >= 350 && actualDeg < 360) {
        element.innerText = "0 GREEN";
    }
    btn_ruleta.disabled = false
});
// ----------------------------------funciones--------------
function id(str) {
    return document.getElementById(str);
}