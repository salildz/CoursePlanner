import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { useData } from "./DataContext";

const WeeklySchedule1 = () => {
  const {
    busyData,
    setClassroomData,
    classroomData,
    coursesData,
    servicesData,
    generateScheduleSignal,
    setGenerateScheduleSignal,
  } = useData();

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
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let scheduleData = {
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

  const handleClassroom = () => {
    function sortBySecondElement(a, b) {
      return parseInt(a[1]) - parseInt(b[1]);
    }
    classroomData.sort(sortBySecondElement);
    console.log(classroomData);
  };

  const isClasroomFree = (classroom, day, timeslot) => {
    for (let i = 1; i <= 4; i++) {
      if (scheduleData[i][day][timeslot].includes(classroom)) {
        return false;
      }
    }
    return true;
  };



  const assignClasroom = (
    numberOfStudents,
    day,
    startTimeslot,
    numberOfLessons
  ) => {
    for (let i = 0; i < classroomData.length; i++) {
      //iterate through classrooms
      let isCurrentClasroomAvailable = true;
      if (numberOfStudents <= parseInt(classroomData[i][1])) {
        for (
          let j = 0;
          isCurrentClasroomAvailable && j < numberOfLessons;
          j++
        ) {
          //iterate through timeslots
          if (!isClasroomFree(classroomData[i][0], day, startTimeslot + j)) {
            isCurrentClasroomAvailable = false;
          }
        }
        if (isCurrentClasroomAvailable) {
          return classroomData[i][0];
        }
      }
    }
    return "-1"; //returns -1 if there is no suitiable clasroom
  };

  const assignClasroomService = (
    numberOfStudents,
    day,
    startTimeslot,
    numberOfLessons
  ) => {
    for (let i = 0; i < classroomData.length; i++) {
      //iterate through classrooms
      let isCurrentClasroomAvailable = true;
      if (numberOfStudents <= parseInt(classroomData[i][1])) {
        for (
          let j = 0;
          isCurrentClasroomAvailable && j < numberOfLessons;
          j++
        ) {
          //iterate through timeslots
          if (!isClasroomFree(classroomData[i][0], day, startTimeslot + j)) {
            isCurrentClasroomAvailable = false;
          }
        }
        if (isCurrentClasroomAvailable) {
          return classroomData[i][0];
        }
      }
    }
    return "-1"; //returns -1 if there is no suitiable clasroom
  };

  const isInstructorAvailable = (instructor, day, time) => {
    let isAvailable = true;
    for (let i = 0; i < busyData.length; i++) {
      if (
        busyData[i][0] == instructor &&
        busyData[i][1] == day &&
        busyData[i][2].indexOf(time) != -1
      ) {
        isAvailable = false;
      }
    }
    return isAvailable;
  };

  const handleCourses = () => {
    for (let i = 0; i < coursesData.length; i++) {
      let isIncludedInServices = false;
      servicesData.forEach((arr) => {
        //checks if current element of coursesData is a service course
        if (arr.indexOf(coursesData[i][0]) != -1) {
          isIncludedInServices = true;
        }
      });
      if (isIncludedInServices) {
        continue;
      }

      let isAssigned = false; //stores if fully assigned
      let isAssigned2 = false; //stores if first 2 of 2+1 assigned
      switch (coursesData[i][8]) {
        case "3":
          for (let j = 0; !isAssigned && j < 5; j++) {
            //iterate through selected classes' DAYS
            let day = days[j];

            for (
              let k = 0;
              !isAssigned && k < scheduleData[coursesData[i][2]][day].length;
              k++
            ) {
              //iterate through selected day's HOURS          i=coursesData, j=day, k=hour
              if (
                k < 6 &&
                scheduleData[coursesData[i][2]][day][k] == "" &&
                scheduleData[coursesData[i][2]][day][k + 1] == "" &&
                scheduleData[coursesData[i][2]][day][k + 2] == "" &&
                isInstructorAvailable(coursesData[i][7], day, timeslots[k]) &&
                isInstructorAvailable(
                  coursesData[i][7],
                  day,
                  timeslots[k + 1]
                ) &&
                isInstructorAvailable(
                  coursesData[i][7],
                  day,
                  timeslots[k + 2]
                ) &&
                assignClasroom(coursesData[i][6], day, k, 3) != "-1"
              ) {
                ////checks if upcoming 3 hour is free on schedule and instructor

                let classroom = assignClasroom(coursesData[i][6], day, k, 3);
                scheduleData[coursesData[i][2]][day][k] =
                  coursesData[i][0] + "(" + classroom + ")";
                scheduleData[coursesData[i][2]][day][k + 1] =
                  coursesData[i][0] + "(" + classroom + ")";
                scheduleData[coursesData[i][2]][day][k + 2] =
                  coursesData[i][0] + "(" + classroom + ")";
                isAssigned = true;
              }
            }
          }
          break;
        case "2+1":
          if (!isAssigned2) {
            for (let j = 0; !isAssigned2 && j < 5; j++) {
              //iterate through selected classes' DAYS
              let day = days[j];

              for (
                let k = 0;
                !isAssigned2 && k < scheduleData[coursesData[i][2]][day].length;
                k++
              ) {
                //iterate through selected day's HOURS          i=coursesData, j=day, k=hour
                if (
                  k < 7 &&
                  scheduleData[coursesData[i][2]][day][k] == "" &&
                  scheduleData[coursesData[i][2]][day][k + 1] == "" &&
                  isInstructorAvailable(coursesData[i][7], day, timeslots[k]) &&
                  isInstructorAvailable(
                    coursesData[i][7],
                    day,
                    timeslots[k + 1]
                  ) &&
                  assignClasroom(coursesData[i][6], day, k, 2) != "-1"
                ) {
                  //checks if upcoming 2 hour is free on schedule and instructor
                  let classroom = assignClasroom(coursesData[i][6], day, k, 2);
                  scheduleData[coursesData[i][2]][day][k] =
                    coursesData[i][0] + "(" + classroom + ")";
                  scheduleData[coursesData[i][2]][day][k + 1] =
                    coursesData[i][0] + "(" + classroom + ")";
                  isAssigned2 = true;
                }
              }
            }
          }
          if (isAssigned2 && !isAssigned) {
            for (let j = 0; !isAssigned && j < 5; j++) {
              //iterate through selected classes' DAYS
              let day = days[j];

              for (
                let k = 0;
                !isAssigned && k < scheduleData[coursesData[i][2]][day].length;
                k++
              ) {
                //iterate through selected day's HOURS          i=coursesData, j=day, k=hour
                if (
                  scheduleData[coursesData[i][2]][day][k] == "" &&
                  isInstructorAvailable(coursesData[i][7], day, timeslots[k]) &&
                  assignClasroom(coursesData[i][6], day, k, 1) != "-1"
                ) {
                  //checks if that hour is free on schedule and instructor
                  let classroom = assignClasroom(coursesData[i][6], day, k, 1);
                  scheduleData[coursesData[i][2]][day][k] =
                    coursesData[i][0] + "(" + classroom + ")";
                  isAssigned = true;
                }
              }
            }
          }
          break;
        default:
          alert("There is a problem with course file!!");
          return;
      }
    }
  };
  const handleServices = () => {
    let classNumber, day, time, numberOfStudents;
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
          break;
        default:
          break;
      }
      day = servicesData[i][1];
      time = servicesData[i][2].split(",");
      for (let k = 0; k < coursesData.length; k++) {
        if (coursesData[k][0] == servicesData[i][0]) {
          numberOfStudents = parseInt(coursesData[k][6]);
          break;
        }
      }
      let classroom = assignClasroom(numberOfStudents, day, timeslots.indexOf(time[0]) , 2);
      for (let j = 0; j < time.length; j++) {
        scheduleData[classNumber][day][timeslots.indexOf(time[j])] =
          servicesData[i][0] + "(" + classroom + ")";
      }
    }
  };

  const generateSchedule = () => {
    handleClassroom();
    handleServices();
    handleCourses();
  };

  if (generateScheduleSignal) {
    generateSchedule();
  }

  return (
    <div>
      <Row>
        {Object.keys(scheduleData).map((classNumber) => (
          <div className="table-container">
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
          </div>
        ))}
      </Row>
    </div>
  );
};
export default WeeklySchedule1;
