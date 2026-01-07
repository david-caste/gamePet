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
        crearMensaje()
    }else if(eleccion == 2){
        ataqueEnemigo = 'FUEGO'
        crearMensaje()
    }else{
        ataqueEnemigo = 'AGUA'
        crearMensaje()
    }
}

//Combate
function combate(){
    if(ataqueEnemigo == ataqueJugador){

    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){

    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        
    }else{

    }
}

//Mensaje
function crearMensaje(){
    let sectionMensaje = document.getElementById('mensaje')

    let txtParrafo = document.createElement('P')
    txtParrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' la mascota del enemigo ataco con ' + ataqueEnemigo + ' -  GANASTE'

    sectionMensaje.appendChild(txtParrafo)
}