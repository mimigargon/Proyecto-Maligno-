import { useEffect, useState } from 'react';
import './Cryptos.scss';
import Card from './Card';
import Swal from 'sweetalert2';



const cardImages = [
  {"src" : "../../../img/Bitcoin-icon.png", matched:false},
  {"src" : "../../../img/Tether-icon.png", matched:false},
  {"src" : "../../../img/Dash-icon.png", matched:false},
  {"src" : "../../../img/Dogecoin-icon.png", matched:false},
  {"src" : "../../../img/EOS-icon.png", matched:false},
  {"src" : "../../../img/Monero-icon.png", matched:false},
]

function App() {
  
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

function finishGame(){
  if ( cards.matched === true) {
    Swal.fire({
      title: "Descifraste parte de las credenciales",
    });
  }
}
  // start new game auto
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Crypto Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      <p>Turns: {turns}</p>
    </div>
  );
}

export default App

