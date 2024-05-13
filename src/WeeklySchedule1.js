import React, { useContext } from "react";
import "./WeeklySchedule.css";
import { Row, Col } from "reactstrap";
import { useData } from "./DataContext";

const WeeklySchedule1 = () => {
  const { busyData, classroomData, coursesData, servicesData } = useData();
  console.log("data check: ", servicesData);
  const timeslots = [
    "8:30",
    "9:30",
    "10:30",
    "11:30",
    "12:30",
    "13:30",
    "14:30",
    "15:30",
  ];
  const scheduleData = {
    1: {
      Monday: ["", "", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", "", ""],
    },
    2: {
      Monday: ["", "", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", "", ""],
    },
    3: {
      Monday: ["", "", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", "", ""],
    },
    4: {
      Monday: ["", "", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", "", ""],
    },
  };

  if (servicesData) {
    let classNumber, day, time, timeSlot;
    for (let i = 0; i < servicesData.length; i++) {
      switch (servicesData[i][0].match(/\d+/)[0].charAt(0)) {
        case "1":
          classNumber = "1";
          break;
        case "2":
          classNumber = "2";
          break;
        case "3":
          classNumber = "3";
          break;
        case "4":
          classNumber = "4";
          return;
        default:
          break;
      }
      day = servicesData[i][1];
      time = servicesData[i][2].split(',');
      for (let j = 0; j < time.length; j++) {
        scheduleData[classNumber][day][timeslots.indexOf(time[j])] = servicesData[i][0];
      }
    }
  }

  //1123 1=1.sınıf, 1=pazartesi günü, 2=öğleden sonra, 3=günün 2.dersi(1=1.ders, 2=1.dersin kodu, 3= günün 2.dersi)
  return (
    <div>
      <Row>
        {Object.keys(scheduleData).map((classNumber) => (
          <Col key={classNumber}>
            <h1>{classNumber}. Class</h1>
            <table className="content-table">
              <thead>
                <tr>
                  <th>Day</th>
                  {timeslots.map((time, index) => (
                    <th key={index}>{time}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(scheduleData[classNumber]).map((day) => (
                  <tr key={day}>
                    <td>{day}</td>
                    {scheduleData[classNumber][day].map((className, index) => (
                      <td key={index}>{className}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default WeeklySchedule1;
