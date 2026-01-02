let ataqueJugador
let ataqueEnemigo

let botonMascota = document.getElementById('boton-mascota')
botonMascota.addEventListener('click', ()=>{
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        alert("Mascota hipodoge")
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        alert("Mascota capipepo")
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if(inputRatigueya.checked){
        alert("Mascota ratigueya")
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        alert("Selecciona una mascota")
    }

    //Mascota enemigo
    seleccionarMascotaEnemigo()
})

//Ataques (botones)
let ataqueAgua = document.getElementById('boton-agua')
ataqueAgua.addEventListener('click', ()=>{
    ataqueJugador = 'AGUA'
    document.getElementById('ataque-jugador').innerHTML = ataqueJugador
    seleccionarAtaqueEnemigo()
})

let ataqueFuego = document.getElementById('boton-fuego')
ataqueFuego.addEventListener('click', ()=>{
    ataqueJugador = 'FUEGO'
    document.getElementById('ataque-jugador').innerHTML = ataqueJugador
    seleccionarAtaqueEnemigo()
})

let ataqueTierra = document.getElementById('boton-tierra')
ataqueTierra.addEventListener('click', ()=>{
    ataqueJugador = 'TIERRA'
    document.getElementById('ataque-jugador').innerHTML = ataqueJugador
    seleccionarAtaqueEnemigo()
})

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let inputMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatorio == 1){
        inputMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(mascotaAleatorio == 1){
        inputMascotaEnemigo.innerHTML = 'Capipepo'
    }else{
        inputMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

//Función Mascota del enemigo
function aleatorio(min, max){
    return Math.floor(Math.random * (max - min + 1) + min)
}

//Función ataque enemigo
function seleccionarAtaqueEnemigo(){
    let eleccion = aleatorio(1,3)
    if(eleccion == 1){
        ataqueEnemigo = 'TIERRA'
        document.getElementById('ataque-enemigo').innerHTML = ataqueEnemigo
    }else if(eleccion == 2){
        ataqueEnemigo = 'FUEGO'
        document.getElementById('ataque-enemigo').innerHTML = ataqueEnemigo
    }else{
        ataqueEnemigo = 'AGUA'
        document.getElementById('ataque-enemigo').innerHTML = ataqueEnemigo
    }
}