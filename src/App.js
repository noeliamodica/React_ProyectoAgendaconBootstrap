import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AgendaGrid from './components/AgendaGrid';

function App() {
  return (
    <div className="container">
      <h3 className="text-center p-2">LISTA DE TAREAS</h3>
        <div className="row">
        <AgendaGrid />

        </div>
    </div>
  );
}

export default App;
