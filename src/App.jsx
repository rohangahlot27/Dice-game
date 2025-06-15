import { useState } from 'react';
import './index.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {
  
const [isGameStarted, setIsGameStarted] = useState(false);
 
const toggleGamePlay = () => {
  setIsGameStarted((perv) => !perv)
};
  return (
    <div>
      {
    isGameStarted ? <GamePlay/> :  <StartGame toggle = {toggleGamePlay}/>

      }
     
    </div>
  )
}

export default App
