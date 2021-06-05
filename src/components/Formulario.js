import React, {Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({registrarCita}) => {

const [cita,ActualizarCita]= useState({
mascota:'',
propietario:'',
fecha:'',
hora:'',
sintomas:'',
})



const ActualizarState = e => {
    ActualizarCita({
    ...cita,
    [e.target.name]:e.target.value
})
}



const [error,ActualizarError]= useState(false)



const {mascota, propietario, fecha,hora,sintomas}=cita;
  
const SubmitCita = e => {
    e.preventDefault();


    if(mascota.trim()==='' ||  propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()===''){
        ActualizarError(true)
        return;
    }

    ActualizarError(false)
    cita.id=uuidv4();

    registrarCita(cita);

    ActualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
        })
        

    }

    
    

return (  
       <Fragment>


           <h2>Crear cita</h2>
           {error ? <p className="alerta-error">¡¡TODOS LOS CAMPOS SON OBLIGATORIOS!!</p>   :null}
           <form onSubmit={SubmitCita}>
               
               <label>Nombre mascota</label>
               <input
               type="text"
               name="mascota"
               className="u-full-width"
               placeholder="Nombre mascota"
               onChange={ActualizarState}
               value={mascota}
              />

<label>Nombre Dueño</label>
               <input
               type="text"
               name="propietario"
               className="u-full-width"
               placeholder="Nombre mascota de la mascota"
               onChange={ActualizarState}
               value={propietario}

              />

<label>Fecha</label>
               <input
               type="date"
               name="fecha"
               className="u-full-width"
               onChange={ActualizarState}
               value={fecha}
              />

<label>Hora</label>
               <input
               type="time"
               name="hora"
               className="u-full-width"
               onChange={ActualizarState}
               value={hora}
              />

<label>Sintomas</label>
               <textarea 
               className="u-full-width"
               name="sintomas"
               onChange={ActualizarState}
               value={sintomas}
               ></textarea>

               <button
               type="submit"
               className="u-full-width button-primary"
               onChange={ActualizarState}
               
               >Agregar Cita</button>
           </form>
       </Fragment>

    );
}

 Formulario.propTypes ={
     crearCita: PropTypes.func.isRequired
 }
export default Formulario;
