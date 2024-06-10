async function upCheckBox(id) { 
    try {
        const resposePut = await fetch(`http://localhost:3000/api/task/${id}`) // llamar las tareas de la API.
        const dataPut = await resposePut.json()
        let updateTask = { // si el etado actual es true lo cambia a false y viceversa.
            estado: !dataPut.estado
        }
        // realiza una solicitud PUT para actualizar el estado de la tarea
    const respuesta = await fetch(`http://localhost:3000/api/task/${id}`,{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(updateTask)
    })
    let data = await respuesta.json()
    console.log(data)
    } catch (error) {
        console.log(error);
    }
}
export {upCheckBox}