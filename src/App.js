import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import WeeklySchedule1 from "./WeeklySchedule1";
import WeeklySchedule2 from "./WeeklySchedule2";
import WeeklySchedule3 from "./WeeklySchedule3";
import WeeklySchedule4 from "./WeeklySchedule4";
import CsvPanel from "./CsvPanel";


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="4">
            <CsvPanel />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
          <WeeklySchedule1 />
          </Col>
          <Col xs="6">
          <WeeklySchedule2 />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
          <WeeklySchedule3 />
          </Col>
          <Col xs="6">
          <WeeklySchedule4 />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
