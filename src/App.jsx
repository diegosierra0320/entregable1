import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from './utils/colors'

function App() {

  
  const getRandomElement = Array => {
    const indexRandom = Math.floor(Math.random() * Array.length)
    return Array[indexRandom];
  }

  let quotesRandom = getRandomElement(quotes);
  let colorRandom = getRandomElement(colors);

  const [randomQuote, setRamdomQuote] = useState(quotesRandom);
  const [randomColors, setRandomColors] = useState(colorRandom);

  const objStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    quotesRandom = getRandomElement(quotes);
    colorRandom = getRandomElement(colors);

    setRamdomQuote(quotesRandom)
    setRandomColors(colorRandom)
  }

      
  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
      randomQuote={randomQuote} 
      randomColors={randomColors}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
