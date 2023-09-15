import './App.css';
import FullPage from './layouts/FullPage';
import data from './data/data.json'
import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <FullPage data={data} />
      <h1>hi</h1>
    </div>
  );
}

export default App;
