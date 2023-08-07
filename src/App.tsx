import React from "react";
import { Button, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App ">
      <Start />
    </div>
  );
}

const Start = () => {
  return (
    <div className="start-container text-center">
      <Row>
        <p className="start-title text-danger">SynWord</p>

        <Button variant="danger" className="start-btn">
          Start
        </Button>
      </Row>
    </div>
  );
};

export default App;
