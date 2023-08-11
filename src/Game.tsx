import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { GameContext } from "./GameContext";
import GameOver from "./GameOver";

const Game = () => {
  const [wordInput, setWordInput] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const gameContext = useContext(GameContext);

  const submitRes = () => {
    if (wordInput !== gameContext.words[wordIndex]) {
      gameContext.tries--;
    }

    console.log(gameContext);
    if (gameContext.tries === 0) {
      console.log(gameContext.tries);
      setGameOver(true);
    }
    console.log(gameOver);
  };

  useEffect(() => {}, [gameOver, gameContext]);

  return (
    <div className="game-container border border-light">
      <Row className="game-options"></Row>
      <p className="text-light">{gameContext.words[wordIndex]}</p>
      <br />

      <Form>
        <Form.Control
          value={wordInput}
          onChange={(word) => {
            setWordInput(word.target.value);
          }}
        />
        <Button onClick={submitRes}>Submit</Button>
      </Form>

      {gameOver && <GameOver showProp={gameOver} />}
    </div>
  );
};

export default Game;
