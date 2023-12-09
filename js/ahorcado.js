"use strict"

// document.addEventListener("DOMContentLoaded", function () {
//     game_over()

// });
let palabrita;
let cant_acertada = 0
let cant_error = 0;
const palabras = [
    'manzana',
    'camiseta',
    'verdura',
    'notbook',
    'otorrinolaringologo',
    'escamas',
    'dengue',
    'sombrilla'
];

let btn = id('jugar').addEventListener('click', iniciar)
let btn_reset = id('reset').addEventListener('click', reset_game)
let foto = id('img-ahorcado')
let parrafo = id('palabra_a_adivinar')


function iniciar(event) {
    cant_acertada = 0
    cant_error = 0;
    btn = event.target
    btn.disabled = true
    parrafo.innerHTML = ""
    const cant_palabras = palabras.length
    let valor_al_azar = obtener_random(0, cant_palabras)
    palabrita = palabras[valor_al_azar]
    let cant_letras = palabrita.length

    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled = false;
    }

    for (let i = 0; i < cant_letras; i++) {
        let span = document.createElement('span')
        parrafo.appendChild(span)
        span.classList.add("span")
    }
    console.log(palabrita)
}

let btn_letras = document.querySelectorAll('#letras button')
for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener('click', click_letras)
}

function click_letras(event) {
    let spans = document.querySelectorAll('#palabra_a_adivinar span')
    let button = event.target
    button.disabled = true
    let letra = button.innerHTML.toUpperCase()
    let palabra = palabrita.toUpperCase()
    let acerto = false

    for (let i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            spans[i].innerHTML = letra
            cant_acertada++
            acerto = true
        }
    }
    if (acerto == false) {
        cant_error++
        let source = `img/Ahorcado/ahorcado${cant_error}.gif`
        let foto = id('img-ahorcado')
        foto.src = source
        console.log(palabra)
    }
    if (cant_error == 7) {
        alert(`Perdiste, la palabra es ${palabrita}`)
        game_over()
    }
    else if (cant_acertada == palabrita.length) {
        alert('Felicadades')
        game_over()
    }
}


function reset_game() {
    game_over()
}
// ------------------Libreria de Funciones------------
function game_over() {
    btn.disabled = false
    parrafo.innerHTML = ""
    let source = `img/Ahorcado/ahorcado0.gif`
    foto.src = source
    cant_acertada = 0
    cant_error = 0;
    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled = true;
    }
}

function obtener_random(val_max, val_min) {
    let amplitud_valores = val_max - val_min
    let valor_al_azar = Math.floor(Math.random() * amplitud_valores) + val_min
    return valor_al_azar
}

function id(str) {
    return document.getElementById(str)
}
