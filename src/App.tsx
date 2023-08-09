import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Loading } from "./Loading";
import Game from "./Game";
import { GameContext } from "./GameContext";
import { IGame } from "./interfaces";

function App() {
  const [gameValue, setGameValue] = useState<IGame>({ words: [], tries: 3 });

  return (
    <GameContext.Provider value={gameValue}>
      <div className="App ">
        <Start />
      </div>
    </GameContext.Provider>
  );
}

const Start = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [startGame, setStartGame] = useState<boolean>(false);

  const clickStart = () => {
    setShowLoading(true);
    setStartGame(true);
  };

  return (
    <>
      {showLoading ? (
        <Loading />
      ) : (
        <div className="start-container text-center">
          <Row>
            {/* <p className="start-title text-danger">SynWord</p>

            <Button variant="danger" className="start-btn" onClick={clickStart}>
              Start
            </Button> */}
            <Game />
          </Row>
        </div>
      )}
    </>
  );
};

export default App;
