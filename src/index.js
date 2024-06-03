// Inserte el código aquí
let inputAgregar = document.getElementById("input-agregar").value
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
agregar.addEventListener("click",datos)