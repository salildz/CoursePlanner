import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeeklySchedule.css";
import { Container, Row, Col } from "reactstrap";
import { DataProvider } from "./DataContext";
import WeeklySchedule1 from "./WeeklySchedule1";
import CsvPanel from "./CsvPanel";
import AddPanel from "./AddPanel";
import DeletePanel from "./DeletePanel";

function App() {
  return (
    <DataProvider>
      <div>
        <Container>
          <Row>
            <Col>
              <CsvPanel />
            </Col>
            <Col>
              <AddPanel />
            </Col>
            <Col>
              <DeletePanel />
            </Col>
            </Row>
            <Row>
              <WeeklySchedule1 />

            
          </Row>
        </Container>
      </div>
    </DataProvider>
  );
}

export default App;
