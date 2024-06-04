import { disconnect } from "process"

// Inserte el código aquí
let inputAgregar = document.getElementById("input-agregar")
let contenedorTareas = document.getElementById("contenedorTareas")
let agregar = document.getElementById("agregar")


async function datos() {
    console.log("dsad")
    try {
        const respuesta = await fetch("http://localhost:3000/api/task")
        let datos = await respuesta.json()
        console.log(datos);
        datos.forEach(fun => {
            let div = document.createElement("div")
            let checkBox = document.createElement("input")
            checkBox.type = "checkbox"
            let p = document.createElement("p")
            let btnElim = document.createElement("button")
            btnElim.innerHTML="Eliminar"
            btnElim.addEventListener("click",()=>{
                console.log(fun.id);
            })
            p.innerHTML=fun.nombre
            p.appendChild(checkBox)
            
            p.appendChild(btnElim)
            div.appendChild(p)
            contenedorTareas.appendChild(div)
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
    } catch (error) {
        console.error(error);
    }
}

agregar.addEventListener("click", function () {
    datos()
})


export{datos, darDatos}
