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

export {elimTarea}
