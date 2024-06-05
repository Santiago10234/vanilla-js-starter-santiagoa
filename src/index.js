import { disconnect } from "process"

// Inserte el código aquí
let inputAgregar = document.getElementById("input-agregar")
let contenedorTareas = document.getElementById("contenedorTareas")
let contadorTareas = document.getElementById("contador-tareas")
let agregar = document.getElementById("agregar")

inputAgregar.addEventListener("keydown",(e)=>{
    if (e.key=="Enter") {
        darDatos()
    }
})

async function datos() {
    contenedorTareas.innerHTML = ""
    try {   
        const respuesta = await fetch("http://localhost:3000/api/task")
        let datos = await respuesta.json()
        console.log(datos);
        datos.forEach(fun => {
            let div = document.createElement("div")
            let checkBox = document.createElement("input")
            checkBox.type = "checkbox"
            checkBox.classList.add("check")
            let p = document.createElement("p")
            p.classList.add("tareas")
            let btnElim = document.createElement("button")
            btnElim.classList.add("eliminar")
            btnElim.innerHTML="Eliminar"
            p.innerHTML=fun.nombre
            checkBox.addEventListener("click", ()=>{
                if (checkBox.checked==true) {
                    upCheckBox(fun.id)
                    contadorTareas.value++
                }else{
                    contadorTareas.value--
                }
            })
            btnElim.addEventListener("click",()=>{
                elimTarea(fun.id)
            })
            p.appendChild(checkBox)
            p.appendChild(btnElim)
            contenedorTareas.appendChild(p)
        });
    } catch (error) {
        console.error(error);
    }

}

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

agregar.addEventListener("click", function () {
    darDatos()
})

//http://localhost:3000/api/task/id
async function elimTarea(id) {
    try {
        const respuesta = await fetch( `http://localhost:3000/api/task/${id}`, {
            method: "DELETE"
        });
        if (respuesta.ok) {
            // Si la solicitud se completó con éxito, actualizamos la lista de tareas
            await datos();
            console.log("Tarea eliminada exitosamente");
        } else {
            console.error("Error al eliminar la tarea");
        }
    } catch (error) {
        console.error(error);
    }
}

async function upCheckBox(id) {
    try {
        let task = {
            estado:true
        }
    const respuesta = await fetch(`http://localhost:3000/api/task/${id}`,{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(task)
    })
    let data = await respuesta.json()
    console.log(data)
    } catch (error) {
        console.log(error);
    }
}