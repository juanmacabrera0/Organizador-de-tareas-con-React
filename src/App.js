
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  
  return (
    <div className="container-app-tareas">
      <div className='titulo'>
        <h2>Organizador de tareas con React</h2>
        <h3>por Juan Manuel Cabrera</h3>
      </div>
      <div className='tareas-lista-ppal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
    
  );
}

export default App;
