import { useEffect, useState } from "react";
import Card from "./Card";
import Swal from "sweetalert2";
import "./Cryptos.scss";
import { useNavigate } from "react-router-dom";

const cardImages = [
  { src: "../../../img/Bitcoin-icon.png", matched: false },
  { src: "../../../img/Tether-icon.png", matched: false },
  { src: "../../../img/Dash-icon.png", matched: false },
  { src: "../../../img/Dogecoin-icon.png", matched: false },
  { src: "../../../img/EOS-icon.png", matched: false },
  { src: "../../../img/Monero-icon.png", matched: false },
];

function Cryptos() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState();
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [matchesNumber, setMatchesNumber] = useState(0);

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    // setTimeout(() => (finishGame()),35000)
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              setMatchesNumber(matchesNumber +1)
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);

  };

  let navigation = useNavigate();
  const finishGame = () => {
    Swal.fire({
      title: "Descifraste parte de las credenciales",
      color: "#f1f1f1d1",
      confirmButtonColor: '#222',
      background:
      'url("https://c.tenor.com/-SV9TjUGabMAAAAC/hacker-python.gif") no-repeat',
    }).then((result) => {
      if(result.isConfirmed) {
        navigation('/main');
        console.log("confirmado");
      }
    })
  };
  // start new game auto
  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect( () => {
    if(matchesNumber === 6){
      finishGame();
    }
  }, [matchesNumber])

  return (
    <div className="cryptos-container">
      <h1>Crypto Match</h1>
      <button className="cryptos-btn" onClick={shuffleCards}>
        New Game
      </button>
      <div className="card-grid">
        {cards.map((card) => (
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

export default Cryptos;
