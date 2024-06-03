// Inserte el código aquí
let inputAgregar = document.getElementById("input-agregar")
let agregar = document.getElementById("agregar")

async function datos() {
    try {
        const respuesta = await fetch("http://localhost:3000/api/task")
        let datos = await respuesta.json()
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}

async function darDatos() {
    try {
        let tarea = {
            id:Date.now(),
            nombre:inputAgregar.value
    }
    const respuesta = await fetch("",{
        method:"POST",
        Headers:{
            "Content-type": "application/json; charset=UTF-8"
        },
        body:JSON.stringify(tarea)
    })
    } catch (error) {
        console.error(error);
    }
}
agregar.addEventListener("click",datos)