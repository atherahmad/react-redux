import './App.css';
import {useSelector} from "react-redux"

function App() {

  const state = useSelector(state => state)
  console.log(state)
    return(<div className="App">
      <header className="App-header">
        React-Redux App
      </header>
    </div>
  );
}

export default App;