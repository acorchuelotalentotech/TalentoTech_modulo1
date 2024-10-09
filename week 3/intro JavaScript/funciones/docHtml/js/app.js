const elemento = document.getElementById("miElemento");
const inputemail = document.getElementById("email");
const inputclave = document.getElementById("clave");
const miElemento = document.getElementById("miElemento");
const myform = document.querySelector("form");

myform.addEventListener("click", function(event){
    event.preventDefault();
});

elemento.textContent = "Esto es javascript";
elemento.style = "color:red";

function validarform(){
    const expresion = new RegExp('^(.+)@(\\S+)$');
    if(expresion.test(inputemail.value)){
        console.log("Si ");
        //return true
    }else{
        alert("El correo tiene formato incorrecto");
        return;
    }

    if(inputclave.value === ""){
        alert("debe ingresar una clave");
    }else{
        if(inputclave.value == "miclave"){
            alert("Ha ingresado la clave correctamente");
        }else{
            alert("Debe ingresar una clave valida");
            
        }
    }
}