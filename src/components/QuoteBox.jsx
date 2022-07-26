import React from 'react'

const QuoteBox = ({randomQuote, randomColors, getRandomAll}) => {

  const objStyle = {
    color: randomColors
  }
  
  const objBgStyle = {
    backgroundColor: randomColors
  }
  
  return (
    <div className='card' style={objStyle}>
      <h3>{randomQuote.quote}</h3>
      <br />
      <h3>{randomQuote.author}</h3>
      <button onClick={getRandomAll} className='btn' style={objBgStyle}>&#62;</button>
    </div>
  )
}

export default QuoteBox