let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

let sectionAtaque = document.getElementById('section-attack')
sectionAtaque.style.display = 'none'

let sectionMascota = document.getElementById('section-pet')

let sectionBtnReinicio = document.getElementById('final')
sectionBtnReinicio.style.display = 'none'

let botonMascota = document.getElementById('boton-mascota')
botonMascota.addEventListener('click', ()=>{
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        alert("Mascota hipodoge")
        spanMascotaJugador.innerHTML = 'Hipodoge'
        sectionAtaque.style.display = 'flex'
        sectionMascota.style.display = 'none'
    }else if(inputCapipepo.checked){
        alert("Mascota capipepo")
        spanMascotaJugador.innerHTML = 'Capipepo'
        sectionAtaque.style.display = 'flex'
        sectionMascota.style.display = 'none'
    }else if(inputRatigueya.checked){
        alert("Mascota ratigueya")
        spanMascotaJugador.innerHTML = 'Ratigueya'
        sectionAtaque.style.display = 'flex'
        sectionMascota.style.display = 'none'
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
    seleccionarAtaqueEnemigo()
})

let ataqueFuego = document.getElementById('boton-fuego')
ataqueFuego.addEventListener('click', ()=>{
    ataqueJugador = 'FUEGO'
    seleccionarAtaqueEnemigo()
})

let ataqueTierra = document.getElementById('boton-tierra')
ataqueTierra.addEventListener('click', ()=>{
    ataqueJugador = 'TIERRA'
    seleccionarAtaqueEnemigo()
})

//Boton reiniciar
let btnReiniciar = document.getElementById('boton-reiniciar')
    btnReiniciar.addEventListener('click', ()=>{
        location.reload()
        document.getElementById('hipodoge').checked = false;
        document.getElementById('ratigueya').checked = false;
        document.getElementById('capipepo').checked = false;
})

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let inputMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatorio == 1){
        inputMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(mascotaAleatorio == 2){
        inputMascotaEnemigo.innerHTML = 'Capipepo'
    }else{
        inputMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

//Función Mascota del enemigo
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Función ataque enemigo
function seleccionarAtaqueEnemigo(){
    let eleccion = aleatorio(1,3)
    if(eleccion == 1){
        ataqueEnemigo = 'TIERRA'
        combate()
    }else if(eleccion == 2){
        ataqueEnemigo = 'FUEGO'
        combate()
    }else{
        ataqueEnemigo = 'AGUA'
        combate()
    }
}

//Combate
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('EMPATE')
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

//Revisar vidas
function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('GANASTE A TU OPONENTE')
        sectionBtnReinicio.style.display = 'block'
    }else if(vidasJugador == 0){
        crearMensajeFinal('PERDISTE')
        sectionBtnReinicio.style.display = 'block'
    }
}

//Mensaje
function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataqueJugador')
    let ataqueDelEnemigo = document.getElementById('ataqueEnemigo')

    let nuevoAtaqueJugador = document.createElement('P')
    let nuevoAtaqueEnemigo = document.createElement('P')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML= ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoCombateFinal){
    let sectionMensaje = document.getElementById('resultado')

    sectionMensaje.innerHTML = resultadoCombateFinal

    //Desactivar botones
    let ataqueAgua = document.getElementById('boton-agua')
    ataqueAgua.disabled = true
    let ataqueFuego = document.getElementById('boton-fuego')
    ataqueFuego.disabled = true
    let ataqueTierra = document.getElementById('boton-tierra')
    ataqueTierra.disabled = true
}