import React,{useState} from 'react';
import './App.css';
import Components from '../src/shared/Components'
import Screen from './views/Screen'

function App() {
  const [screen, setScreen] = useState("form")
  return (
    <Screen></Screen>
    //<Components></Components>
  );
}

export default App;
