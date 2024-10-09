const lista = document.getElementById("lista");
const tarea = document.getElementById("tareas");
const boton = document.getElementById("boton");
const boton2 = document.getElementById("boton2");

boton.addEventListener("click", function(event){
    console.log(event);
    agregarTareas();
});

boton2.addEventListener("click", function(event){
    console.log(event);
    eliminarTareas();
});


function agregarTareas(){
    const nuevaTarea = document.createElement("li");
    nuevaTarea.innerText = tarea.value;
    lista.appendChild(nuevaTarea);
}
function eliminarTareas(){
    const h = document.querySelector("li");
    console.log(h);
    lista.removeChild(h);
}