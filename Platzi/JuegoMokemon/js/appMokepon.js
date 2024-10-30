//variable de tipo global
let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueFuego.addEventListener('click', ataqueFuego)
    let botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueAgua.addEventListener('click', ataqueAgua)
    let botonAtaqueTierra = document.getElementById('boton-tierra')
    botonAtaqueTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){
    let inputHipodoge =  document.getElementById('hipodoge')
    let inputCapipepo =  document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spamMascotaJugador = document.getElementById('mascotaJugador')
    
    if(inputHipodoge.checked){
        //alert('Selecionaste a Hipodoge')
        spamMascotaJugador.innerHTML = 'Hipodoge'
        
    }else if(inputCapipepo.checked){
        //alert('Selecionaste a Capipepo')
        spamMascotaJugador.innerHTML = 'Capipepo'

    }else if(inputRatigueya.checked){
        //alert('Selecionaste a Ratigueya')
        spamMascotaJugador.innerHTML = 'Ratigueya'

    }else{
        alert('Debes seleccionar alguna de las mascotas')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorioEnemigo = aleatorio(1,3)
    //Seleccionar el elemento en el HTML que tenga id mascotaEnemigo
    let spamMascotaEnemigo = document.getElementById('mascotaEnemigo')

    if(mascotaAleatorioEnemigo == 1){
        //Hipodoge
        spamMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (mascotaAleatorioEnemigo == 2){
        //Capipepo
        spamMascotaEnemigo.innerHTML = 'Capipepo'
    }else {
        //Ratigueya
        spamMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
//funcion crea numero aleatorio entre minimo y maximo
function aleatorio(min,max){
    return  Math.floor(Math.random()*(max-min+1)+min)
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA' 
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()  
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()    
}

function ataqueAleatorioEnemigo(){
    ataqueMascotaEnemigo  = aleatorio(1,3)
    if(ataqueMascotaEnemigo == 1){
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueMascotaEnemigo == 2){
         ataqueEnemigo = 'AGUA'
    }else{
         ataqueEnemigo = 'TIERRA'
    }
    
    combate()
    
}

function combate(){
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje('EMPATE')
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE')
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE')
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE')
    }else{
        crearMensaje('PERDISTE')
    }
}

function crearMensaje(disputa){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador +', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + disputa
    sectionMensajes.appendChild(parrafo)
}

// Espera que todo los elementos de html esten cargados
window.addEventListener('load',iniciarJuego)