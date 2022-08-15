
import './App.css';
import Entry from './components/Entry';

function App() {
  return (
    <div className="App">
        <nav class="navbar bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand text-light mb-0 h1">Dollar Converter</span>
        </div>
      </nav>
      <br />

      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-8 mx-auto'>
          <Entry/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
