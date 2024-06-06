import { elimTarea } from "./funtion"
let contadorTareas = document.getElementById("contador-tareas")
import { upCheckBox } from "./update"
async function datos() {
    contenedorTareas.innerHTML = ""
    try {   
        const respuesta = await fetch("http://localhost:3000/api/task")
        let datos = await respuesta.json()
        console.log(datos);
        datos.forEach(fun => {
           
            let checkBox = document.createElement("input")
            checkBox.type = "checkbox"
            checkBox.checked = fun.estado
            if (checkBox.checked) {
                contadorTareas.value++
            }

            
            let p = document.createElement("p")
            p.classList.add("tareas")
            let btnElim = document.createElement("button")
            btnElim.classList.add("eliminar")
            btnElim.innerHTML="Eliminar"
            p.innerHTML=fun.nombre
            checkBox.addEventListener("click", ()=>{
                upCheckBox(fun.id)
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


export {datos}