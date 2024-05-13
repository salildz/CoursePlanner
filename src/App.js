import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { DataProvider } from "./DataContext";
import WeeklySchedule1 from "./WeeklySchedule1";
import CsvPanel from "./CsvPanel";


function App() {
  return (
    <DataProvider>
    <div>
      <Container>
        <Row>
          <Col xs="4">
            <CsvPanel />
          </Col>
        </Row>
        <Row>
          <WeeklySchedule1 />
        </Row>
        <Row>
        </Row>
      </Container>
    </div>
    </DataProvider>
  );
}

export default App;
