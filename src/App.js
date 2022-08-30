import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import * as actionCreators from "./state/actionCreators/index"
import { useRef } from 'react';

function App() {


  const account = useSelector(state => state.account)
  const dispatch = useDispatch()
  const amount = useRef(0)

  const {depositHandler, drawHandler} = bindActionCreators(actionCreators, dispatch)


    return(<div className="App">
      <header className="App-header">
        React-Redux App
        <h2>{account}</h2>
        <input type="number" ref={amount}/>
        <button onClick={()=>depositHandler(amount.current.value)}>Deposit</button>
        <button onClick={()=>drawHandler(amount.current.value)}>Withdraw</button>

      </header>
    </div>
  );
}

export default App;
