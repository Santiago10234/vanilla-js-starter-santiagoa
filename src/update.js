async function upCheckBox(id) { 
    try {
        const resposePut = await fetch(`http://localhost:3000/api/task/${id}`)
        const dataPut = await resposePut.json()
        let updateTask = {
            estado: !dataPut.estado
        }
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