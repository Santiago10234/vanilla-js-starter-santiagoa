let inputAgregar = document.getElementById("input-agregar")
import { datos } from "./get"

async function darDatos() {
    try {
        let tarea = {
            id:Date.now(),
            nombre:inputAgregar.value,
            estado:false
        }
    const respuesta = await fetch("http://localhost:3000/api/task",{
        method:"POST",
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        },
        body:JSON.stringify(tarea)
    })
    datos()
    } catch (error) {
        console.error(error);
    }
}

export {darDatos}