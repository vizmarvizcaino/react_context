import React, { useState } from 'react'
import TareaFormulario from './tareaformulario';
import Tarea from './tarea'
import '../stylesheet/listadetarea.css'



function ListaDeTareas() {
  const [tareas, setTareas] = useState([])

  function agregarTarea(tarea) {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareaActualizadas = [tarea, ...tareas]
      setTareas(tareaActualizadas)
    }
  }

  function eliminarTarea(id) {
    const tareaActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareaActualizadas)
  }

  function completarTarea(id) {
    const tareaActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea;
    })
    setTareas(tareaActualizadas)
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tarea-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}

            />

          )
        }
      </div>


    </>
  )
}
export default ListaDeTareas;