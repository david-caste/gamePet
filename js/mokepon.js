

let botonMascota = document.getElementById('boton-mascota')
botonMascota.addEventListener('click', ()=>{
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    if(inputHipodoge.checked){
        alert("Mascota hipodoge")
    }else if(inputCapipepo.checked){
        alert("Mascota capipepo")
    }else if(inputRatigueya.checked){
        alert("Mascota ratigueya")
    }else{
        alert("Selecciona una mascota")
    }
})