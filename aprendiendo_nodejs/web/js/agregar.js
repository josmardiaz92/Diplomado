const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    // Detiene el envío del formulario
    event.preventDefault();
    const identificador=document.getElementById('identificador').value;
    const nom_pai=document.getElementById('nom_pai').value;
    const des_pai=document.getElementById('des_pai').value;
    const ali_pai=document.getElementById('ali_pai').value;
    const cti_pai=document.getElementById('cti_pai').value;
    const fky_con=document.getElementById('fky_con').value;
    const est_pai=document.getElementById('est_pai').value;
            
    const data={
        identificador:identificador,
        nom_pai:nom_pai,
        des_pai:des_pai,
        ali_pai:ali_pai,
        cti_pai:cti_pai,
        fky_con:fky_con,
        est_pai:est_pai
    }

    // Realiza una solicitud fetch al servidor
    fetch("http://localhost:3000/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        // Puedes realizar cualquier acción adicional aquí, como redirigir o mostrar un mensaje de éxito
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        // Maneja el error, por ejemplo, muestra un mensaje de error al usuario
    });

})