import React, { useState } from "react";
import { useData } from "./DataContext";
import { Row, Col } from "reactstrap";

function AddPanel() {
    const {
        coursesData,
        setCoursesData,
      } = useData();

  const handleAddCourse = () => {
    var code = document.getElementById("code").value;
    var name = document.getElementById("name").value;
    var semester = document.getElementById("semester").value;
    var credit = document.getElementById("credit").value;
    var cOrE = document.getElementById("cOrE").value;
    var depOrS = document.getElementById("depOrS").value;
    var student = document.getElementById("student").value;
    var instructor = document.getElementById("instructor").value;
    var hours = document.getElementById("hours").value;

    if (
      code &&
      name &&
      semester &&
      credit &&
      cOrE &&
      depOrS &&
      student &&
      instructor &&
      hours
    ) {
        if(!(semester == "1" || semester == "2" || semester == "3" || semester == "4")){
            alert("Semester must be one of these: \"1, 2, 3, 4\"");
        }
        else if(isNaN(student)){
            alert("Number of students must be a number");
        }else{

        setCoursesData(prevCoursesData => {
            const newCourse = [code, name, semester, credit, cOrE, depOrS, student, instructor, hours];
            return [...prevCoursesData, newCourse];
          });            
        }

    } else {
      alert("Fill in the blanks");
    }
  };
  return (
    <div>
        <h1>Add Course</h1>
        <Row>
    <Col>
      <label htmlFor="code">Code:</label>
      <input type="text" placeholder="Code of the course" id="code" />

      <label htmlFor="name">Name:</label>
      <input type="text" placeholder="Name of the course" id="name" />

      <label htmlFor="semester">Semester:</label>
      <input type="text" placeholder="Semester of the course" id="semester" />

      <label htmlFor="credit">Credit:</label>
      <input type="text" placeholder="Credit of the course" id="credit" />
      </Col>
      <Col>
      <label htmlFor="cOrE">C/E:</label>
      <select id="cOrE">
        <option value="C">Compulsory</option>
        <option value="E">Elective</option>
      </select>

      <label htmlFor="depOrS">D/S:</label>
      <select id="depOrS">
        <option value="D">Department</option>
        <option value="S">Service</option>
      </select>

      <label htmlFor="student">Number of students:</label>
      <input
        type="text"
        placeholder="Number of students of the course"
        id="student"
      />

      <label htmlFor="instructor">Instructor:</label>
      <input
        type="text"
        placeholder="Instructor of the course"
        id="instructor"
      />

      
      </Col>
      </Row>
      <label htmlFor="hours">Hours preference:</label>
      <select id="hours">
        <option value="3">3</option>
        <option value="2+1">2+1</option>
      </select>
      <div>
        <input
          type="button"
          id="addCourse"
          value="Add Course"
          onClick={handleAddCourse}
        />
      </div>
    </div>
  );
}

export default AddPanel;
