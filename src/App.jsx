import { useState } from 'react';
import './styles.scss';

/*
  DESAFIO TÉCNICO - JOGO DA VELHA - por fernandev

  * descrição
    desenvolva um jogo da velha (tic tac toe) funcional.
    use qualquer técnica de estilização preferida: css modules, sass, styled.

  * tasks
    ? - crie um board de 3x3
    ? - dois jogadores
    ? - ao clicar em um quadrado, preencher com a jogada
    ? - avisar quando o jogo finalizar, caso dê velha avise também
    ? - fazer um risco na sequência vencedora, caso houver
*/

function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);

  const handleClick = (clickedIndex) => {
    console.log(clickedIndex);

    if (gameData[clickedIndex] !== 0) {
      return;
    }

    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickedIndex] = turn;
      return newGameData;
    });

    setTurn((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <>
      <div className="board-game">
        {gameData.map((value, index) => (
          <span 
          onClick={() => {
            handleClick(index);
          }}
            >{value === 1 && 'x'}
            {value === 2 && 'O'}
            </span>
        ))}
      </div>
    </>
  );
}

export default App;
