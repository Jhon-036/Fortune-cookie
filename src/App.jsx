import { useState } from 'react';
import './App.css'
import getRandomFromArr from './utils/getRandomFromArr';
import phrases from './utils/phrases.json'
import Phrase from './components/Phrase';
import Button from './components/Button';
import bg from './utils/bg.json'

function App() {

  const initialPhrase = getRandomFromArr(phrases)
  const initialBg = getRandomFromArr(bg)

  const [quoteRandom, setQuoteRandom] = useState(initialPhrase)
  const [bgRandom, setBgRandom] = useState(initialBg)

  console.log(quoteRandom);

  const objStyle = {
    backgroundImage : `url(/fondo${bgRandom}.png)`
  }

  return (
    <section style={objStyle}>
      <h2 className='title'>GALLETAS DE LA FORTUNA</h2>
      <div className="container">
        <Button setQuoteRandom={setQuoteRandom} setBgRandom={setBgRandom}/>
        <Phrase quoteRandom={quoteRandom}/>
      </div>
      <p className='author'>{quoteRandom.author}</p>
    </section>  
  )
}

export default App
