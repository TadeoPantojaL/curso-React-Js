import React from 'react';
import Square from './Square';

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;

  const message = winner === false ? "Empate" : `Ganó:`;

  return (
    <section className="winner">
      <div className="text">
        <h2>{message}</h2>
        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Reiniciar</button>
        </footer>
      </div>
    </section>
  );
};

export default WinnerModal;
