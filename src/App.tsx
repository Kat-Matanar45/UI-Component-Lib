import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header';
import Instruction from './components/Instructions/Instruction';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  const toggleInstructions = (): void => {
    setShowInstructions((prev) => !prev)
  }

  return (
    <div className='app'>
      <Header 
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />
      <Instruction showInstructions={showInstructions}/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
