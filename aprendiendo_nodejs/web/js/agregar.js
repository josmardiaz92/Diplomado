const form = document.querySelector("form");
let data={};

form.addEventListener("submit", (event) => {
    // Detiene el envío del formulario
    event.preventDefault();
    const identificador=document.getElementById('identificador').value;
    switch (identificador) {
        case 'continente':
            const nom_con=document.getElementById('nom_con').value;
            const des_con=document.getElementById('des_con').value;
            const est_con=document.getElementById('est_con').value;
                    
            data={
                identificador:identificador,
                nom_con:nom_con,
                des_con:des_con,
                est_con:est_con
            }
            break;
        case 'pais':
            const nom_pai=document.getElementById('nom_pai').value;
            const des_pai=document.getElementById('des_pai').value;
            const ali_pai=document.getElementById('ali_pai').value;
            const cti_pai=document.getElementById('cti_pai').value;
            const fky_con=document.getElementById('fky_con').value;
            const est_pai=document.getElementById('est_pai').value;
                    
            data={
                identificador:identificador,
                nom_pai:nom_pai,
                des_pai:des_pai,
                ali_pai:ali_pai,
                cti_pai:cti_pai,
                fky_con:fky_con,
                est_pai:est_pai
            }
            break;
        case 'estado':
            const nom_est=document.getElementById('nom_est').value;
            const des_est=document.getElementById('des_est').value;
            const fky_pai=document.getElementById('fky_pai').value;
            const est_est=document.getElementById('est_est').value;
                    
            data={
                identificador:identificador,
                nom_est:nom_est,
                des_est:des_est,
                fky_pai:fky_pai,
                est_est:est_est
            }
            break;
        case 'ciudad':
            const nom_ciu=document.getElementById('nom_ciu').value;
            const des_ciu=document.getElementById('des_ciu').value;
            const fky_est=document.getElementById('fky_est').value;
            const fky_zon=document.getElementById('fky_zon').value;
            const est_ciu=document.getElementById('est_ciu').value;
                    
            data={
                identificador:identificador,
                nom_ciu:nom_ciu,
                des_ciu:des_ciu,
                fky_est:fky_est,
                fky_zon:fky_zon,
                est_ciu:est_ciu
            }
            break;
        case 'zona_horaria':
            const nom_zon=document.getElementById('nom_zon').value;
            const acr_zon=document.getElementById('acr_zon').value;
            const dif_zon=document.getElementById('dif_zon').value;
            const est_zon=document.getElementById('est_zon').value;
                    
            data={
                identificador:identificador,
                nom_zon:nom_zon,
                acr_zon:acr_zon,
                dif_zon:dif_zon,
                est_zon:est_zon
            }
            break;
        default:
            data={};
            console.log('no hay identificador');
            break;
    }
    if(data!={}){
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
            window.location.href =(`../vistas/${identificador}_listar.html`);
        })
        .catch(error => {
            console.error("Error al enviar los datos:", error);
        });
    }else{
        console.log('Invalido')
    }
    
})