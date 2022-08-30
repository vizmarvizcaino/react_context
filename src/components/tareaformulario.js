import React, { useState } from 'react'
import '../stylesheet/tareaformulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {
  const [input, setInput] = useState('')
  
  function manejarCambio(e) {
    const notNumber = 'Por Favor Ingrese Un Numero Correctamente'
    if (isNaN(e.target.value)){
      return alert(notNumber)
  } else {
    setInput(e.target.value)
    console.log(e.target.value)
  }
  }

  function manejarEnvio(e) {
    e.preventDefault()

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva)
  }

  return (
    <form
      className='tarea-formulario'
      onSubmit={manejarEnvio}
    >
      <input type="text"
        className='tarea-input'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>Agregar</button>
    </form>
  )
}
export default TareaFormulario;
