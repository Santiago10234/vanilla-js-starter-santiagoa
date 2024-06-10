
import { darDatos } from "./post"
import { loadTasks } from "./funtion"
// Obtener referencias a los elementos del DOM
let inputAgregar = document.getElementById("input-agregar")
let agregar = document.getElementById("agregar")

// Evento para poder agregar tareas con la tecla enter y no poder subir tareas sin texto
inputAgregar.addEventListener("keydown",(e)=>{
    if (e.key=="Enter" && inputAgregar.value!="" && inputAgregar.value.trim()) {
        darDatos()
    }
})
agregar.addEventListener("click", function () {
    if (inputAgregar.value!="" && inputAgregar.value.trim()) {
        darDatos()
    }
    
})


document.addEventListener('DOMContentLoaded', loadTasks)

