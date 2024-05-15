import React, { useState } from "react";
import { useData } from "./DataContext";
import { Row, Col } from "reactstrap";

function DeletePanel() {
  const { coursesData, setCoursesData, servicesData, setServicesData } =
    useData();

  const handleDeleteCourse = () => {
    var value = document.getElementById("courseToDelete").value;

    if (value) {
      setCoursesData((prevCoursesData) => {
        const updatedCourses = [...prevCoursesData];
        const deletedCourse = updatedCourses.splice(value, 1);
        let indexInServicesData = -1;

        for (let i = 0; i < servicesData.length; i++) {
          if (servicesData[i][0] == deletedCourse[0][0]) {
            indexInServicesData = i;
            break;
          }
        }
        if (indexInServicesData !== -1) {
          const updatedServicesData = [...servicesData];
          updatedServicesData.splice(indexInServicesData, 1);
          setServicesData(updatedServicesData);
        }
        return updatedCourses;
      });
    } else {
      alert("Select one of the courses to delete");
    }
  };
  return (
    <div>
      <h1>Delete Course</h1>
      <Row>
        <Col>
          <label htmlFor="courseToDelete">Select a course to delete:</label>
          <select id="courseToDelete">
            <option value="">Select a course</option>
            {coursesData.map((course, index) => (
              <option value={index}>
                {course[0]} - {course[1]}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <div>
        <input
          type="button"
          id="deleteCourse"
          value="Delete Course"
          onClick={handleDeleteCourse}
        />
      </div>
    </div>
  );
}

export default DeletePanel;
