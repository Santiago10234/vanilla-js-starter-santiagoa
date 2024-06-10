import { elimTarea } from "./funtion"
let contadorTareas = document.getElementById("contador-tareas")
import { upCheckBox } from "./update"


async function datos() {
    // limpia el contenido del contenedor de tareas 
    contenedorTareas.innerHTML = ""
    try {   //Realiza una solicitud fetch a la API para obtener las tareas
        const respuesta = await fetch("http://localhost:3000/api/task")
        let datos = await respuesta.json()
        console.log(datos);
        datos.forEach(fun => {
           //Se crearon las etiquetas que se van a usar para la lista de tareas
            let checkBox = document.createElement("input")
            checkBox.type = "checkbox"
            checkBox.checked = fun.estado // Al refrescar la pagina no se elimina el checkBox marcado
            if (checkBox.checked) {
                contadorTareas.value++
            }
            let p = document.createElement("p")
            p.classList.add("tareas")
            let btnElim = document.createElement("button")
            btnElim.classList.add("eliminar")
            btnElim.innerHTML="Eliminar"
            p.innerHTML=fun.nombre
            //Evento para marcar como lista cada tarea con un checkBox
            checkBox.addEventListener("click", ()=>{ 
                upCheckBox(fun.id)
                if (checkBox.checked==true) {
                    upCheckBox(fun.id)
                    contadorTareas.value++
                }else{
                    contadorTareas.value--
                }
            })
            //Evento para eliminar cada tarea
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


export {datos}