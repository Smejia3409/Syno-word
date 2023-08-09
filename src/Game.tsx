import React, { ChangeEvent, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

const Game = () => {
  const [wordInput, setWordInput] = useState<string>("");

  const submitRes = () => {
    console.log(wordInput);
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
