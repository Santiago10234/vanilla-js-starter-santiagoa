import { datos } from "./get"
async function elimTarea(id) {
    try {
        const respuesta = await fetch( `http://localhost:3000/api/task/${id}`, {
            method: "DELETE"
        });
        if (respuesta.ok) {
            // Si la solicitud se completó con éxito, actualizamos la lista de tareas
            await datos();
            alert("Tarea eliminada exitosamente");
        } else {
            console.error("Error al eliminar la tarea");
        }
    } catch (error) {
        console.error(error);
    }
}
// funcion para cargar las tareas cuando se refresca la pagina 
async function loadTasks() {
    try {
        const response = await fetch("http://localhost:3000/api/task")
        const tasks = await response.json();
        tasks.forEach(datos())
    } catch (error) {
        console.error("ERROR",error)
    }
}
export {elimTarea, loadTasks}