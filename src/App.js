
import './App.css';
import Homepage from './pages/Homepage.comp';

import LaunchesDirectory from './components/directory/LaunchesDirectory.comp'

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <LaunchesDirectory/>
        <Homepage/>
      </header>
    </div>
  );
}

export default App;
