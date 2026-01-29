const sectionAtaque = document.getElementById('section-attack')
const sectionMascota = document.getElementById('section-pet')
const sectionBtnReinicio = document.getElementById('final')
const botonMascota = document.getElementById('boton-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const btnReiniciar = document.getElementById('boton-reiniciar')
const inputMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataqueJugador')
const ataqueDelEnemigo = document.getElementById('ataqueEnemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let ataqueFuego
let ataqueTierra
let ataqueAgua
let botones = []
let ataquePorJugador = []
let opcionMokepones
let victoriasJugador = 0
let victoriasEnemigo = 0
let indexAtaqueJugador
let indexAtaqueEnemigo
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
let hipodoge = new mokepon('hipodoge', './asset/img-loading.webp', 5)
let capipepo = new mokepon('capipepo', './asset/img-loading.webp', 5)
let ratigueya = new mokepon('ratigueya', './asset/img-loading.webp', 5)


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

    inputHipodoge = document.getElementById('hipodoge');
    inputCapipepo = document.getElementById('capipepo');
    inputRatigueya = document.getElementById('ratigueya');
    
})

botonMascota.addEventListener('click', ()=>{

    if(inputHipodoge.checked){
        alert("Mascota hipodoge")
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;
        sectionAtaque.style.display = 'flex'
        sectionMascota.style.display = 'none'
    }else if(inputCapipepo.checked){
        alert("Mascota capipepo")
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;
        sectionAtaque.style.display = 'flex'
        sectionMascota.style.display = 'none'
    }else if(inputRatigueya.checked){
        alert("Mascota ratigueya")
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;
        sectionAtaque.style.display = 'flex'
        sectionMascota.style.display = 'none'
    }else{
        alert("Selecciona una mascota")
    }

    //Ataques Jugador
    extraerAtaques(mascotaJugador)

    //Mascota enemigo
    seleccionarMascotaEnemigo()
    //secuenciaAtaque()
})

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques;
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon;
    })
    ataqueAgua = document.getElementById('boton-agua')
    ataqueFuego = document.getElementById('boton-fuego')
    ataqueTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
}

//Ataques
function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58';
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58';
            }else if(e.target.textContent === '🗻'){
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58';
            }
            seleccionarAtaqueEnemigo();
        })
    })
}

//Boton reiniciar
    btnReiniciar.addEventListener('click', ()=>{
        location.reload()
        document.getElementById('hipodoge').checked = false;
        document.getElementById('ratigueya').checked = false;
        document.getElementById('capipepo').checked = false;
})

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, mokepones.length - 1)

    inputMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques;
    secuenciaAtaque();
}

//Función Mascota del enemigo
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Función ataque enemigo
function seleccionarAtaqueEnemigo(){
    let eleccion = aleatorio(0,ataquesMokeponEnemigo.length - 1)
    if(eleccion == 0 || eleccion == 1){
        ataqueEnemigo.push('TIERRA');
    }else if(eleccion == 3 || eleccion == 4){
        ataqueEnemigo.push('FUEGO');
    }else{
        ataqueEnemigo.push('AGUA');
    }
    console.log(ataqueEnemigo);
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

//Combate
function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index);
            crearMensaje("EMPATE");
        }else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;
        }else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;
        }else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;
        }else{
            indexAmbosOponentes(index, index);
            crearMensaje("PERDISTE");
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
    }
    revisarVidas()
}

//Revisar vidas
function revisarVidas(){
    if(vidasJugador == vidasEnemigo){
        crearMensajeFinal("Esto fue un EMPATE")
        sectionBtnReinicio.style.display = 'block'
    }else if(vidasJugador < vidasEnemigo){
        crearMensajeFinal('PERDISTE')
        sectionBtnReinicio.style.display = 'block'
    }else{
        crearMensajeFinal('GANASTE')
        sectionBtnReinicio.style.display = 'block'
    }
}

//Mensaje
function crearMensaje(resultado){
    let nuevoAtaqueJugador = document.createElement('P')
    let nuevoAtaqueEnemigo = document.createElement('P')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueEnemigo.innerHTML= indexAtaqueEnemigo;

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