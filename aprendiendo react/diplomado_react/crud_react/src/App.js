import React, {useState} from 'react';
import './App.css';
import Cabecera from './componentes/Cabecera';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import Continente from './componentes/Continente';

const App = () => {
    const [continentes, cambiarContinentes] = useState(
        [
            {
                id: 1,
                nombre: "Ámerica",
                estatus: "A"
            }
        ]
    );
    console.log(continentes);
    return (
        <div className='contenedor'>
            <Cabecera/>
            <Formulario continentes={continentes} cambiarContinentes={cambiarContinentes}/>
            <Listado continentes={continentes}/>
        </div>
    );
}
export default App;