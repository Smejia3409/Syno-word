import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { GameContext } from "./GameContext";

const Game = () => {
  const [wordInput, setWordInput] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);

  const gameContext = useContext(GameContext);

  const submitRes = () => {
    if (wordInput !== gameContext.words[wordIndex]) {
      gameContext.tries--;
    }

    if (gameContext.tries === 0) {
      alert("Game over");
    }

    console.log(wordInput);
    console.log(gameContext);
  };

  return (
    <div className="game-container border border-light">
      <Row className="game-options"></Row>
      <p className="text-light">word</p>

      <Form>
        <Form.Control
          value={wordInput}
          onChange={(word) => {
            setWordInput(word.target.value);
          }}
        />
        <Button onClick={submitRes}>Submit</Button>
      </Form>
    </div>
  );
};

export default Game;
