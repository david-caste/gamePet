const sectionAtaque = document.getElementById('section-attack')
const sectionMascota = document.getElementById('section-pet')
const sectionBtnReinicio = document.getElementById('final')
const botonMascota = document.getElementById('boton-mascota')
const ataqueAgua = document.getElementById('boton-agua')
const ataqueFuego = document.getElementById('boton-fuego')
const ataqueTierra = document.getElementById('boton-tierra')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const btnReiniciar = document.getElementById('boton-reiniciar')
const inputMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataqueJugador')
const ataqueDelEnemigo = document.getElementById('ataqueEnemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionMokepones
let vidasJugador = 3
let vidasEnemigo = 3

sectionAtaque.style.display = 'none'

sectionBtnReinicio.style.display = 'none'

//clases
class mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
    }
}

//creación Mokepones
let hipodoge = new mokepon('Hipodoge', './asset/img-loading.webp', 5)
let capipepo = new mokepon('Capipepo', './asset/img-loading.webp', 5)
let ratigueya = new mokepon('Ratigueya', './asset/img-loading.webp', 5)


hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🗻', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🗻', id: 'boton-tierra'},
)

ratigueya.ataques.push(
    {nombre: '🗻', id: 'boton-tierra'},
    {nombre: '🗻', id: 'boton-tierra'},
    {nombre: '🗻', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

mokepones.push(hipodoge, capipepo, ratigueya)
//inyectar HTML
mokepones.forEach((mokepon) =>{
    opcionMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre} autocomplete="off">
    <label class="tarjeta-mascota" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt="${mokepon.nombre}">
    </label>
    `
    contenedorTarjetas. innerHTML += opcionMokepones
})

botonMascota.addEventListener('click', ()=>{

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
ataqueAgua.addEventListener('click', ()=>{
    ataqueJugador = 'AGUA'
    seleccionarAtaqueEnemigo()
})

ataqueFuego.addEventListener('click', ()=>{
    ataqueJugador = 'FUEGO'
    seleccionarAtaqueEnemigo()
})

ataqueTierra.addEventListener('click', ()=>{
    ataqueJugador = 'TIERRA'
    seleccionarAtaqueEnemigo()
})

//Boton reiniciar
    btnReiniciar.addEventListener('click', ()=>{
        location.reload()
        document.getElementById('hipodoge').checked = false;
        document.getElementById('ratigueya').checked = false;
        document.getElementById('capipepo').checked = false;
})

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)

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
    let nuevoAtaqueJugador = document.createElement('P')
    let nuevoAtaqueEnemigo = document.createElement('P')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML= ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoCombateFinal){
    sectionMensaje.innerHTML = resultadoCombateFinal

    //Desactivar botones
    ataqueAgua.disabled = true
    ataqueFuego.disabled = true
    ataqueTierra.disabled = true
}