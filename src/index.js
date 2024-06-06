
import { darDatos } from "./post"
import { loadTasks } from "./funtion"
// Inserte el código aquí
let inputAgregar = document.getElementById("input-agregar")
let contenedorTareas = document.getElementById("contenedorTareas")
let contadorTareas = document.getElementById("contador-tareas")
let agregar = document.getElementById("agregar")


inputAgregar.addEventListener("keydown",(e)=>{
    if (e.key=="Enter" && inputAgregar.value!="") {
        darDatos()
    }
})
agregar.addEventListener("click", function () {
    if (inputAgregar.value!="") {
        darDatos()
    }
    
})


document.addEventListener('DOMContentLoaded', loadTasks)

