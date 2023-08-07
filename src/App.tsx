import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Loading } from "./Loading";

function App() {
  return (
    <div className="App ">
      <Start />
    </div>
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
            <p className="start-title text-danger">SynWord</p>

            <Button variant="danger" className="start-btn" onClick={clickStart}>
              Start
            </Button>
          </Row>
        </div>
      )}
    </>
  );
};

export default App;
