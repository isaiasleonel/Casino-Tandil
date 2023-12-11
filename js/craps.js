"use strict";
let usuario = id("usuario");
let numero = Math.floor(Math.random() * 6) + 1;
let foto_dado = id("img-randomDado");
let btn_reseteo = id("btn-reset").addEventListener("click", reset);
let resultado = document.querySelector("#resultado_dado");
let btn_apostar = document
    .querySelector("#btn-apostar")
    .addEventListener("click", apostar);
let ganada = id("vecesGanadas");
let perdida = id("vecesPerdidas");
let contadorVecesGanado = 0;
let contadorVecesPerdida = 0;

function apostar(e) {
    e.preventDefault()
    let valorUser = usuario.value;
    resultado.innerHTML = "";
    let source = `img/Dado/dado${numero}.jpg`;
    foto_dado.src = source;
    foto_dado.style.transition = "all 1s ease";
    foto_dado.style.transform = `rotate(360deg)`;

    if (valorUser > 0 && valorUser < 7)
        if (valorUser == numero) {
            resultado.innerHTML = `Ganaste!!!`;
            resultado.classList.add('verde')
            resultado.classList.remove('rojo')
            contadorVecesGanado++;
            ganada.innerHTML = contadorVecesGanado;
        } else {
            resultado.classList.add('rojo')
            resultado.classList.remove('verde')
            resultado.innerHTML = `Segui participando. Tu numero fue el ${valorUser}`;
            contadorVecesPerdida++;
            perdida.innerHTML = contadorVecesPerdida;
            foto_dado.style.transition = "all 1s ease";
            foto_dado.style.transform = `rotate(90deg)`;
        }
    numero = Math.floor(Math.random() * 6) + 1;

}

function reset() {
    usuario.value = 1;
    numero = Math.floor(Math.random() * 6) + 1;
    resultado.innerHTML = "";
    let source = `img/Dado/dado0.jpg`;
    foto_dado.src = source;
    ganada.innerHTML = 0;
    perdida.innerHTML = 0;
}
// ----------------------------------funciones--------------
function id(str) {
    return document.getElementById(str);
}


