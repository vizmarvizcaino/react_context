import './App.css';
import ListaDeTareas from './components/listadetareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <h2 className='logo'>Lista de Gastos, Vizmar Vizcaino</h2>
      </div>
      <div className="tareas-lista-principal">
        <h1>Listas De Gastos</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
